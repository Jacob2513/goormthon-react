import { defineTransformer } from "orval";

const HTTP_METHODS = [
  "delete",
  "get",
  "head",
  "options",
  "patch",
  "post",
  "put",
  "trace",
] as const;

const normalizeWildcardJsonContent = <T extends { content?: Record<string, unknown> }>(
  value: T,
): T => {
  const content = value.content;

  if (!content || content["application/json"] || !content["*/*"]) {
    return value;
  }

  const { ["*/*"]: wildcardContent, ...restContent } = content;

  return {
    ...value,
    content: {
      "application/json": wildcardContent,
      ...restContent,
    },
  };
};

const isReferenceObject = (value: unknown): value is { $ref: string } =>
  typeof value === "object" && value !== null && "$ref" in value;

export default defineTransformer((openApiDocument) => {
  const nextPaths = Object.fromEntries(
    Object.entries(openApiDocument.paths ?? {}).map(([path, pathItem]) => {
      if (!pathItem) {
        return [path, pathItem];
      }

      const nextPathItem = { ...pathItem };

      HTTP_METHODS.forEach((method) => {
        const operation = nextPathItem[method];

        if (!operation?.responses) {
          return;
        }

        nextPathItem[method] = {
          ...operation,
          responses: Object.fromEntries(
            Object.entries(operation.responses).map(([status, response]) => {
              if (!response || isReferenceObject(response)) {
                return [status, response];
              }

              return [
                status,
                normalizeWildcardJsonContent(
                  response as { content?: Record<string, unknown> },
                ),
              ];
            }),
          ),
        };
      });

      return [path, nextPathItem];
    }),
  );

  return {
    ...openApiDocument,
    paths: nextPaths,
  };
});
