import { Box, Text, VStack } from "@vapor-ui/core";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import backArrowIcon from "@/assets/reservation/back-arrow.svg";
import calendarIcon from "@/assets/reservation/calendar.svg";
import heroImage from "@/assets/reservation/hero.jpg";
import peopleIcon from "@/assets/reservation/people.svg";
import { ROUTES } from "@/shared/config/routes";

const PAGE_BACKGROUND = "var(--vapor-color-background-surface-200, #f7f7f7)";
const SURFACE_WHITE = "rgba(255, 255, 255, 0.9)";
const BORDER_COLOR = "#E1E1E1";
const PRIMARY_TEXT = "#0F172B";
const SECONDARY_TEXT = "#767676";
const BODY_TEXT = "#314158";
const ACCENT_BLUE = "#1CB3CB";
const CARD_RADIUS = "16px";
const SMALL_RADIUS = "14px";
const CONTENT_WIDTH = "358px";
const EXPLORE_TITLE = "제주의 말을 돌보는 하루";
const EXPLORE_SUBTITLE = "해녀 물질 체험";
const EXPLORE_MENTOR = "김영숙 해녀";
const UNIT_PRICE = 50000;

function formatCurrency(amount: number) {
  return `₩${new Intl.NumberFormat("ko-KR").format(amount)}`;
}

function SectionCard({
  children,
  height,
}: {
  children: ReactNode;
  height: string;
}) {
  return (
    <Box
      $css={{
        width: "100%",
        height,
        borderRadius: CARD_RADIUS,
        border: `1px solid ${BORDER_COLOR}`,
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

function SectionHeader({
  iconSrc,
  title,
}: {
  iconSrc: string;
  title: string;
}) {
  return (
    <Box
      $css={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        height: "28px",
      }}
    >
      <Box
        render={<img src={iconSrc} alt="" aria-hidden="true" />}
        $css={{
          width: "20px",
          height: "20px",
          display: "block",
          flexShrink: 0,
        }}
      />
      <Text
        render={<h2 />}
        $css={{
          color: PRIMARY_TEXT,
          fontFamily:
            '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: 700,
          letterSpacing: "-0.4395px",
        }}
      >
        {title}
      </Text>
    </Box>
  );
}

function CounterButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <Box
      render={<button type="button" onClick={onClick} aria-label={label} />}
      $css={{
        width: "40px",
        height: "40px",
        border: "none",
        borderRadius: "999px",
        backgroundColor: "#F1F5F9",
        color: "#0A0A0A",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <Text
        $css={{
          color: "inherit",
          fontFamily: '"Inter", sans-serif',
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          letterSpacing: "-0.3125px",
        }}
      >
        {label}
      </Text>
    </Box>
  );
}

export function ReservationPage() {
  const navigate = useNavigate();
  const [participantCount, setParticipantCount] = useState(1);
  const totalPrice = UNIT_PRICE * participantCount;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(ROUTES.experienceDetail);
  };

  return (
    <Box
      $css={{
        position: "relative",
        width: "100%",
        minHeight: "100%",
        backgroundColor: PAGE_BACKGROUND,
        overflowX: "hidden",
      }}
    >
      <Box
        $css={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
        }}
      >
        <Box
          $css={{
            width: "100%",
            height: "48px",
            backgroundColor: "#FFFFFF",
            opacity: 0.9,
          }}
        />
        <Box
          $css={{
            width: "100%",
            height: "56px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box
            $css={{
              display: "grid",
              gridTemplateColumns: "40px 1fr 40px",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              render={
                <button type="button" onClick={handleBack} aria-label="뒤로가기" />
              }
              $css={{
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: "999px",
                backgroundColor: SURFACE_WHITE,
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <Box
                render={<img src={backArrowIcon} alt="" aria-hidden="true" />}
                $css={{
                  width: "20px",
                  height: "20px",
                  display: "block",
                }}
              />
            </Box>
            <Text
              render={<h1 />}
              $css={{
                justifySelf: "center",
                color: PRIMARY_TEXT,
                fontFamily:
                  '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 700,
                letterSpacing: "-0.2px",
              }}
            >
              예약하기
            </Text>
            <Box $css={{ width: "40px", height: "40px" }} />
          </Box>
        </Box>
      </Box>

      <VStack
        $css={{
          width: "100%",
          maxWidth: CONTENT_WIDTH,
          marginInline: "auto",
          marginTop: "131px",
          gap: "20px",
          paddingBottom: "32px",
        }}
      >
        <SectionCard height="187.971px">
          <VStack
            $css={{
              gap: "15.995px",
              paddingTop: "23.992px",
              paddingLeft: "23.992px",
              paddingRight: "23.992px",
            }}
          >
            <Text
              render={<h2 />}
              $css={{
                color: "#393939",
                fontFamily:
                  '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                fontSize: "18px",
                lineHeight: "26px",
                fontWeight: 700,
                letterSpacing: "-0.1px",
              }}
            >
              {EXPLORE_TITLE}
            </Text>

            <Box
              $css={{
                display: "flex",
                alignItems: "flex-start",
                gap: "15.995px",
              }}
            >
              <Box
                render={<img src={heroImage} alt="" />}
                $css={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "14px",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: 0,
                }}
              />

              <VStack
                $css={{
                  gap: "3px",
                  alignItems: "flex-start",
                  paddingTop: "1px",
                }}
              >
                <Text
                  render={<p />}
                  $css={{
                    color: PRIMARY_TEXT,
                    fontFamily:
                      '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    letterSpacing: "-0.1px",
                  }}
                >
                  {EXPLORE_SUBTITLE}
                </Text>
                <Text
                  render={<p />}
                  $css={{
                    color: SECONDARY_TEXT,
                    fontFamily:
                      '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 500,
                    letterSpacing: "-0.1px",
                  }}
                >
                  {EXPLORE_MENTOR}
                </Text>
                <Text
                  render={<p />}
                  $css={{
                    color: PRIMARY_TEXT,
                    fontFamily:
                      '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                    fontSize: "24px",
                    lineHeight: "36px",
                    fontWeight: 700,
                    letterSpacing: "-0.3px",
                  }}
                >
                  <span>{formatCurrency(UNIT_PRICE)}</span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 400,
                      color: "#393939",
                      letterSpacing: "-0.1504px",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: 500,
                      color: "#393939",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    / 인
                  </span>
                </Text>
              </VStack>
            </Box>
          </VStack>
        </SectionCard>

        <SectionCard height="141.435px">
          <VStack
            $css={{
              gap: "15.995px",
              paddingTop: "23.992px",
              paddingLeft: "23.992px",
              paddingRight: "23.992px",
            }}
          >
            <SectionHeader iconSrc={calendarIcon} title="날짜 선택" />
            <Box
              $css={{
                width: "100%",
                height: "49.455px",
                borderRadius: SMALL_RADIUS,
                border: "0.735px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
              }}
            />
          </VStack>
        </SectionCard>

        <SectionCard height="131.979px">
          <VStack
            $css={{
              gap: "15.995px",
              paddingTop: "23.992px",
              paddingLeft: "23.992px",
              paddingRight: "23.992px",
            }}
          >
            <SectionHeader iconSrc={peopleIcon} title="참가 인원" />

            <Box
              $css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "39.998px",
              }}
            >
              <Text
                render={<p />}
                $css={{
                  color: BODY_TEXT,
                  fontFamily:
                    '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  letterSpacing: "-0.3125px",
                }}
              >
                인원 수
              </Text>

              <Box
                $css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15.995px",
                }}
              >
                <CounterButton
                  label="-"
                  onClick={() =>
                    setParticipantCount((current) => Math.max(1, current - 1))
                  }
                />
                <Text
                  render={<p />}
                  $css={{
                    color: PRIMARY_TEXT,
                    fontFamily:
                      '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontWeight: 700,
                    letterSpacing: "-0.4492px",
                    minWidth: "32px",
                    textAlign: "center",
                  }}
                >
                  {participantCount}
                </Text>
                <CounterButton
                  label="+"
                  onClick={() => setParticipantCount((current) => current + 1)}
                />
              </Box>
            </Box>
          </VStack>
        </SectionCard>

        <SectionCard height="128.704px">
          <VStack
            $css={{
              gap: "11.996px",
              paddingTop: "23.992px",
              paddingLeft: "23.992px",
              paddingRight: "23.992px",
            }}
          >
            <Box
              $css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "23.992px",
              }}
            >
              <Text
                render={<p />}
                $css={{
                  color: "#FFFFFF",
                  fontFamily:
                    '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  letterSpacing: "-0.3125px",
                }}
              >
                체험 비용
              </Text>
              <Text
                render={<p />}
                $css={{
                  color: "#FFFFFF",
                  fontFamily:
                    '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  letterSpacing: "-0.3125px",
                }}
              >
                {formatCurrency(UNIT_PRICE)} x {participantCount}
              </Text>
            </Box>

            <Box
              $css={{
                width: "100%",
                borderTop: "0.735px solid rgba(255, 255, 255, 0.2)",
                paddingTop: "0.735px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "44.732px",
              }}
            >
              <Text
                render={<p />}
                $css={{
                  color: "#FFFFFF",
                  fontFamily:
                    '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: 700,
                  letterSpacing: "-0.4395px",
                }}
              >
                총 결제 금액
              </Text>
              <Text
                render={<p />}
                $css={{
                  color: "#FFFFFF",
                  fontFamily:
                    '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: 700,
                  letterSpacing: "0.0703px",
                }}
              >
                {formatCurrency(totalPrice)}
              </Text>
            </Box>
          </VStack>
        </SectionCard>

        <Box
          render={<button type="button" />}
          $css={{
            width: "100%",
            height: "55.981px",
            border: "none",
            borderRadius: SMALL_RADIUS,
            backgroundColor: ACCENT_BLUE,
            color: "#FFFFFF",
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Text
            $css={{
              color: "inherit",
              fontFamily:
                '"Inter", "Noto Sans KR", "Pretendard", "Apple SD Gothic Neo", sans-serif',
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 600,
              letterSpacing: "-0.3125px",
            }}
          >
            다음
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
