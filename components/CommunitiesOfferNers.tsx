import styles from "./CommunitiesOfferNers.module.css";
import { Avatar_28 } from "./Avatar_28";
import { Photos_24Solid } from "./Photos_24Solid";
import { Video_24Solid } from "./Video_24Solid";
import { Music_24Solid } from "./Music_24Solid";
import vivid_7b94deba58c778b86e24cd1a748fb2725da85f0a from "./7b94deba58c778b86e24cd1a748fb2725da85f0a.png";
import vivid_8a85a47790c4 from "./8a85a47790c4.svg";

export const CommunitiesOfferNers = () => {
  return (
    <div className={styles.communitiesOfferNers0}>
      <div className={styles.communitiesOfferNers1}>
        <Avatar_28 />
        <p className={styles.communitiesOfferNers2}>Предложите новость</p>
      </div>
      <div className={styles.communitiesOfferNers3}>
        <Photos_24Solid />
        <Video_24Solid />
        <Music_24Solid />
        <img
          src={vivid_7b94deba58c778b86e24cd1a748fb2725da85f0a.src}
          className={styles.communitiesOfferNers4}
        />
        <img
          src={vivid_8a85a47790c4.src}
          className={styles.communitiesOfferNers5}
        />
      </div>
    </div>
  );
};
