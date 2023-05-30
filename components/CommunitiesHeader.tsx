import styles from "./CommunitiesHeader.module.css";
import vivid_2c55ca467e3291481d840826d63e5d5401073a5c from "./2c55ca467e3291481d840826d63e5d5401073a5c.png";
import { XCommunityTitleLayout } from "./XCommunityTitleLayout";

export const CommunitiesHeader = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesHeader0}>
      <img
        src={vivid_2c55ca467e3291481d840826d63e5d5401073a5c.src}
        className={styles.communitiesHeader1}
      />
      <XCommunityTitleLayout />
    </div>
  );
};
