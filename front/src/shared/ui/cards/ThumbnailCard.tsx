import {
  Badge,
  Box,
  Card,
  Text,
  VStack,
} from "@vapor-ui/core";
import { Link } from "react-router-dom";

export type ThumbnailCardProps = {
  to: string;
  imageSrc: string;
  imageAlt: string;
  badgeLabel: string;
  title: string;
  statusLabel: string;
  caption: string;
};

const SINGLE_LINE_ELLIPSIS_STYLES = {
  width: "100%",
  display: "block",
  minWidth: 0,
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as const;

export function ThumbnailCard({
  to,
  imageSrc,
  imageAlt,
  badgeLabel,
  title,
  statusLabel,
  caption,
}: ThumbnailCardProps) {
  return (
    <Box
      render={<Link to={to} aria-label={`${title} 상세 보기`} />}
      $css={{
        display: "block",
        width: "100%",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Card.Root
        $css={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "14px",
          border: "1px solid #E2E8F0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          $css={{
            position: "relative",
            aspectRatio: "281 / 160",
            overflow: "hidden",
            backgroundColor: "#F8FAFC",
          }}
        >
          <Box
            render={<img src={imageSrc} alt={imageAlt} />}
            $css={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Badge
            shape="pill"
            size="md"
            colorPalette="warning"
            $css={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "#FFD9C8",
              color: "#EF6F25",
              borderRadius: "999px",
              boxShadow: "none",
              fontWeight: 500,
            }}
          >
            {badgeLabel}
          </Badge>
        </Box>

        <Card.Body
          $css={{
            minHeight: "107px",
            padding: "16px",
            minWidth: 0,
          }}
        >
          <VStack
            $css={{
              gap: "2px",
              width: "100%",
              minWidth: 0,
            }}
          >
            <VStack
              $css={{
                gap: "4px",
                width: "100%",
                minWidth: 0,
              }}
            >
              <Text
                render={<h3 />}
                typography="heading5"
                $css={{
                  color: "#393939",
                  ...SINGLE_LINE_ELLIPSIS_STYLES,
                }}
              >
                {title}
              </Text>
              <Text
                typography="subtitle1"
                $css={{
                  color: "#4C4C4C",
                  ...SINGLE_LINE_ELLIPSIS_STYLES,
                }}
              >
                {statusLabel}
              </Text>
            </VStack>

            <Text
              typography="body3"
              $css={{
                color: "#A3A3A3",
                ...SINGLE_LINE_ELLIPSIS_STYLES,
              }}
            >
              {caption}
            </Text>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
