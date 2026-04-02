import { Box, Text } from "@vapor-ui/core";
import {
  HomeIcon,
  HomeOutlineIcon,
  UserIcon,
  UserOutlineIcon,
} from "@vapor-ui/icons";
import matchingIcon from "@/shared/assets/matchingIcon.svg";

export type BottomNavTab = "home" | "my";

const NAV_WIDTH_PX = 358;
const NAV_HEIGHT_PX = 80;
const NAV_RADIUS_PX = 18;
const NAV_TOP_OFFSET_PX = 20;
const TAB_ROW_WIDTH_PX = 240;
const TAB_ROW_TOP_OFFSET_PX = 19;
const TAB_ICON_SIZE_PX = 22;
const TAB_LABEL_GAP_PX = 3;
const TAB_LABEL_FONT_SIZE_PX = 12;
const TAB_LABEL_LINE_HEIGHT_PX = 16;
const CENTER_BUTTON_SIZE_PX = 60;
const NOTCH_DIAMETER_PX = 80;
const NOTCH_TOP_OFFSET_PX = -30;
const SURFACE_COLOR = "var(--vapor-color-background-surface-200, #e2e2e2)";
const NAV_BG_COLOR = "var(--vapor-color-background-canvas, #232323)";
const TAB_ACTIVE_COLOR = "var(--vapor-color-cyan-200, #84d2e2)";
const TAB_INACTIVE_COLOR = "var(--vapor-color-gray-200, #c6c6c6)";

type BottomNavigationProps = {
  activeTab: BottomNavTab;
  onTabChange: (tab: BottomNavTab) => void;
  onCenterClick?: () => void;
};

export function BottomNavigation({
  activeTab,
  onTabChange,
  onCenterClick,
}: BottomNavigationProps) {
  const isHomeActive = activeTab === "home";
  const isMyActive = activeTab === "my";

  const handleCenterClick = () => {
    if (onCenterClick) {
      onCenterClick();
      return;
    }

    onTabChange("home");
  };

  return (
    <Box
      $css={{
        position: "relative",
        width: "100%",
        // paddingBottom: "16px",
      }}
    >
      <Box
        $css={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: `${NAV_HEIGHT_PX}px`,
          marginTop: `${NAV_TOP_OFFSET_PX}px`,
          borderRadius: `${NAV_RADIUS_PX}px`,
          backgroundColor: NAV_BG_COLOR,
          overflow: "hidden",
        }}
      >
        <Box
          aria-hidden="true"
          $css={{
            position: "absolute",
            left: "50%",
            top: `${NOTCH_TOP_OFFSET_PX}px`,
            transform: "translateX(-50%)",
            width: `${NOTCH_DIAMETER_PX}px`,
            height: `${NOTCH_DIAMETER_PX}px`,
            borderRadius: "999px",
            backgroundColor: SURFACE_COLOR,
            zIndex: 0,
          }}
        />

        <Box
          $css={{
            position: "relative",
            zIndex: 2,
            width: `${TAB_ROW_WIDTH_PX}px`,
            marginInline: "auto",
            marginTop: `${TAB_ROW_TOP_OFFSET_PX}px`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            render={
              <button
                type="button"
                onClick={() => onTabChange("home")}
                aria-label="home"
                aria-current={isHomeActive ? "page" : undefined}
              />
            }
            $css={{
              width: "22px",
              margin: "0",
              padding: "0",
              border: "none",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: `${TAB_LABEL_GAP_PX}px`,
              cursor: "pointer",
              color: isHomeActive ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR,
            }}
          >
            {isHomeActive ? (
              <HomeIcon size={TAB_ICON_SIZE_PX} />
            ) : (
              <HomeOutlineIcon size={TAB_ICON_SIZE_PX} />
            )}
            <Text
              $css={{
                color: "inherit",
                fontSize: `${TAB_LABEL_FONT_SIZE_PX}px`,
                lineHeight: `${TAB_LABEL_LINE_HEIGHT_PX}px`,
                fontWeight: 500,
              }}
            >
              {"\uD648"}
            </Text>
          </Box>

          <Box
            render={
              <button
                type="button"
                onClick={() => onTabChange("my")}
                aria-label="my"
                aria-current={isMyActive ? "page" : undefined}
              />
            }
            $css={{
              width: "22px",
              margin: "0",
              padding: "0",
              border: "none",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: `${TAB_LABEL_GAP_PX}px`,
              cursor: "pointer",
              color: isMyActive ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR,
            }}
          >
            {isMyActive ? (
              <UserIcon size={TAB_ICON_SIZE_PX} />
            ) : (
              <UserOutlineIcon size={TAB_ICON_SIZE_PX} />
            )}
            <Text
              $css={{
                color: "inherit",
                fontSize: `${TAB_LABEL_FONT_SIZE_PX}px`,
                lineHeight: `${TAB_LABEL_LINE_HEIGHT_PX}px`,
                fontWeight: 500,
              }}
            >
              MY
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        render={
          <button
            type="button"
            onClick={handleCenterClick}
            aria-label="start matching"
          />
        }
        $css={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: `${CENTER_BUTTON_SIZE_PX}px`,
          height: `${CENTER_BUTTON_SIZE_PX}px`,
          borderRadius: "999px",
          margin: "0",
          padding: "0",
          border: "none",
          background: "none",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <Box
          render={<img src={matchingIcon} alt="" aria-hidden="true" />}
          $css={{
            width: `${CENTER_BUTTON_SIZE_PX}px`,
            height: `${CENTER_BUTTON_SIZE_PX}px`,
            borderRadius: "999px",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
