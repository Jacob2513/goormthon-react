import { useState } from "react";
import { Box } from "@vapor-ui/core";
import {
  BottomNavigation,
  type BottomNavTab,
} from "@/shared/ui/navigation/BottomNavigation";

export function HomePage() {
  const [activeTab, setActiveTab] = useState<BottomNavTab>("home");

  return (
    <Box
      render={<section />}
      $css={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </Box>
  );
}
