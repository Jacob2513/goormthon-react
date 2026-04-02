import {
  Box,
  Button,
  Callout,
  Card,
  HStack,
  Text,
  VStack,
} from "@vapor-ui/core";
import { InfoCircleOutlineIcon, RefreshOutlineIcon } from "@vapor-ui/icons";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected application error";
};

export function RootErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const message = getErrorMessage(error);

  return (
    <Box
      render={<main />}
      $css={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "$400",
      }}
    >
      <Card.Root
        $css={{
          width: "min(640px, 100%)",
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Card.Body>
          <VStack $css={{ gap: "$200" }}>
            <VStack $css={{ gap: "$050" }}>
              <Text typography="body3" foreground="danger-100">
                Application error
              </Text>
              <Text render={<h1 />} typography="heading3">
                Something broke while rendering this route
              </Text>
              <Text typography="body2" foreground="normal-100">
                A route-level error was caught by the root boundary. You can retry
                the current page or return to the home route.
              </Text>
            </VStack>

            <Callout.Root colorPalette="danger">
              <Callout.Icon>
                <InfoCircleOutlineIcon />
              </Callout.Icon>
              {message}
            </Callout.Root>

            <HStack
              $css={{
                gap: "$150",
                flexWrap: "wrap",
              }}
            >
              <Button onClick={() => window.location.reload()}>
                <HStack
                  $css={{
                    gap: "$100",
                    alignItems: "center",
                  }}
                >
                  <RefreshOutlineIcon size={16} aria-hidden="true" />
                  <span>Reload page</span>
                </HStack>
              </Button>
              <Button variant="outline" onClick={() => navigate(ROUTES.home)}>
                Go home
              </Button>
            </HStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
