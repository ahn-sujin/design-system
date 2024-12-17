import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindConfig from "../tailwind.config.js";

// ES module 환경에서 __dirname 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "../src/stories/colors");
const outputFile = path.join(outputDir, "colorTokens.json");

// Tailwind 색상 추출 함수
const extractColors = () => {
  const colors = tailwindConfig.theme.colors;
  return colors;
};

// 디렉토리 생성 및 JSON 파일 저장
const exportColors = async () => {
  const colors = extractColors();

  // 디렉토리 존재 확인 및 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // JSON 파일 저장
  fs.writeFileSync(outputFile, JSON.stringify(colors, null, 2), "utf-8");
  console.log(`Colors exported to ${outputFile}`);
};

exportColors();
