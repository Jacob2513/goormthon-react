import { Box } from "@vapor-ui/core";
import gogglesMaskImageUrl from "@/assets/onboarding/goggles-mask.svg";
import gogglesImageUrl from "@/assets/onboarding/goggles.svg";
import snorkelImageUrl from "@/assets/onboarding/snorkel.svg";
import starImageUrl from "@/assets/onboarding/star.svg";
import stoneImageUrl from "@/assets/onboarding/stone.svg";
import tangerineImageUrl from "@/assets/onboarding/tangerine.svg";

function OnboardingGogglesIcon() {
  return (
    <Box
      $css={{
        position: "absolute",
        top: "4px",
        left: "28px",
        width: "67px",
        height: "59px",
      }}
    >
      <Box
        render={<img src={snorkelImageUrl} alt="" />}
        $css={{
          position: "absolute",
          top: "5.55px",
          left: "50.35px",
          width: "16.113px",
          height: "38.121px",
          display: "block",
          transform: "rotate(6.5deg)",
          transformOrigin: "center",
        }}
      />
      <Box
        render={<img src={gogglesImageUrl} alt="" />}
        $css={{
          position: "absolute",
          top: "29.81px",
          left: "0px",
          width: "53.132px",
          height: "27.359px",
          display: "block",
          transform: "rotate(6.5deg)",
          transformOrigin: "center",
        }}
      />
      <Box
        render={
          <div
            style={{
              position: "absolute",
              top: "28.64px",
              left: "4.4px",
              width: "5px",
              height: "31.646px",
              backgroundColor: "#83F0FF",
              transform: "rotate(40.34deg)",
              transformOrigin: "center",
              WebkitMaskImage: `url(${gogglesMaskImageUrl})`,
              maskImage: `url(${gogglesMaskImageUrl})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "-3.244px 2.327px",
              maskPosition: "-3.244px 2.327px",
              WebkitMaskSize: "50.814px 25.04px",
              maskSize: "50.814px 25.04px",
            }}
          />
        }
      />
      <Box
        render={
          <div
            style={{
              position: "absolute",
              top: "27.31px",
              left: "-0.82px",
              width: "2.488px",
              height: "29.96px",
              backgroundColor: "#83F0FF",
              transform: "rotate(40.34deg)",
              transformOrigin: "center",
              WebkitMaskImage: `url(${gogglesMaskImageUrl})`,
              maskImage: `url(${gogglesMaskImageUrl})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "1.981px 3.651px",
              maskPosition: "1.981px 3.651px",
              WebkitMaskSize: "50.814px 25.04px",
              maskSize: "50.814px 25.04px",
            }}
          />
        }
      />
    </Box>
  );
}

function OnboardingStarIcon() {
  return (
    <Box
      $css={{
        position: "absolute",
        top: "68.46px",
        left: "0px",
        width: "35.236px",
        height: "34.927px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        render={<img src={starImageUrl} alt="" />}
        $css={{
          width: "25.865px",
          height: "24.772px",
          display: "block",
          transform: "rotate(-33.45deg)",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
}

function OnboardingStoneIcon() {
  return (
    <Box
      $css={{
        position: "absolute",
        top: "88.29px",
        left: "31.5px",
        width: "63.996px",
        height: "45.689px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        render={<img src={stoneImageUrl} alt="" />}
        $css={{
          width: "59.58px",
          height: "38.392px",
          display: "block",
          transform: "rotate(-7.34deg)",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
}

function OnboardingTangerineIcon() {
  return (
    <Box
      $css={{
        position: "absolute",
        top: "153.1px",
        left: "33.82px",
        width: "57.6px",
        height: "60.675px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        render={<img src={tangerineImageUrl} alt="" />}
        $css={{
          width: "51.125px",
          height: "54.675px",
          display: "block",
          transform: "rotate(7.23deg)",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
}

export function OnboardingArtwork() {
  return (
    <Box
      aria-hidden="true"
      $css={{
        position: "relative",
        width: "112px",
        height: "214px",
        flexShrink: 0,
      }}
    >
      <OnboardingGogglesIcon />
      <OnboardingStarIcon />
      <OnboardingStoneIcon />
      <OnboardingTangerineIcon />
    </Box>
  );
}
