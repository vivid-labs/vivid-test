import envelopeSimple from "./envelopeSimple.svg";

export const EnvelopeSimple = ({ override }: { override?: any }) => {
  return (
    <img
      src={envelopeSimple.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
