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
      render={<main />}
      $css={{
        width: "100%",
        minHeight: "100dvh",
        background:
          "radial-gradient(circle at top, rgba(11, 14, 43, 0.92), #020311 60%)",
      }}
    >
      <Box
        $css={{
          position: "relative",
          width: "100%",
          maxWidth: "390px",
          margin: "0 auto",
          height: "100dvh",
          minHeight: "100dvh",
          maxHeight: "844px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #060715 0%, #00032A 100%)",
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
            height: "100%",
            paddingLeft: "max(39px, calc(env(safe-area-inset-left) + 16px))",
            paddingRight: "max(39px, calc(env(safe-area-inset-right) + 16px))",
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
              variant="outline"
              $css={{
                width: "100%",
                minHeight: "59px",
                borderRadius: "999px",
                borderColor: "#E2E8F0",
                borderWidth: "1.5px",
                backgroundColor: "#FFFFFF",
                color: "#0F172B",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.31px",
                justifyContent: "center",
              }}
            >
              로그인
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
