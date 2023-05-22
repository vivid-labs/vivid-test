import styles from "./Part_5Page.module.css";
import { BtnHovering_2 } from "./BtnHovering_2";

export const Part_5Page = () => {
  return (
    <div className={styles.part_5Page0}>
      <div className={styles.part_5Page1}>
        <div className={styles.part_5Page2}>
          <p className={styles.part_5Page3}>
            Inscrivez-vous et bénéficiez de plusieurs privilèges
          </p>
          <p className={styles.part_5Page4}>
            En vous abonnant à Quick Bricolage vous pouvez profiter de
            l'abonnement annuel et les astuces et les bons plans et de
            nombreuses autres offres
          </p>
        </div>
        <div className={styles.part_5Page5}>
          <div>
            <p className={styles.part_5Page6}>E-mail</p>
            <div className={styles.part_5Page7}>
              <div className={styles.part_5Page8}>
                <p className={styles.part_5Page9}>
                  Saisissez votre adresse e-mail
                </p>
              </div>
            </div>
          </div>
          <BtnHovering_2 property_1="default" />
        </div>
      </div>
    </div>
  );
};
