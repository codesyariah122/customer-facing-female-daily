module.exports = {
  extends: ["next", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    }
  },
  rules: {
    "@next/next/no-img-element": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/alt-text": "off",
  }
};
