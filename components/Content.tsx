import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative h-[799px] w-full flex-shrink-0 overflow-hidden font-[Avenir]"
      style={override}
    >
      <img className="absolute h-full w-full object-cover" src={content.src} />
      <div className="absolute flex w-[581px] flex-col items-start justify-center gap-5 overflow-hidden rounded-[0.875rem] bg-white p-6 [box-shadow:0px_4px_10px_4px_rgba(0,_0,_0,_0.15)]">
        <div className="relative flex w-full flex-shrink-0 items-center overflow-hidden">
          <p className="text-center text-3xl font-black text-[rgb(244,_86,_154)]">
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
};
