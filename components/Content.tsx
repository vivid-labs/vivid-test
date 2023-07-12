import content from "./content.jpg";
import { InviteEmail } from "./InviteEmail";
import { Button } from "./Button";


export const Content = ({
  override
}: {
  override?: any;
}) => {
  

  return <div style={{
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    height: "fit-content",
    padding: "208px 429px",
    position: "relative",
    width: "100%",
    flexShrink: 0,
    ...override
  }} figma-id="29:763"><img src={content.src} style={{
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
      padding: "24px 20px",
      borderRadius: "14px",
      position: "relative",
      boxShadow: "0px 4px 10px 4px rgb(0, 0, 0, 0.15)",
      width: "100%",
      flexShrink: 0,
      backgroundColor: "rgb(255, 255, 255)"
    }} figma-id="29:764"><div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        height: "fit-content",
        position: "relative",
        width: "100%",
        flexShrink: 0
      }} figma-id="29:765"><p style={{
          height: "fit-content",
          textAlign: "center",
          flexShrink: 0,
          flex: "1 1 0%",
          minWidth: "0px",
          color: "rgb(244, 86, 154)",
          fontSize: "30px",
          fontFamily: "Avenir",
          fontWeight: 900
        }} figma-id="29:766">Invite Teammates</p></div><div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        height: "fit-content",
        position: "relative",
        width: "100%",
        flexShrink: 0
      }} figma-id="29:811"><div style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "12px",
          padding: "8px 12px",
          borderRadius: "5px",
          position: "relative",
          width: "100%",
          height: "120px",
          flexShrink: 0,
          borderStyle: "solid",
          borderColor: "rgb(217, 217, 217)",
          borderWidth: "1px",
          backgroundColor: "rgb(245, 241, 241)"
        }} figma-id="29:788"><div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            height: "fit-content",
            position: "relative",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px"
          }} figma-id="29:809"><InviteEmail /><p style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexShrink: 0,
              color: "rgb(148, 148, 148)",
              fontSize: "15px",
              fontFamily: "Avenir",
              fontWeight: 500
            }} figma-id="29:808">Enter teammate emails</p></div></div><p style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexShrink: 0,
          color: "rgb(148, 148, 148)",
          fontSize: "15px",
          fontFamily: "Avenir",
          fontWeight: 500
        }} figma-id="29:810">1 additional seat invited</p></div><Button type="Primary" text="Invite!" override={{
        height: "fit-content",
        width: "100%"
      }} /></div></div>;
};