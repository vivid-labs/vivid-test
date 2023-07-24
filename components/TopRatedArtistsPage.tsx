import { TopRatedArtists } from "./TopRatedArtists";
export const TopRatedArtistsPage = ({ override }: { override?: any }) => {
  return (
    <TopRatedArtists
      screen="Desktop"
      override={{
        width: "100%",
      }}
      figma-id="7:1326:14402"
    />
  );
};
