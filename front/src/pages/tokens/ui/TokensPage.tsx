import { Badge, Box, Button, Callout, Flex, Text } from "@vapor-ui/core";

const PALETTES = [
  { name: "red",    scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "pink",   scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "grape",  scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "violet", scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "blue",   scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "cyan",   scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "green",  scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "lime",   scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "yellow", scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "orange", scales: ["050","100","200","300","400","500","600","700","800","900"] },
  { name: "gray",   scales: ["050","100","200","300","400","500","600","700","800","900"] },
] as const;

const SEMANTIC_COLORS = ["primary", "secondary", "success", "warning", "danger"] as const;

function PaletteRow({ name, scales }: { name: string; scales: readonly string[] }) {
  return (
    <Box $css={{ marginBottom: "$200" }}>
      <Text
        $css={{
          fontSize: "12px",
          fontWeight: 600,
          marginBottom: "$075",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "$fg-hint-100",
        }}
      >
        {name}
      </Text>
      <Flex $css={{ gap: "$050" }}>
        {scales.map((scale) => {
          const cssVar = `--vapor-color-${name}-${scale}`;
          const isDark = parseInt(scale) >= 500;
          return (
            <Box
              key={scale}
              $css={{
                flex: "1",
                height: "$600",
                borderRadius: "$200",
                backgroundColor: `var(${cssVar})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "$025",
              }}
              title={`${name}-${scale}: var(${cssVar})`}
            >
              <Text
                $css={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.5)",
                }}
              >
                {scale}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export function TokensPage() {
  return (
    <Box
      $css={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "$400 $300",
        minHeight: "100vh",
        backgroundColor: "$bg-canvas-100",
      }}
    >
      {/* Header */}
      <Flex $css={{ alignItems: "center", justifyContent: "space-between", marginBottom: "$400" }}>
        <Box>
          <Text $css={{ fontSize: "24px", fontWeight: 700, color: "$fg-secondary-200", marginBottom: "$050" }}>
            🎨 Design Token Preview
          </Text>
          <Text $css={{ color: "$fg-hint-100", fontSize: "14px" }}>
            Figma → vapor-ui CSS 변수 오버라이드 확인 페이지
          </Text>
        </Box>
        <Badge colorPalette="success">Figma tokens applied</Badge>
      </Flex>

      {/* Callout */}
      <Callout.Root colorPalette="primary" $css={{ marginBottom: "$400" }}>
        <Text $css={{ fontSize: "13px" }}>
          아래 색상 팔레트가 Figma 디자인 시스템과 동일하면 토큰 연동 성공입니다.
          브라우저 DevTools의 <strong>:root</strong> 에서{" "}
          <code style={{ fontFamily: "monospace", background: "rgba(0,0,0,0.08)", padding: "1px 4px", borderRadius: "3px" }}>
            --vapor-color-red-500
          </code>{" "}
          이 <strong>#d4333f</strong> 인지 확인하세요.
        </Text>
      </Callout.Root>

      {/* Color Palettes */}
      <Box $css={{ marginBottom: "$500" }}>
        <Text $css={{ fontSize: "16px", fontWeight: 600, color: "$fg-secondary-200", marginBottom: "$300" }}>
          Primitive Palette
        </Text>
        {PALETTES.map((p) => (
          <PaletteRow key={p.name} name={p.name} scales={p.scales} />
        ))}
      </Box>

      {/* Semantic Components */}
      <Box $css={{ marginBottom: "$500" }}>
        <Text $css={{ fontSize: "16px", fontWeight: 600, color: "$fg-secondary-200", marginBottom: "$300" }}>
          Semantic Token → Component
        </Text>
        <Text $css={{ fontSize: "13px", color: "$fg-hint-100", marginBottom: "$200" }}>
          아래 버튼과 뱃지 색상이 Figma 팔레트와 일치해야 합니다.
        </Text>

        <Flex $css={{ gap: "$150", flexWrap: "wrap", marginBottom: "$300" }}>
          {SEMANTIC_COLORS.map((color) => (
            <Button key={color} color={color} variant="fill">
              {color}
            </Button>
          ))}
        </Flex>

        <Flex $css={{ gap: "$150", flexWrap: "wrap", marginBottom: "$300" }}>
          {SEMANTIC_COLORS.map((color) => (
            <Button key={color} color={color} variant="outline">
              {color} (outline)
            </Button>
          ))}
        </Flex>

        <Flex $css={{ gap: "$150", flexWrap: "wrap" }}>
          {SEMANTIC_COLORS.map((color) => (
            <Badge key={color} colorPalette={color}>
              {color}
            </Badge>
          ))}
        </Flex>
      </Box>

      {/* Border Colors */}
      <Box $css={{ marginBottom: "$500" }}>
        <Text $css={{ fontSize: "16px", fontWeight: 600, color: "$fg-secondary-200", marginBottom: "$300" }}>
          Border Tokens
        </Text>
        <Flex $css={{ gap: "$150", flexWrap: "wrap" }}>
          {(["normal", "primary", "secondary", "success", "warning", "danger"] as const).map((variant) => (
            <Box
              key={variant}
              $css={{
                padding: "$150 $200",
                borderRadius: "$200",
                border: "2px solid",
                borderColor: `$border-${variant}`,
              }}
            >
              <Text $css={{ fontSize: "13px", color: "$fg-secondary-100" }}>
                border-{variant}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Box $css={{ padding: "$200", borderRadius: "$300", backgroundColor: "$bg-secondary-100", textAlign: "center" }}>
        <Text $css={{ fontSize: "12px", color: "$fg-hint-100" }}>
          ⚠️ 임시 페이지입니다 — 확인 후 라우터에서 제거하세요 (path: /tokens)
        </Text>
      </Box>
    </Box>
  );
}
