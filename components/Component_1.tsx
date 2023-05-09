import "./Component_1.module.css";

export const Component_1 = ({ property_1 }: { property_1: string }) => {
  const property_1_0 = property_1 === "Frame 1" ? "20px" : "239px";
  const property_1_1 =
    property_1 === "Frame 1" ? "rgb(0, 0, 0)" : "rgb(0, 163, 255)";

  return (
    <div
      style={{
        left: property_1_0,
        backgroundColor: property_1_1,
      }}
      className="component-1-0"
    >
      <div className="component-1-1" />
      <p className="component-1-2">OFF</p>
      <p className="component-1-3">ON</p>
    </div>
  );
};
