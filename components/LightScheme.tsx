import styles from "./LightScheme.module.css";
import { Button } from "./Button";
import { IconsAdd_24px } from "./IconsAdd_24px";
export const LightScheme = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className={styles.lightScheme}
      figma-id="10:53923:27459"
    >
      <Button
        style="Filled"
        state="enabled"
        showIcon="False"
        labelText="Label"
        icon={<IconsAdd_24px figma-id="10:" />}
        figma-id="10:53923:27633"
      />
      <div figma-id="10:53923:27636">
        <p className={styles.label} figma-id="10:53923:27637">
          Outlined buttons
        </p>
        <p className={styles.labelText} figma-id="10:53923:27638">
          Filled buttons
        </p>
        <p className={styles.labelText1} figma-id="10:53923:27639">
          Text buttons
        </p>
        <p className={styles.labelText2} figma-id="10:53923:27640">
          Elevated buttons
        </p>
        <p className={styles.labelText3} figma-id="10:53923:27641">
          Tonal buttons
        </p>
      </div>
    </div>
  );
};
