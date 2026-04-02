import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useTheme,
} from "@vapor-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { MentorCard } from "@/shared/ui/cards";

const DEMO_MENTOR = {
  to: ROUTES.mentorPreview,
  imageSrc:
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "제주 돌담과 숲 풍경",
  experienceLabel: "38년",
  title: "돌담 장인",
  mentorName: "박철수",
  mentorAgeLabel: "72세",
  description:
    "제주의 상징인 돌담을 쌓는 전통 기술을 배워보세요. 바람을 통과시키는 제주만의 독특한 쌓기 방식을 알려드립니다.",
  location: "서귀포시 성산읍",
  likeCount: 98,
  tags: ["돌 선별", "쌓기 기술", "구조 설계"],
} as const;

export function HomePage() {
  const { resolvedTheme, setTheme, mounted } = useTheme();
  const currentThemeLabel = mounted ? (resolvedTheme ?? "system") : "loading";
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Box
      render={<main />}
      $css={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "$400",
        backgroundColor: "$bg-canvas-200",
      }}
    >
      <VStack
        $css={{
          width: "100%",
          maxWidth: "760px",
          gap: "$250",
          alignItems: "center",
        }}
      >
        <VStack
          $css={{
            gap: "$100",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text typography="body3" foreground="primary-100">
            Figma component preview
          </Text>
          <Text render={<h1 />} typography="heading3">
            MentorCard 공통 컴포넌트
          </Text>
          <Text typography="body2" foreground="normal-100">
            카드 전체를 클릭하면 임시 상세 라우트로 이동합니다. 우상단 하트는
            별도 인터랙션으로 분리되어 있습니다.
          </Text>
          <HStack
            $css={{
              gap: "$150",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              disabled={!mounted}
              variant="outline"
            >
              {resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"} (
              {currentThemeLabel})
            </Button>
            <Button render={<Link to={ROUTES.components} />}>
              공통 컴포넌트 테스트 페이지
            </Button>
          </HStack>
        </VStack>

        <MentorCard
          {...DEMO_MENTOR}
          isBookmarked={isBookmarked}
          onBookmarkToggle={() => setIsBookmarked((current) => !current)}
        />
      </VStack>
    </Box>
  );
}
