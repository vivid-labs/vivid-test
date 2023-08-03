import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override}>
      <img src={logo_2.src} />
    </div>
  );
};
