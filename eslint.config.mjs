import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Base Next.js ESLint rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // Custom rules
  {
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;
