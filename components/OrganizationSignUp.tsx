import { NavBar } from "./NavBar";
import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";

export const OrganizationSignUp = ({ override }: { override?: any }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start relative w-full flex-shrink-0 bg-white font-[Avenir]"
      style={override}
    >
      <NavBar type="White" />
      <ComponentName />
    </div>
  );
};

const ComponentName = () => (
  <div className="overflow-hidden relative w-[1440px] h-[799px] flex-shrink-0">
    <img className="object-cover absolute h-full w-full" src={content.src} />
    <div className="overflow-hidden flex flex-col justify-center items-start gap-5 p-6 rounded-[0.875rem] absolute [box-shadow:0px_4px_10px_4px_rgba(0,_0,_0,_0.15)] w-[581px] bg-white">
      <div className="overflow-hidden flex items-center relative w-full flex-shrink-0">
        <p className="text-center text-[rgb(244,_86,_154)] text-3xl font-black">
          Get started with Vivid Teams!
        </p>
      </div>
      <FormField
        type="TextInput"
        field="Company Name"
        placeholder="Pied Piper"
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <FormField
        type="Select"
        field="CSS Solution"
        placeholder="Select one"
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <Button
        type="Primary"
        text="Start my free trial!"
        override={{
          height: "fit-content",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  </div>
);
