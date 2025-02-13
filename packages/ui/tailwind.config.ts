import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [sharedConfig],
  prefix: "",
};

export default config;
