import { NavBar } from "./NavBar";
import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";


export const OrganizationSignUp = ({
  override
}: {
  override?: any;
}) => {
  

  return <div style={{
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "fit-content",
    position: "relative",
    width: "100%",
    flexShrink: 0,
    backgroundColor: "rgb(255, 255, 255)",
    ...override
  }} figma-id="255:213"><NavBar type="White" /><div style={{
      overflow: "hidden",
      position: "relative",
      width: "1440px",
      height: "799px",
      flexShrink: 0
    }} figma-id="255:215"><img src={content.src} style={{
        objectFit: "cover",
        opacity: 1,
        position: "absolute",
        inset: 0,
        height: "100%",
        width: "100%"
      }} figma-id="{\"objectFit\":\"cover\",\"opacity\":1}d2e2e0e68f0404c71db06348976ba084f36ad43a" /><div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        height: "fit-content",
        padding: "24px",
        borderRadius: "14px",
        position: "absolute",
        boxShadow: "0px 4px 10px 4px rgb(0, 0, 0, 0.15)",
        width: "581px",
        left: "calc(50% - 290px)",
        top: "calc(50% - 191px)",
        backgroundColor: "rgb(255, 255, 255)"
      }} figma-id="255:216"><div style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0
        }} figma-id="255:217"><p style={{
            height: "fit-content",
            textAlign: "center",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px",
            color: "rgb(244, 86, 154)",
            fontSize: "30px",
            fontFamily: "Avenir",
            fontWeight: 900
          }} figma-id="255:218">Get started with Vivid Teams!</p></div><FormField type="TextInput" field="Company Name" placeholder="Pied Piper" override={{
          height: "fit-content",
          width: "100%"
        }} /><FormField type="Select" field="CSS Solution" placeholder="Select one" override={{
          height: "fit-content",
          width: "100%"
        }} /><Button type="Primary" text="Start my free trial!" override={{
          height: "fit-content",
          width: "100%"
        }} /></div></div></div>;
};