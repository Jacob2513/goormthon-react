import { Box } from "@vapor-ui/core";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Box
      $css={{
        isolation: "isolate",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </Box>
  );
}
