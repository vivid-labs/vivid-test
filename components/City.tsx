import styles from "./City.module.css";
import { Lake } from "./Lake";
import vivid_1e6e21d3ce92 from "./1e6e21d3ce92.svg";
import vivid_0850286a4d78 from "./0850286a4d78.svg";
import vivid_bf9cb295a778f67b5c859a9108c1494aa79a20cf from "./bf9cb295a778f67b5c859a9108c1494aa79a20cf.jpg";

export const City = ({
  backgroundImage,
  title,
  price,
  time,
  guideName,
  guidePosition,
}: {
  backgroundImage: any;
  title: string;
  price: string;
  time: string;
  guideName: string;
  guidePosition: string;
}) => {
  return (
    <div className={styles.city0}>
      <div className={styles.city1}>
        {backgroundImage}
        <div className={styles.city2} />
      </div>
      <div className={styles.city3}>
        <div className={styles.city4}>
          <p className={styles.city5}>{title}</p>
          <div className={styles.city6}>
            <div className={styles.city7}>
              <div className={styles.city8}>
                <div>
                  <img src={vivid_1e6e21d3ce92.src} className={styles.city9} />
                </div>
              </div>
              <p className={styles.city10}>{price}</p>
            </div>
            <div className={styles.city11}>
              <div className={styles.city12}>
                <div>
                  <img src={vivid_0850286a4d78.src} className={styles.city13} />
                </div>
              </div>
              <p className={styles.city14}>{time}</p>
            </div>
          </div>
        </div>
        <div className={styles.city15}>
          <img
            src={vivid_bf9cb295a778f67b5c859a9108c1494aa79a20cf.src}
            className={styles.city16}
          />
          <div className={styles.city17}>
            <p className={styles.city18}>{guideName}</p>
            <p className={styles.city19}>{guidePosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
