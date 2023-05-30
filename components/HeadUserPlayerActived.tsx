import styles from "./HeadUserPlayerActived.module.css";
import vivid_b1ca99e0a779 from "./b1ca99e0a779.svg";
import { XSearchHeader } from "./XSearchHeader";
import { HeadNotify_24Solid } from "./HeadNotify_24Solid";
import { PlayerPlay_24Solid } from "./PlayerPlay_24Solid";
import { PlayerBack_24Solid } from "./PlayerBack_24Solid";
import { PlayerNext_24Solid } from "./PlayerNext_24Solid";
import { XUsername } from "./XUsername";

export const HeadUserPlayerActived = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.headUserPlayerActived0}>
      <div className={styles.headUserPlayerActived1} />
      <div className={styles.headUserPlayerActived2}>
        <img
          src={vivid_b1ca99e0a779.src}
          className={styles.headUserPlayerActived3}
        />
        <XSearchHeader />
        <HeadNotify_24Solid />
        <PlayerPlay_24Solid />
        <PlayerBack_24Solid />
        <PlayerNext_24Solid />
        <p className={styles.headUserPlayerActived4}>
          Snow Patrol — What If This Storm E...
        </p>
        <XUsername />
      </div>
    </div>
  );
};
