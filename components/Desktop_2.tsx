import logo from "./logo.png";
import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { ProfilePicture } from "./ProfilePicture";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const Desktop_2 = ({ override }: { override?: any }) => {
  const activeChatProps = [
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        borderColor: "rgb(242, 242, 242)",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:67",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
        position: "relative",
      },
      "figma-id": "5:184:68",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
        position: "relative",
      },
      "figma-id": "5:184:69",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
        position: "relative",
      },
      "figma-id": "5:184:70",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
        position: "relative",
      },
      "figma-id": "5:184:71",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        borderColor: "rgb(242, 242, 242)",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:72",
    },
  ];
  const messageWrapperProps = [
    {
      from: "Me",
      message: "This is an automated message from Verizon",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:78",
    },
    {
      from: "Me",
      message: "You need to update your phone plan",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:79",
    },
    {
      from: "Me",
      message:
        "otherwise we're going to find you. find your family. and you do not want to be around when that happens. ",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:80",
    },
    {
      from: "Other",
      message: "Hi, my name is Alberto",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:81",
    },
    {
      from: "Other",
      message: "and I hate chatbots with every fiber of my being",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:82",
    },
    {
      from: "Other",
      message: "like honestly bro",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:83",
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
      figma-id="5:184:60"
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 12px",
          position: "relative",
          width: "100%",
          height: "69px",
          flexShrink: 0,
        }}
        figma-id="5:184:61"
      >
        <img
          style={{
            width: "42.09px",
            height: "44px",
            flexShrink: 0,
            objectFit: "cover",
          }}
          src={logo.src}
          figma-id="5:184:62"
        />
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px 16px",
            borderRadius: "4px",
            position: "relative",
            width: "121px",
            height: "34px",
            flexShrink: 0,
            backgroundColor: "rgb(69, 141, 247)",
          }}
          figma-id="5:184:139"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              fontFamily: "Avenir",
              fontWeight: 400,
            }}
            figma-id="5:184:140"
          >
            Sign in
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          position: "relative",
          width: "100%",
          flexShrink: 0,
          flex: "1 1 0%",
          minHeight: "0px",
        }}
        figma-id="5:184:64"
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
          figma-id="5:184:65"
        >
          <NewConversation
            override={{
              borderColor: "rgb(242, 242, 242)",
              position: "relative",
            }}
            figma-id="5:184:66"
          />
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
            width: "930px",
            height: "100%",
            flexShrink: 0,
          }}
          figma-id="5:184:73"
        >
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              height: "fit-content",
              padding: "13px 12px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
              backgroundColor: "rgb(242, 242, 242)",
            }}
            figma-id="5:184:74"
          >
            <ProfilePicture
              override={{
                position: "relative",
              }}
              figma-id="5:184:75"
            />
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgb(72, 72, 72)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 400,
              }}
              figma-id="5:184:76"
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
            figma-id="5:184:77"
          >
            {messageWrapperProps.map((props, i) => (
              <MessageWrapper {...props} key={i} />
            ))}
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              position: "relative",
              width: "100%",
              height: "62px",
              flexShrink: 0,
            }}
            figma-id="5:184:84"
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
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
              figma-id="5:184:85"
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "rgb(72, 72, 72)",
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  fontWeight: 400,
                }}
                figma-id="5:184:86"
              >
                Text message
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
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
                figma-id="5:184:87"
              >
                <img
                  style={{
                    rotate: "-0.0deg",
                    height: "100%",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                    objectFit: "cover",
                  }}
                  src={whiteArrow_1.src}
                  figma-id="5:184:88"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
