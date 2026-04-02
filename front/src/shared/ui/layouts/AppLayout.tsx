import { Box } from "@vapor-ui/core";
import { Outlet } from "react-router-dom";

const DESIGN_WIDTH_PX = 390;
const DESIGN_HEIGHT_PX = 844;

export function AppLayout() {
  return (
    <Box
      $css={{
        minHeight: "100dvh",
        backgroundColor: "var(--vapor-color-gray-700)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        render={<main />}
        $css={{
          width: `min(${DESIGN_WIDTH_PX}px, 100vw)`,
          height: `min(${DESIGN_HEIGHT_PX}px, 100dvh)`,
          backgroundColor: "var(--vapor-color-background-surface-200)",
          boxSizing: "border-box",
          paddingTop: "48px",
          paddingBottom: "34px",
          paddingInline: "16px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
