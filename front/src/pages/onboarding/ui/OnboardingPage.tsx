import {
  Box,
  Button,
  Text,
  VStack,
} from "@vapor-ui/core";
import { Link } from "react-router-dom";
import bottomWaveImageUrl from "@/assets/onboarding/bottom-wave.svg";
import smallWaveImageUrl from "@/assets/onboarding/small-wave.svg";
import topWaveImageUrl from "@/assets/onboarding/top-wave.svg";
import { ROUTES } from "@/shared/config/routes";
import { OnboardingArtwork } from "./OnboardingArtwork";

export function OnboardingPage() {
  return (
    <Box
      $css={{
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, rgba(11, 14, 43, 0.92), #020311 60%)",
      }}
    >
      <VStack
        $css={{
          minHeight: "100dvh",
          position: "relative",
        }}
      >
        <Box
          render={<img src={smallWaveImageUrl} alt="" />}
          aria-hidden="true"
          $css={{
            position: "absolute",
            top: "57.7%",
            right: "-6px",
            width: "132px",
            height: "20px",
            display: "block",
            opacity: 0.95,
          }}
        />
        <Box
          render={<img src={topWaveImageUrl} alt="" />}
          aria-hidden="true"
          $css={{
            position: "absolute",
            left: "-77px",
            top: "62.1%",
            width: "313px",
            height: "42px",
            display: "block",
            opacity: 0.96,
          }}
        />
        <Box
          render={<img src={bottomWaveImageUrl} alt="" />}
          aria-hidden="true"
          $css={{
            position: "absolute",
            right: "-73px",
            bottom: "26.8%",
            width: "355px",
            height: "61px",
            display: "block",
            opacity: 0.98,
          }}
        />

        <VStack
          $css={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            paddingLeft: "39px",
            paddingRight: "39px",
            paddingTop: "max(76px, env(safe-area-inset-top))",
            paddingBottom: "max(52px, env(safe-area-inset-bottom))",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <VStack
            $css={{
              width: "100%",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <OnboardingArtwork />

            <VStack
              $css={{
                width: "100%",
                alignItems: "center",
                gap: "18px",
                textAlign: "center",
              }}
            >
              <Text
                render={<h1 />}
                $css={{
                  fontFamily:
                    '"EF_jejudoldam", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "90px",
                  lineHeight: "106px",
                  letterSpacing: "-1.66px",
                  color: "#FFFFFF",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                전허게
              </Text>
              <Text
                typography="heading5"
                $css={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  letterSpacing: "-0.44px",
                }}
              >
                세대를 잇는 제주의 가치
              </Text>
            </VStack>
          </VStack>

          <VStack
            $css={{
              width: "100%",
              gap: "16px",
            }}
          >
            <Button
              render={<Link to={ROUTES.home} />}
              $css={{
                width: "100%",
                minHeight: "56px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#1CB3CB",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.31px",
                boxShadow: "none",
                justifyContent: "center",
              }}
            >
              시작하기
            </Button>
            <Button
              render={<Link to={ROUTES.login} />}
              $css={{
                width: "100%",
                height: "58.923px",
                paddingInline: "33.471px",
                paddingBlock: "17.471px",
                borderRadius: "999px",
                borderColor: "#E2E8F0",
                borderStyle: "solid",
                borderWidth: "1.471px",
                backgroundColor: "#FFFFFF",
                color: "#0F172B",
                fontFamily:
                  '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.31px",
                justifyContent: "center",
                boxShadow: "none",
              }}
            >
              로그인
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}
