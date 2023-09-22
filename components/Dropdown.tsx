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
          <Arrow
            override={{
              position: "absolute",
              top: "calc(50% - 1px)",
              right: "12px",
            }}
          />
        </div>
      );
    case "Active":
      return (
        <div className={styles.dropdownComponent_1} style={override}>
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
        <div className={styles.content}>
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
          <Divider
            override={{
              height: "1px",
              width: "100%",
            }}
          />
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
          <Divider
            override={{
              height: "1px",
              width: "100%",
            }}
          />
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
        </div>
       </div> 
      );
    default:
      return null;
  }
};
