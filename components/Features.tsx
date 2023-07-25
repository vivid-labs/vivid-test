import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const Features = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      moreTitle: "Select guide",
      description: "Travel on your own. Use the services of an audio guide.",
      title: "Audio Guide",
      icon: <VolumeDown figma-id="10:" />,
      "figma-id": "10:I6:880;6:428",
    },
    {
      moreTitle: "Select program",
      description: "Choose a travel program that is right for you.",
      title: "Programs",
      icon: <Program figma-id="10:" />,
      "figma-id": "10:I6:880;6:429",
    },
    {
      moreTitle: "Learn more",
      description: "Book hotels and restaurants at the best prices",
      title: "Hotels & Restaurant",
      icon: <Home figma-id="10:" />,
      "figma-id": "10:I6:880;6:430",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "31px",
        width: "100%",
        height: "fit-content",
        position: "relative",
        flexShrink: 0,
        ...override,
      }}
      figma-id="10:I6:880;6:427"
    >
      {featureProps.map((props, i) => (
        <Feature {...props} key={i} />
      ))}
    </div>
  );
};
