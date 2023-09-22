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
          <ArrowOverride />
        </div>
      );
    case "Active":
      return (
        <div className={styles.dropdownComponent_1} style={override}>
          <BasicallyAttacks text={text} />
          <div className={styles.content}>
            <NotStarted />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <SalesRepQuestions />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <OptionCompleted />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ArrowOverride = () => (
  <Arrow
    override={{
      position: "absolute",
      top: "calc(50% - 1px)",
      right: "12px",
    }}
  />
);

const BasicallyAttacks = ({ text }: any) => (
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

const SalesRepQuestions = () => (
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

const OptionCompleted = () => (
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
