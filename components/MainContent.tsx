import styles from "./MainContent.module.css";
import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { ProfilePicture } from "./ProfilePicture";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const MainContent = ({ override }: { override?: any }) => {
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
      override: {
        height: "fit-content",
        width: "100%",
      },
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
    <div style={override} className={styles.mainContent} figma-id="1:6">
      <div className={styles.sidebar} figma-id="1:4">
        <NewConversation />
        {activeChatProps.map((props, i) => (
          <ActiveChat {...props} key={i} />
        ))}
      </div>
      <div className={styles.chat} figma-id="1:3">
        <div className={styles.currentRecipient} figma-id="1:143">
          <ProfilePicture />
          <p className={styles.name} figma-id="1:146">
            Name
          </p>
        </div>
        <div className={styles.chats} figma-id="1:149">
          {messageWrapperProps.map((props, i) => (
            <MessageWrapper {...props} key={i} />
          ))}
        </div>
        <div className={styles.composeMessage} figma-id="1:153">
          <div className={styles.newMessage} figma-id="1:157">
            <p className={styles.textMessage} figma-id="1:158">
              Text message
            </p>
            <div className={styles.send} figma-id="1:190">
              <img
                src={whiteArrow_1.src}
                className={styles.whiteArrow_1}
                figma-id="1:194"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
