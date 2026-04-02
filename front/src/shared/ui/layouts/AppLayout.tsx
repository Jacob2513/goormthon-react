import { Box } from "@vapor-ui/core";
import { Outlet } from "react-router-dom";

const DESIGN_WIDTH_PX = 390;

export function AppLayout() {
  return (
    <Box
      $css={{
        width: "100%",
        minHeight: "100dvh",
        backgroundColor: "var(--vapor-color-background-canvas, #ffffff)",
      }}
    >
      <Box
        render={<main />}
        $css={{
          position: "relative",
          width: "100%",
          maxWidth: `${DESIGN_WIDTH_PX}px`,
          minHeight: "100dvh",
          margin: "0 auto",
          overflowX: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
