import styles from "./ArtistCard.module.css";
import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";
import { Avatar_1 } from "./Avatar_1";
export const ArtistCard = ({
  override,
  property_1,
  artistName,
  additionalInfo,
  totalSales,
  salesNumber,
  rankingNumber2,
  rankingNumber,
}: {
  override?: any;
  property_1: string;
  artistName: string;
  additionalInfo: boolean;
  totalSales: string;
  salesNumber: string;
  rankingNumber2: boolean;
  rankingNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div
          style={override}
          className={styles.artistCardComponent}
          figma-id="7:1288:12923"
        >
          <div className={styles.artistAvatar} figma-id="7:1288:13060">
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 figma-id="7:" />}
              override={{
                height: "fit-content",
                width: "120px",
              }}
              figma-id="7:1288:12907"
            />
          </div>
          <div className={styles.artistInfoDiv} figma-id="7:1288:12914">
            <p className={styles.dishStudio} figma-id="7:1288:12909">
              {artistName}
            </p>
            {additionalInfo ? (
              <div className={styles.artistInfo} figma-id="7:1288:12913">
                <p className={styles.totalSales} figma-id="7:1288:12910">
                  {totalSales}
                </p>
                <p className={styles.text34_53Eth} figma-id="7:1288:12911">
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className={styles.artistCard} figma-id="7:1411:5351">
              <p className={styles.text1} figma-id="7:1385:2277">
                {rankingNumber}
              </p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Big":
      return (
        <div
          style={override}
          className={styles.artistCardComponent1}
          figma-id="7:1666:9873"
        >
          <div className={styles.artistAvatarDiv} figma-id="7:1666:9874">
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 figma-id="7:" />}
              override={{
                height: "fit-content",
                width: "60px",
              }}
              figma-id="7:1666:9875"
            />
          </div>
          <div className={styles.artistInfoDiv2} figma-id="7:1666:9876">
            <p className={styles.dishStudioText} figma-id="7:1666:9877">
              {artistName}
            </p>
            {additionalInfo ? (
              <div className={styles.artistInfoDiv1} figma-id="7:1666:9878">
                <p className={styles.totalSalesText} figma-id="7:1666:9879">
                  {totalSales}
                </p>
                <p className={styles.text34_53EthText} figma-id="7:1666:9880">
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className={styles.artistCardDiv} figma-id="7:1666:9881">
              <p className={styles.text1Text} figma-id="7:1666:9882">
                {rankingNumber}
              </p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Medium":
      return (
        <div
          style={override}
          className={styles.artistCardComponent2}
          figma-id="7:1288:12999"
        >
          <Avatar
            property_1="Small"
            avatarPhoto={<Avatar_1 figma-id="7:" />}
            figma-id="7:1288:13000"
          />
          <p className={styles.dishStudioText1} figma-id="7:1288:13002">
            {artistName}
          </p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div
          style={override}
          className={styles.artistCardComponent3}
          figma-id="7:1288:13008"
        >
          <Avatar
            property_1="Small"
            avatarPhoto={<Avatar_1 figma-id="7:" />}
            figma-id="7:1288:13009"
          />
          <p className={styles.dishStudioText2} figma-id="7:1288:13011">
            {artistName}
          </p>
        </div>
      );
    default:
      return null;
  }
};
