import logo from "./logo.svg";

const LogoImage = () => (
  <img src={logo.src} className="w-4 h-4" />
);

export const Logo = ({ override }) => (
  <LogoImage />
);