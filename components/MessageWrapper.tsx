import styles from "./MessageWrapper.module.css";
export const MessageWrapper = ({
  override,
  from,
  message,
}: {
  override?: any;
  from: string;
  message: string;
}) => {
  const messageFrom =
    from === "Me"
      ? {
          backgroundColor: "rgb(69, 141, 247)",
        }
      : {
          backgroundColor: "rgb(72, 72, 72)",
        };
  const messageWrapperFrom =
    from === "Me"
      ? {
          alignItems: "flex-end",
        }
      : {
          alignItems: "flex-start",
        };
  return (
    <div
      style={{
        ...messageWrapperFrom,
        ...override,
      }}
      className={styles.messageWrapper}
      figma-id="1:199"
    >
      <div style={messageFrom} className={styles.message} figma-id="1:195">
        <p className={styles.messageFromPerson} figma-id="1:203">
          {message}
        </p>
      </div>
    </div>
  );
};
