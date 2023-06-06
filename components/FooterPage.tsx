import { Footer } from "./Footer";

export const FooterPage = ({ style }: { style?: any }) => {
  return (
    <Footer
      screen="Desktop"
      style={{
        height: "fit-content",
        width: "1280px",
        gap: "30px",
      }}
    />
  );
};
