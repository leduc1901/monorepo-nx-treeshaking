import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

export const Theme = {
  DARK: "dark",
  LIGHT: "light",
};
export const DEFAULT_WRAPPER_WIDTH = 600;
export const MIN_WRAPPER_WIDTH = 400;
export const MAX_WRAPPER_WIDTH = 1280;
export const RESIZE_OFFSET = 100;
export const darkThemeStyle = {
  codeTheme: darkTheme,
  root: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    ...darkTheme.plain,
    backgroundColor: "inherit",
  },
  backgroundColor:
    "linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
};

export const lightThemeStyle = {
  codeTheme: lightTheme,
  root: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    ...lightTheme.plain,
    backgroundColor: "inherit",
  },
  backgroundColor:
    "linear-gradient(to right bottom, rgb(243, 244, 246), rgb(209, 213, 219))",
};

export const LANGUAGES = [
  {
    label: "TypeScript",
    value: "tsx",
  },
  {
    label: "YAML",
    value: "yaml",
  },
  {
    label: "C",
    value: "c",
  },
  {
    label: "HTML",
    value: "markup",
  },
  {
    label: "Go",
    value: "go",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "Python",
    value: "python",
  },
];
