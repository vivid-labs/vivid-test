import styles from "./Dropdown.module.css";
import { Arrow } from "./Arrow";
import { Option } from "./Option";
import { Divider } from "./Divider";

export const Dropdown = ({
  override,
  status,
  text,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
}) => {
  switch (status) {
    case "Idle":
      return (
        <div className={styles.dropdownComponent} style={override}>
          <p className={styles.select}>{text}</p>
          <Disclaimer />
        </div>
      );
    case "Active":
      return (
        <div className={styles.dropdownComponent1} style={override}>
          <AiChatDisclaimer text={text} />
          <div className={styles.content}>
            <NotStarted />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <Ongoing />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <StartAskingQuestions />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Disclaimer = () => (
  <Arrow
    override={{
      position: "absolute",
      top: "calc(50% - 1px)",
      right: "12px",
    }}
  />
);

const AiChatDisclaimer = ({ text }: any) => (
  <div className={styles.bar}>
    <p className={styles.selectText}>{text}</p>
    <Arrow
      override={{
        position: "absolute",
        height: "3px",
        width: "7px",
        top: "calc(50% - 1px)",
        right: "12px",
      }}
    />
  </div>
);

const NotStarted = () => (
  <Option
    color="Gray"
    text="Not Started"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);

const Ongoing = () => (
  <Option
    color="Orange"
    text="Ongoing"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);

const StartAskingQuestions = () => (
  <Option
    color="Green"
    text="Completed"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);
