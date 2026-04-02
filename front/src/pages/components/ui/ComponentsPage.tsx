import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
} from "@vapor-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { MentorCard, type MentorCardProps } from "@/shared/ui/cards";

const SAMPLE_MENTORS: readonly MentorCardProps[] = [
  {
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
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "나무 공방 작업대와 재료",
    experienceLabel: "24년",
    title: "목공 공예 멘토",
    mentorName: "김연희",
    mentorAgeLabel: "61세",
    description:
      "생활 소품부터 전통 짜맞춤까지, 손의 감각으로 배우는 목공 수업입니다. 도구 선택과 마감 노하우를 함께 익힙니다.",
    location: "제주시 한경면 저지리",
    likeCount: 41,
    tags: ["재료 이해", "짜맞춤", "표면 마감"],
  },
  {
    to: ROUTES.mentorPreview,
    imageSrc:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "전통 직조 재료와 작업 장면",
    experienceLabel: "12년",
    title: "전통 직조 입문 클래스 이름이 길어졌을 때 테스트",
    mentorName: "오해린",
    mentorAgeLabel: "58세",
    description:
      "긴 텍스트와 긴 위치명을 테스트하기 위한 샘플입니다. 직조의 기본 원리부터 제주 색감에 맞춘 실 조합까지 차근차근 설명합니다.",
    location: "제주시 조천읍 선흘리 공예문화복합센터",
    likeCount: 127,
    tags: ["실 염색", "직조 구조", "색 조합", "패턴 해석"],
  },
] as const;

export function ComponentsPage() {
  const [bookmarks, setBookmarks] = useState<Record<number, boolean>>({
    0: false,
    1: true,
    2: false,
  });

  const toggleBookmark = (index: number) => {
    setBookmarks((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

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
                  MentorCard 검증 페이지
                </Text>
                <Text typography="body2" foreground="normal-100">
                  기본 상태, 찜 상태, 긴 텍스트 상태를 한 화면에서 확인할 수
                  있도록 구성했습니다.
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
            Interactive States
          </Text>
          <Text typography="body2" foreground="normal-100">
            카드 전체 클릭, 찜 버튼 분리, 길어진 텍스트 처리까지 같이 점검합니다.
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
              isBookmarked={bookmarks[index]}
              onBookmarkToggle={() => toggleBookmark(index)}
            />
          ))}
        </HStack>

        <VStack $css={{ gap: "$150" }}>
          <Text render={<h2 />} typography="heading5">
            Read-only Variant
          </Text>
          <Text typography="body2" foreground="normal-100">
            `onBookmarkToggle` 없이 렌더링했을 때의 표시 상태입니다.
          </Text>
        </VStack>

        <MentorCard
          {...SAMPLE_MENTORS[1]}
          isBookmarked
        />
      </VStack>
    </Box>
  );
}
