import styles from "./TypeForm.module.css";
import { User } from "./User";
import { EyeSlash } from "./EyeSlash";

export const TypeForm = ({
  style,
  showLeftIcon,
  leftIcon,
  content,
  showRightIcon,
  rightIcon,
}: {
  style?: any;
  showLeftIcon: boolean;
  leftIcon: any;
  content: string;
  showRightIcon: boolean;
  rightIcon: any;
}) => {
  return (
    <div style={style} className={styles.typeForm}>
      {showLeftIcon ? leftIcon : null}
      <p className={styles.username}>{content}</p>
      {showRightIcon ? rightIcon : null}
    </div>
  );
};
