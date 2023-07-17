import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const Features = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      title: "Audio Guide",
      description: "Travel on your own. Use the services of an audio guide.",
      icon: <VolumeDown />,
    },
    {
      title: "Programs",
      description: "Choose a travel program that is right for you.",
      icon: <Program />,
    },
    {
      title: "Hotels & Restaurant",
      description: "Book hotels and restaurants at the best prices",
      icon: <Home />,
    },
  ];
  return (
    <div
      style={override}
      className="flex flex-row justify-center items-start gap-[31px] w-full relative flex-shrink-0"
      figma-id="I1201:1530;1201:1660"
    >
      {featureProps.map((props, i) => (
        <Feature {...props} key={i} />
      ))}
    </div>
  );
};
