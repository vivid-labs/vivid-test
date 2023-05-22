import styles from "./HeaderPage.module.css";
import { BtnHovering_2 } from "./BtnHovering_2";
import { BtnHovering_3 } from "./BtnHovering_3";
import vivid_efefb79ab7b2 from "./efefb79ab7b2.svg";
import vivid_08b378ecf82a from "./08b378ecf82a.svg";
import { VuesaxOutlineArrowDown } from "./VuesaxOutlineArrowDown";
import vivid_7410e182fb8d from "./7410e182fb8d.svg";
import vivid_a0a51ddcb1ca from "./a0a51ddcb1ca.svg";

export const HeaderPage = () => {
  return (
    <div className={styles.headerPage0}>
      <div className={styles.headerPage1}>
        <div className={styles.headerPage2}>
          <div className={styles.headerPage3}>
            <p className={styles.headerPage4}>Bali</p>
            <p className={styles.headerPage5}>Hani</p>
          </div>
          <p className={styles.headerPage6}>Satisfait ou refait</p>
        </div>
        <p className={styles.headerPage7}>
          plateforme en ligne facile à utiliser, qui vous permet d'accéder à nos
          produits et services de dépannage et petits travaux en quelques
          cliques{" "}
        </p>
        <div className={styles.headerPage8}>
          <BtnHovering_2 property_1="default" />
          <BtnHovering_3 property_1="default" />
        </div>
      </div>
      <div>
        <div className={styles.headerPage9} />
        <div className={styles.headerPage10} />
        <img src={vivid_efefb79ab7b2.src} className={styles.headerPage11} />
        <img src={vivid_08b378ecf82a.src} className={styles.headerPage12} />
      </div>
      <div className={styles.headerPage13}>
        <div className={styles.headerPage14}>
          <div className={styles.headerPage15}>
            <p className={styles.headerPage16}>Cherche un bricoleur</p>
          </div>
          <div className={styles.headerPage17}>
            <div className={styles.headerPage18}>
              <p className={styles.headerPage19}>Localisations</p>
              <div className={styles.headerPage20}>
                <p className={styles.headerPage21}>Sélectionnez la ville</p>
                <VuesaxOutlineArrowDown />
              </div>
            </div>
            <img src={vivid_7410e182fb8d.src} className={styles.headerPage22} />
            <div className={styles.headerPage23}>
              <p className={styles.headerPage24}>Date</p>
              <div className={styles.headerPage25}>
                <p className={styles.headerPage26}>Sélectionnez la date</p>
                <VuesaxOutlineArrowDown />
              </div>
            </div>
            <img src={vivid_7410e182fb8d.src} className={styles.headerPage27} />
            <div className={styles.headerPage28}>
              <p className={styles.headerPage29}>Temps</p>
              <div className={styles.headerPage30}>
                <p className={styles.headerPage31}>Sélectionnez le temps</p>
                <VuesaxOutlineArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerPage32}>
          <img src={vivid_a0a51ddcb1ca.src} className={styles.headerPage33} />
          <p className={styles.headerPage34}>Cherche</p>
        </div>
      </div>
    </div>
  );
};
