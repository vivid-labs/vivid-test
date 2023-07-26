import styles from "./Groups.module.css";
import { Frame_1 } from "./Frame_1";
export const Groups = ({ override }: { override?: any }) => {
  const frame_1Props = [
    {
      override: {
        height: "70px",
        width: "92px",
        position: "absolute",
        top: "44px",
        left: "78px",
      },
      "figma-id": "6:1243:727",
    },
    {
      override: {
        height: "70px",
        width: "92px",
        position: "absolute",
        top: "124px",
        left: "114px",
      },
      "figma-id": "6:1243:728",
    },
    {
      override: {
        height: "70px",
        width: "92px",
        position: "absolute",
        top: "204px",
        left: "78px",
      },
      "figma-id": "6:1243:729",
    },
  ];
  return (
    <div style={override} className={styles.groups} figma-id="6:1222:1253">
      <div figma-id="6:1222:1257">
        <div className={styles.frame_1} figma-id="6:1243:730" />
        <div className={styles.frame_2} figma-id="6:1243:731" />
        <div className={styles.frame_3} figma-id="6:1243:732" />
      </div>
      <div figma-id="6:1243:726">
        {frame_1Props.map((props, i) => (
          <Frame_1 {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
