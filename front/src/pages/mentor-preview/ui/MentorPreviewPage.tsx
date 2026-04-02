import { Box, Button, Card, Text, VStack } from "@vapor-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";

export function MentorPreviewPage() {
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
          width: "min(520px, 100%)",
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Card.Body>
          <VStack $css={{ gap: "$150" }}>
            <Text typography="body3" foreground="primary-100">
              MentorCard preview
            </Text>
            <Text render={<h1 />} typography="heading4">
              멘토 상세 프리뷰 라우트
            </Text>
            <Text typography="body2" foreground="normal-100">
              카드 전체 클릭 동작을 확인하기 위한 임시 라우트입니다. 실제
              멘토 상세 페이지는 이후에 연결하면 됩니다.
            </Text>
            <Button render={<Link to={ROUTES.home} />}>홈으로 돌아가기</Button>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
