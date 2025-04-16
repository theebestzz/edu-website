import localFont from "next/font/local";

export const mainFont = localFont({
  src: [
    {
      path: "../styles/ClashGrotesk-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
