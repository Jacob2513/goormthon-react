import {
  Box,
  Card,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@vapor-ui/core";
import {
  HeartIcon,
  HeartOutlineIcon,
  LocationOutlineIcon,
} from "@vapor-ui/icons";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";

export type MentorCardProps = {
  to: string;
  imageSrc: string;
  imageAlt: string;
  experienceLabel: string;
  title: string;
  mentorName: string;
  mentorAgeLabel: string;
  description: string;
  location: string;
  likeCount: number;
  tags: readonly string[];
  isBookmarked?: boolean;
  onBookmarkToggle?: () => void;
};

export function MentorCard({
  to,
  imageSrc,
  imageAlt,
  experienceLabel,
  title,
  mentorName,
  mentorAgeLabel,
  description,
  location,
  likeCount,
  tags,
  isBookmarked = false,
  onBookmarkToggle,
}: MentorCardProps) {
  const handleBookmarkClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onBookmarkToggle?.();
  };

  return (
    <Card.Root
      $css={{
        position: "relative",
        width: "100%",
        maxWidth: "355px",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "$border-normal",
        backgroundColor: "$bg-canvas-100",
        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <Box
        render={<Link to={to} aria-label={`${title} 상세 보기`} />}
        $css={{
          display: "block",
          color: "inherit",
        }}
      >
        <Box
          $css={{
            position: "relative",
            aspectRatio: "355 / 192",
            overflow: "hidden",
            backgroundColor: "$bg-secondary-100",
          }}
        >
          <Box
            render={<img src={imageSrc} alt={imageAlt} />}
            $css={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <Box
            $css={{
              position: "absolute",
              left: "$150",
              bottom: "$150",
              padding: "0 $150",
              height: "28px",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.92)",
              boxShadow: "0 8px 20px rgba(15, 23, 42, 0.12)",
            }}
          >
            <Text
              typography="body3"
              $css={{
                color: "$fg-secondary-200",
                fontWeight: 600,
              }}
            >
              {experienceLabel}
            </Text>
          </Box>
        </Box>

        <Card.Body
          $css={{
            padding: "$250",
          }}
        >
          <VStack $css={{ gap: "$200" }}>
            <VStack $css={{ gap: "$050" }}>
              <Text
                render={<h2 />}
                typography="heading5"
                $css={{
                  color: "$fg-secondary-200",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Text>
              <Text typography="body2" foreground="normal-100">
                {mentorName} 멘토 · {mentorAgeLabel}
              </Text>
            </VStack>

            <Text
              typography="body2"
              foreground="normal-100"
              $css={{
                minHeight: "40px",
                overflow: "hidden",
              }}
            >
              {description}
            </Text>

            <HStack
              $css={{
                gap: "$150",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <HStack
                $css={{
                  gap: "$050",
                  alignItems: "center",
                  minWidth: 0,
                }}
              >
                <LocationOutlineIcon
                  size={14}
                  aria-hidden="true"
                  color="var(--vapor-color-foreground-normal-100)"
                />
                <Text
                  typography="body3"
                  foreground="normal-100"
                  $css={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {location}
                </Text>
              </HStack>
              <HStack
                $css={{
                  gap: "$050",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <HeartOutlineIcon
                  size={14}
                  aria-hidden="true"
                  color="var(--vapor-color-foreground-normal-100)"
                />
                <Text typography="body3" foreground="normal-100">
                  {likeCount}
                </Text>
              </HStack>
            </HStack>

            <HStack
              $css={{
                gap: "$100",
                flexWrap: "wrap",
              }}
            >
              {tags.map((tag) => (
                <Box
                  key={tag}
                  $css={{
                    padding: "0 $100",
                    height: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "9999px",
                    backgroundColor: "#F0F9FF",
                  }}
                >
                  <Text
                    typography="body3"
                    $css={{
                      color: "#0069A8",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </Text>
                </Box>
              ))}
            </HStack>
          </VStack>
        </Card.Body>
      </Box>

      <IconButton
        aria-label={isBookmarked ? "찜 해제" : "찜 추가"}
        shape="circle"
        variant="ghost"
        colorPalette="contrast"
        onClick={handleBookmarkClick}
        disabled={!onBookmarkToggle}
        $css={{
          position: "absolute",
          top: "$150",
          right: "$150",
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(255,255,255,0.9)",
          color: "$fg-secondary-200",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.14)",
        }}
      >
        {isBookmarked ? (
          <HeartIcon size={20} aria-hidden="true" />
        ) : (
          <HeartOutlineIcon size={20} aria-hidden="true" />
        )}
      </IconButton>
    </Card.Root>
  );
}
