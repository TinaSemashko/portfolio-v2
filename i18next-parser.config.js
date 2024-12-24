export const createOldCatalogs = false;
export const lexers = {
  js: ["JsxLexer"],
  default: ["JavascriptLexer"],
};
export const locales = ["en-US"];
export const defaultNamespace = "common";
export const namespaceSeparator = "|";
export const failOnWarnings = false;
export const output = "src/translations/$LOCALE/$NAMESPACE.json";
export const input = ["src/**/**.{ts,tsx}"];
export const sort = true;
export const keepRemoved = true;
export const react = { useSuspense: false };
