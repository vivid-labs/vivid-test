import logo from "./logo.png";
import { ProfilePicture } from "./ProfilePicture";
import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const Desktop_1 = ({ override }: { override?: any }) => {
  const activeChatProps = [
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
  ];
  const messageWrapperProps = [
    {
      from: "Me",
      message: "This is an automated message from Verizon",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Me",
      message: "You need to update your phone plan",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Me",
      message:
        "otherwise we're going to find you. find your family. and you do not want to be around when that happens. ",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "Hi, my name is Alberto",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "and I hate chatbots with every fiber of my being",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "like honestly bro",
      override: {
        height: "60px",
        width: "100%",
      },
    },
  ];
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        width: "100%",
        height: "1024px",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="1:2"
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 12px",
          position: "relative",
          width: "100%",
          height: "69px",
          flexShrink: 0,
        }}
        figma-id="1:5"
      >
        <img
          style={{
            width: "42.09px",
            height: "44px",
            flexShrink: 0,
            objectFit: "cover",
            opacity: 1,
          }}
          src={logo.src}
          figma-id="1:55"
        />
        <ProfilePicture />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: "100%",
          flexShrink: 0,
          flex: "1 1 0%",
          minHeight: "0px",
        }}
        figma-id="1:6"
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            width: "256px",
            height: "100%",
            flexShrink: 0,
            borderStyle: "solid",
            borderColor: "rgb(242, 242, 242)",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
          figma-id="1:4"
        >
          <NewConversation />
          {activeChatProps.map((props, i) => (
            <ActiveChat {...props} key={i} />
          ))}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            height: "100%",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px",
          }}
          figma-id="1:3"
        >
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "18px",
              height: "fit-content",
              padding: "13px 12px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
              backgroundColor: "rgb(242, 242, 242)",
            }}
            figma-id="1:143"
          >
            <ProfilePicture />
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgb(72, 72, 72)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 400,
              }}
              figma-id="1:146"
            >
              Name
            </p>
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "12px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="1:149"
          >
            {messageWrapperProps.map((props, i) => (
              <MessageWrapper {...props} key={i} />
            ))}
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              position: "relative",
              width: "100%",
              height: "62px",
              flexShrink: 0,
            }}
            figma-id="1:153"
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "fit-content",
                padding: "8px 12px 8px 20px",
                borderRadius: "100px",
                position: "relative",
                flexShrink: 0,
                flex: "1 1 0%",
                minWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(193, 193, 193)",
                borderWidth: "1px",
              }}
              figma-id="1:157"
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "122px",
                  height: "25px",
                  flexShrink: 0,
                  color: "rgb(72, 72, 72)",
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  fontWeight: 400,
                }}
                figma-id="1:158"
              >
                Text message
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "2px",
                  borderRadius: "100px",
                  position: "relative",
                  rotate: "-90.0deg",
                  width: "28px",
                  height: "28px",
                  flexShrink: 0,
                  backgroundColor: "rgb(69, 141, 247)",
                }}
                figma-id="1:190"
              >
                <img
                  style={{
                    rotate: "-0.0deg",
                    height: "100%",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                    objectFit: "cover",
                    opacity: 1,
                  }}
                  src={whiteArrow_1.src}
                  figma-id="1:194"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
