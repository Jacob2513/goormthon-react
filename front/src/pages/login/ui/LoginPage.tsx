import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
} from "@vapor-ui/core";
import { ROUTES } from "@/shared/config/routes";

export function LoginPage() {
  return (
    <Box
      render={<main />}
      $css={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "$400",
        background:
          "radial-gradient(circle at top, rgba(11, 14, 43, 0.92), #020311 60%)",
      }}
    >
      <Card.Root
        $css={{
          width: "min(520px, 100%)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.24)",
        }}
      >
        <Card.Body>
          <VStack
            $css={{
              gap: "$200",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text typography="body3" foreground="primary-100">
              Login Placeholder
            </Text>
            <Text render={<h1 />} typography="heading3">
              로그인 화면은 다음 단계에서 구현합니다
            </Text>
            <Text typography="body2" foreground="normal-100">
              현재는 라우팅 흐름과 진입 경로만 맞춘 상태입니다. 이후 세션 기반
              로그인 폼과 인증 처리 로직을 여기에 연결하면 됩니다.
            </Text>
            <HStack
              $css={{
                gap: "$150",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button render={<Link to={ROUTES.onboarding} />}>
                온보딩으로 돌아가기
              </Button>
              <Button variant="outline" render={<Link to={ROUTES.home} />}>
                메인으로 이동
              </Button>
            </HStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
