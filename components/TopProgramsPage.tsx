import { TopPrograms } from "./TopPrograms";

export const TopProgramsPage = ({ override }: { override?: any }) => {
  return (
    <TopPrograms
      override={{
        height: "fit-content",
        width: "1440px",
      }}
    />
  );
};
