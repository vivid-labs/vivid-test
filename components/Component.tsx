export const Component = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "39px",
        height: "37px",
        backgroundColor: "rgb(65, 124, 212)",
        ...override,
      }}
    />
  );
};
