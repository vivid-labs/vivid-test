import styles from "./NavChapternavPage.module.css";
import iphone_14ProLightDfhcc00ur2oiLargeSvg from "./iphone_14ProLightDfhcc00ur2oiLargeSvg.svg";
import iphone_14LightFwknsxkf80uqLargeSvg from "./iphone_14LightFwknsxkf80uqLargeSvg.svg";
import iphone_13LightEwo3e0sf67o2LargeSvg from "./iphone_13LightEwo3e0sf67o2LargeSvg.svg";
import iphoneSeLightFhg8duy6ffauLargeSvg from "./iphoneSeLightFhg8duy6ffauLargeSvg.svg";
import iphone_12LightCxh2ll1zwpw2LargeSvg from "./iphone_12LightCxh2ll1zwpw2LargeSvg.svg";
import iphoneCompareLightF4jj7brpbvm2LargeSvg from "./iphoneCompareLightF4jj7brpbvm2LargeSvg.svg";
import airpodsLight_8oj157p2476aLargeSvg from "./airpodsLight_8oj157p2476aLargeSvg.svg";
import airtagLightCb2bmnv6aoeuLargeSvg from "./airtagLightCb2bmnv6aoeuLargeSvg.svg";
import accessoriesLightEd5l6ipsevquLargeSvg from "./accessoriesLightEd5l6ipsevquLargeSvg.svg";
import groupImage from "./groupImage.svg";
import group from "./group.svg";
import shopIphoneLightB2toggskllleLargeSvg from "./shopIphoneLightB2toggskllleLargeSvg.svg";

export const NavChapternavPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.navChapternavPage}>
      <div className={styles.ul}>
        <div className={styles.a}>
          <div className={styles.figure}>
            <img
              src={iphone_14ProLightDfhcc00ur2oiLargeSvg.src}
              className={styles.iphone_14ProLightDfhcc00ur2oiLargeSvg}
            />
          </div>
          <p className={styles.iPhone_14Pro}>iPhone 14 Pro</p>
          <p className={styles.new}>New</p>
        </div>
        <div className={styles.aDiv}>
          <div className={styles.figureDiv}>
            <img
              src={iphone_14LightFwknsxkf80uqLargeSvg.src}
              className={styles.iphone_14LightFwknsxkf80uqLargeSvg}
            />
          </div>
          <p className={styles.iPhone_14}>iPhone 14</p>
          <p className={styles.newText}>New</p>
        </div>
        <div className={styles.aDiv1}>
          <div className={styles.figureDiv1}>
            <img
              src={iphone_13LightEwo3e0sf67o2LargeSvg.src}
              className={styles.iphone_13LightEwo3e0sf67o2LargeSvg}
            />
          </div>
          <p className={styles.iPhone_13}>iPhone 13</p>
        </div>
        <div className={styles.aDiv2}>
          <div className={styles.figureDiv2}>
            <img
              src={iphoneSeLightFhg8duy6ffauLargeSvg.src}
              className={styles.iphoneSeLightFhg8duy6ffauLargeSvg}
            />
          </div>
          <p className={styles.iPhoneSe}>iPhone SE</p>
        </div>
        <div className={styles.aDiv3}>
          <div className={styles.figureDiv3}>
            <img
              src={iphone_12LightCxh2ll1zwpw2LargeSvg.src}
              className={styles.iphone_12LightCxh2ll1zwpw2LargeSvg}
            />
          </div>
          <p className={styles.iPhone_12}>iPhone 12</p>
        </div>
        <div className={styles.aDiv4}>
          <div className={styles.figureDiv4}>
            <img
              src={iphoneCompareLightF4jj7brpbvm2LargeSvg.src}
              className={styles.iphoneCompareLightF4jj7brpbvm2LargeSvg}
            />
          </div>
          <p className={styles.compare}>Compare</p>
        </div>
        <div className={styles.aDiv5}>
          <div className={styles.figureDiv5}>
            <img
              src={airpodsLight_8oj157p2476aLargeSvg.src}
              className={styles.airpodsLight_8oj157p2476aLargeSvg}
            />
          </div>
          <p className={styles.airPods}>AirPods</p>
        </div>
        <div className={styles.aDiv6}>
          <div className={styles.figureDiv6}>
            <img
              src={airtagLightCb2bmnv6aoeuLargeSvg.src}
              className={styles.airtagLightCb2bmnv6aoeuLargeSvg}
            />
          </div>
          <p className={styles.airTag}>AirTag</p>
        </div>
        <div className={styles.aDiv7}>
          <div className={styles.figureDiv7}>
            <img
              src={accessoriesLightEd5l6ipsevquLargeSvg.src}
              className={styles.accessoriesLightEd5l6ipsevquLargeSvg}
            />
          </div>
          <p className={styles.accessories}>Accessories</p>
        </div>
        <div className={styles.aDiv8}>
          <div className={styles.figureDiv8}>
            <div className={styles.iphoneAppleCardLightDtut839e76c2LargeSvg}>
              <div>
                <img src={groupImage.src} className={styles.group} />
              </div>
            </div>
          </div>
          <p className={styles.appleCard}>Apple Card</p>
        </div>
        <div className={styles.aDiv9}>
          <div className={styles.figureDiv9}>
            <div className={styles.iphoneIosLightB8s4ws8o77iqLargeSvg}>
              <div>
                <img src={group.src} className={styles.groupImage} />
              </div>
            </div>
          </div>
          <p className={styles.iOs_16}>iOS 16</p>
        </div>
        <div className={styles.aDiv10}>
          <div className={styles.figureDiv10}>
            <img
              src={shopIphoneLightB2toggskllleLargeSvg.src}
              className={styles.shopIphoneLightB2toggskllleLargeSvg}
            />
          </div>
          <p className={styles.shopIPhone}>Shop iPhone</p>
        </div>
      </div>
    </div>
  );
};
