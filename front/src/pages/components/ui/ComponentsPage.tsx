import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
} from "@vapor-ui/core";
import { Link } from "react-router-dom";
import mentorCardImage from "@/assets/matching/mentor-card.jpg";
import { ROUTES } from "@/shared/config/routes";
import {
  MentorCard,
  ThumbnailCard,
  type MentorCardProps,
  type ThumbnailCardProps,
} from "@/shared/ui/cards";

const SAMPLE_MENTORS: readonly MentorCardProps[] = [
  {
    to: ROUTES.mentorPreview,
    imageSrc: mentorCardImage,
    imageAlt: "제주 해녀 작업 현장",
    badgeLabel: "45년 이어온",
    title: "제주의 말을 돌보는 하루",
    metaLabel: "김** 해녀 · D-20",
    description:
      "제주 바다의 보물을 캐는 해녀의 삶을 배워보세요. 물질의 기술과 해산물에 대한 깊은 지식을 전수합니다.",
    location: "제주시 구좌읍",
    tags: ["물질", "해산물 채취", "바다 안전"],
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc: mentorCardImage,
    imageAlt: "제주 돌담 작업 현장",
    badgeLabel: "25년 이어온",
    title: "돌담 장인",
    metaLabel: "김** 장인 · D-20",
    description:
      "제주의 상징인 돌담을 쌓는 전통 기술을 배워보세요. 바람을 통과시키는 제주만의 독특한 쌓기 방식을 배웁니다.",
    location: "제주시 구좌읍",
    tags: ["쌓기", "바람길 설계", "제주 돌"],
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc: mentorCardImage,
    imageAlt: "제주 말 농장 체험 장면",
    badgeLabel: "25년 이어온",
    title: "말 농장 운영자 이름이 길어졌을 때 카드 처리 테스트",
    metaLabel: "김** 농장주 · D-20",
    description:
      "제주의 전통 말농장 일을 실전 기술로 배워보세요. 사육과 관리부터 관광 연계 운영까지 함께 익힙니다.",
    location: "서귀포시 표선면",
    tags: ["사육", "목장 관리", "현장 운영", "체험"],
  },
] as const;

const SAMPLE_THUMBNAILS: readonly ThumbnailCardProps[] = [
  {
    to: ROUTES.mentorPreview,
    imageSrc:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "초원에서 풀을 뜯는 제주 말",
    badgeLabel: "45년 이어온",
    title: "제주의 말을 돌보는 하루",
    statusLabel: "D-24",
    caption: "제주시 구좌읍",
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "바닷가 언덕을 달리는 말 무리",
    badgeLabel: "23년 이어온",
    title: "한라산 자락을 따라 달리는 승마 체험 프로그램 이름이 길어졌을 때",
    statusLabel: "모집 마감 3일 전",
    caption: "서귀포시 표선면 가시리 목장문화센터",
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc:
      "https://images.unsplash.com/photo-1504598318550-17eba1008a68?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "넓은 들판을 걷는 말과 사람",
    badgeLabel: "8년 이어온",
    title: "들판 산책과 돌봄 기록",
    statusLabel: "상시 모집",
    caption: "제주시 애월읍",
  },
] as const;

export function ComponentsPage() {
  return (
    <Box
      render={<main />}
      $css={{
        minHeight: "100vh",
        padding: "$400",
        backgroundColor: "$bg-canvas-200",
      }}
    >
      <VStack
        $css={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "$300",
        }}
      >
        <Card.Root
          $css={{
            boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Card.Body>
            <VStack $css={{ gap: "$200" }}>
              <VStack $css={{ gap: "$050" }}>
                <Text typography="body3" foreground="primary-100">
                  Shared component test page
                </Text>
                <Text render={<h1 />} typography="heading3">
                  공통 컴포넌트 검증 페이지
                </Text>
                <Text typography="body2" foreground="normal-100">
                  MentorCard와 ThumbnailCard를 Figma 기준 카드 레이아웃으로
                  확인할 수 있도록 구성했습니다.
                </Text>
              </VStack>
              <HStack
                $css={{
                  gap: "$150",
                  flexWrap: "wrap",
                }}
              >
                <Button render={<Link to={ROUTES.home} />}>홈으로 돌아가기</Button>
                <Button variant="outline" render={<Link to={ROUTES.tokens} />}>
                  토큰 페이지 보기
                </Button>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>

        <VStack $css={{ gap: "$150" }}>
          <Text render={<h2 />} typography="heading5">
            MentorCard
          </Text>
          <Text typography="body2" foreground="normal-100">
            matching 페이지에 사용하는 카드 디자인과 긴 텍스트 처리를 점검합니다.
          </Text>
        </VStack>

        <HStack
          $css={{
            gap: "$250",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {SAMPLE_MENTORS.map((mentor, index) => (
            <MentorCard
              key={`${mentor.title}-${index}`}
              {...mentor}
            />
          ))}
        </HStack>

        <VStack $css={{ gap: "$150" }}>
          <Text render={<h2 />} typography="heading5">
            ThumbnailCard
          </Text>
          <Text typography="body2" foreground="normal-100">
            Figma 썸네일 카드의 기본 폭, 긴 텍스트, 부모 폭 확장 상태를 함께
            점검합니다.
          </Text>
        </VStack>

        <HStack
          $css={{
            gap: "$250",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <Box
            $css={{
              width: "100%",
              maxWidth: "283px",
            }}
          >
            <ThumbnailCard {...SAMPLE_THUMBNAILS[0]} />
          </Box>
          <Box
            $css={{
              width: "100%",
              maxWidth: "283px",
            }}
          >
            <ThumbnailCard {...SAMPLE_THUMBNAILS[1]} />
          </Box>
        </HStack>

        <Box
          $css={{
            width: "100%",
            maxWidth: "420px",
          }}
        >
          <ThumbnailCard {...SAMPLE_THUMBNAILS[2]} />
        </Box>
      </VStack>
    </Box>
  );
}
