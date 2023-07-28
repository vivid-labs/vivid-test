import styles from "./Root.module.css";
import combo from "./combo.png";
import vector_2 from "./vector_2.svg";
import polygon_1 from "./polygon_1.svg";
import polygon_2 from "./polygon_2.svg";
import star_1 from "./star_1.svg";
import line_1 from "./line_1.svg";
import group_1 from "./group_1.svg";
import flipCrop from "./flipCrop.png";
import { Component } from "./Component";
export const Root = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.root} figma-id="3:566:1917">
      <div className={styles.row} figma-id="3:607:1757">
        <div className={styles.transforms} figma-id="3:477:1685">
          <div className={styles.rotation} figma-id="3:477:1686" />
          <div className={styles.clipContent} figma-id="3:479:1688" />
          <div className={styles.cornerRadius} figma-id="3:479:1689" />
          <div className={styles.splitCorners} figma-id="3:479:1690" />
        </div>
        <div className={styles.constraints} figma-id="3:561:1899">
          <div className={styles.fixed} figma-id="3:561:1906">
            <div className={styles.child} figma-id="3:561:1908" />
          </div>
          <div className={styles.fill} figma-id="3:561:1907">
            <div className={styles.childDiv} figma-id="3:561:1909" />
          </div>
          <div className={styles.fillWidth} figma-id="3:566:1913">
            <div className={styles.childDiv1} figma-id="3:566:1914" />
          </div>
          <div className={styles.fillHeight} figma-id="3:566:1915">
            <div className={styles.childDiv2} figma-id="3:566:1916" />
          </div>
          <div className={styles.hug} figma-id="3:561:1910">
            <div className={styles.childDiv3} figma-id="3:561:1911" />
          </div>
        </div>
      </div>
      <div className={styles.autoLayout} figma-id="3:561:1809">
        <div className={styles.col} figma-id="3:561:1810">
          <div className={styles.childDiv4} figma-id="3:561:1811" />
          <div className={styles.childDiv5} figma-id="3:561:1812" />
          <div className={styles.childDiv6} figma-id="3:561:1813" />
        </div>
        <div className={styles.rowDiv} figma-id="3:561:1814">
          <div className={styles.childDiv7} figma-id="3:561:1815" />
          <div className={styles.childDiv8} figma-id="3:561:1816" />
          <div className={styles.childDiv9} figma-id="3:561:1817" />
        </div>
        <div className={styles.topCenter} figma-id="3:561:1818">
          <div className={styles.childDiv10} figma-id="3:561:1819" />
          <div className={styles.childDiv11} figma-id="3:561:1820" />
          <div className={styles.childDiv12} figma-id="3:561:1821" />
        </div>
        <div className={styles.bottomRight} figma-id="3:561:1822">
          <div className={styles.childDiv13} figma-id="3:561:1823" />
          <div className={styles.childDiv14} figma-id="3:561:1824" />
          <div className={styles.childDiv15} figma-id="3:561:1825" />
        </div>
        <div className={styles.between} figma-id="3:561:1826">
          <div className={styles.childDiv16} figma-id="3:561:1827" />
          <div className={styles.childDiv17} figma-id="3:561:1828" />
          <div className={styles.childDiv18} figma-id="3:561:1829" />
        </div>
        <div className={styles.padding} figma-id="3:561:1830">
          <div className={styles.childDiv19} figma-id="3:561:1831" />
          <div className={styles.childDiv20} figma-id="3:561:1832" />
          <div className={styles.childDiv21} figma-id="3:561:1833" />
        </div>
        <div className={styles.gap} figma-id="3:561:1834">
          <div className={styles.childDiv22} figma-id="3:561:1835" />
          <div className={styles.childDiv23} figma-id="3:561:1836" />
          <div className={styles.childDiv24} figma-id="3:561:1837" />
        </div>
        <div className={styles.splitPadding} figma-id="3:561:1838">
          <div className={styles.childDiv25} figma-id="3:561:1839" />
          <div className={styles.childDiv26} figma-id="3:561:1840" />
          <div className={styles.childDiv27} figma-id="3:561:1841" />
        </div>
        <div className={styles.hugDiv} figma-id="3:561:1842">
          <div className={styles.childDiv28} figma-id="3:561:1843" />
          <div className={styles.childDiv29} figma-id="3:561:1844" />
          <div className={styles.childDiv30} figma-id="3:561:1845" />
        </div>
        <div className={styles.hugFullChild} figma-id="3:844:978">
          <div className={styles.childDiv31} figma-id="3:844:979" />
          <div className={styles.childDiv32} figma-id="3:844:980" />
          <div className={styles.childDiv33} figma-id="3:844:981" />
        </div>
      </div>
      <div className={styles.rowDiv1} figma-id="3:607:1758">
        <div className={styles.fillAndStroke} figma-id="3:479:1708">
          <div className={styles.frameOpacity} figma-id="3:477:1684" />
          <div className={styles.colorOpacity} figma-id="3:479:1718" />
          <div className={styles.multipleFills} figma-id="3:559:1762" />
          <div className={styles.stroke} figma-id="3:561:1892" />
          <div className={styles.strokeWidth} figma-id="3:561:1893" />
          <div className={styles.splitWidths} figma-id="3:561:1894" />
        </div>
        <div className={styles.effects} figma-id="3:479:1724">
          <div className={styles.dropShadow} figma-id="3:479:1725" />
          <div className={styles.blur} figma-id="3:479:1731" />
          <div className={styles.innerShadow} figma-id="3:479:1732" />
        </div>
      </div>
      <div className={styles.gradient} figma-id="3:561:1883">
        <div className={styles.linearGradient} figma-id="3:479:1719" />
        <div className={styles.linearRotatedAndScaled} figma-id="3:600:1757" />
        <div className={styles.radialGradient} figma-id="3:559:1759" />
        <div className={styles.radialCorner} figma-id="3:600:1758" />
        <div className={styles.radialScaled} figma-id="3:600:1759" />
        <div className={styles.angularConcialGradient} figma-id="3:559:1760" />
        <div className={styles.angularConcialRotated} figma-id="3:600:1760" />
        <div className={styles.gradientOpacity} figma-id="3:559:1758" />
        <div className={styles.multipleGradients} figma-id="3:559:1761" />
      </div>
      <div className={styles.textStyle} figma-id="3:607:1759">
        <p className={styles.fillText} figma-id="3:607:1769">
          Lorem{" "}
        </p>
        <p className={styles.gradients} figma-id="3:633:1774">
          Lorem{" "}
        </p>
        <p className={styles.strokeText} figma-id="3:607:1770">
          Lorem{" "}
        </p>
        <p className={styles.font} figma-id="3:611:1775">
          Lorem
        </p>
        <p className={styles.italic} figma-id="3:638:1785">
          Lorem
        </p>
        <p className={styles.weight} figma-id="3:638:1786">
          Lorem
        </p>
        <p className={styles.italicWeight} figma-id="3:638:1787">
          Lorem
        </p>
        <p className={styles.size} figma-id="3:611:1776">
          Lorem{" "}
        </p>
        <p className={styles.kerning} figma-id="3:607:1771">
          Lorem{" "}
        </p>
        <p className={styles.leading} figma-id="3:607:1772">
          Lorem
          <br />
          Ipsum
        </p>
        <p className={styles.text0Leading} figma-id="3:611:1773">
          Lorem
        </p>
        <p className={styles.paragraphLeading} figma-id="3:611:1774">
          Lorem
          <br />
          Ipsum
        </p>
        <p className={styles.underline} figma-id="3:611:1777">
          Lorem{" "}
        </p>
        <p className={styles.strike} figma-id="3:611:1786">
          Lorem{" "}
        </p>
        <p className={styles.case} figma-id="3:611:1817">
          Lorem{" "}
        </p>
      </div>
      <div className={styles.rectangle} figma-id="3:648:1790">
        <div className={styles.square} figma-id="3:648:1802" />
        <div className={styles.grow} figma-id="3:650:1819" />
        <div className={styles.rotate_1} figma-id="3:650:1820" />
        <div className={styles.rotate_2} figma-id="3:1522:919" />
        <div className={styles.corners} figma-id="3:650:1821" />
        <div className={styles.splitCornersDiv} figma-id="3:650:1822" />
        <div className={styles.multipleFillsDiv} figma-id="3:650:1823" />
        <div className={styles.gradientsDiv} figma-id="3:650:1824" />
        <div className={styles.strokeDiv} figma-id="3:650:1825" />
      </div>
      <div className={styles.rectFills} figma-id="3:1601:920">
        <div className={styles.singleGradient} figma-id="3:1601:932" />
        <div className={styles.gradientsDiv1} figma-id="3:1601:928" />
        <div className={styles.singleSolid} figma-id="3:1601:931" />
        <div className={styles.solids} figma-id="3:1601:936" />
        <img
          src={combo.src}
          className={styles.singleImage}
          figma-id="3:1601:933"
        />
        <div className={styles.singleImageCropDiv} figma-id="3:1601:937">
          <img
            src={combo.src}
            className={styles.singleImageCrop}
            figma-id="3:1601:937"
          />
        </div>
        <div className={styles.images} figma-id="3:1601:934">
          <img src={combo.src} className={styles.image} figma-id="" />
          <img src={combo.src} className={styles.imageImage} figma-id="" />
          <img src={combo.src} className={styles.imageImage1} figma-id="" />
        </div>
        <div className={styles.combo} figma-id="3:1601:935">
          <div className={styles.div} figma-id="" />
          <img src={combo.src} className={styles.imageImage2} figma-id="" />
          <div className={styles.divDiv} figma-id="" />
          <img src={combo.src} className={styles.imageImage3} figma-id="" />
          <div className={styles.divDiv1} figma-id="" />
          <img src={combo.src} className={styles.imageImage4} figma-id="" />
          <div className={styles.divDiv2} figma-id="" />
        </div>
      </div>
      <div className={styles.frameFills} figma-id="3:1601:947">
        <div className={styles.singleGradientDiv} figma-id="3:1601:959" />
        <div className={styles.gradientsDiv2} figma-id="3:1601:962" />
        <div className={styles.singleSolidDiv} figma-id="3:1601:963" />
        <div className={styles.solidsDiv} figma-id="3:1601:964" />
        <div className={styles.singleImageDiv} figma-id="3:1601:969">
          <img src={combo.src} className={styles.imageImage5} figma-id="" />
        </div>
        <div className={styles.singleImageCropDiv1} figma-id="3:1601:970">
          <img src={combo.src} className={styles.imageImage6} figma-id="" />
        </div>
        <div className={styles.imagesDiv} figma-id="3:1601:971">
          <img src={combo.src} className={styles.imageImage7} figma-id="" />
          <img src={combo.src} className={styles.imageImage8} figma-id="" />
          <img src={combo.src} className={styles.imageImage9} figma-id="" />
        </div>
        <div className={styles.comboDiv} figma-id="3:1601:972">
          <div className={styles.divDiv3} figma-id="" />
          <img src={combo.src} className={styles.imageImage10} figma-id="" />
          <div className={styles.divDiv4} figma-id="" />
          <img src={combo.src} className={styles.imageImage11} figma-id="" />
          <div className={styles.divDiv5} figma-id="" />
          <img src={combo.src} className={styles.imageImage12} figma-id="" />
          <div className={styles.divDiv6} figma-id="" />
        </div>
      </div>
      <div className={styles.rotationDiv} figma-id="3:1558:919">
        <div className={styles.rotate_1Div} figma-id="3:1558:930">
          <p className={styles.t} figma-id="3:1558:931">
            T
          </p>
        </div>
        <div className={styles.rotate_2Div} figma-id="3:1558:932">
          <p className={styles.tText} figma-id="3:1558:933">
            T
          </p>
        </div>
        <div className={styles.rotate_3} figma-id="3:1558:934">
          <p className={styles.tText1} figma-id="3:1558:935">
            T
          </p>
        </div>
        <div className={styles.rotate_4} figma-id="3:1558:936">
          <p className={styles.tText2} figma-id="3:1558:937">
            T
          </p>
        </div>
        <div className={styles.rotate_5} figma-id="3:1558:938">
          <p className={styles.tText3} figma-id="3:1558:939">
            T
          </p>
        </div>
        <div className={styles.rotate_6} figma-id="3:1558:923" />
        <div className={styles.rotate_7} figma-id="3:1558:929" />
      </div>
      <div className={styles.textLayoutAndEffects} figma-id="3:615:1889">
        <p className={styles.autoWidth} figma-id="3:615:1890">
          Lorem{" "}
        </p>
        <p className={styles.autoHeight} figma-id="3:615:1901">
          Lorem Ipsum{" "}
        </p>
        <p className={styles.fixedSize} figma-id="3:615:1902">
          Lorem{" "}
        </p>
        <p className={styles.truncate} figma-id="3:633:1766">
          Lorem{" "}
        </p>
        <p className={styles.center} figma-id="3:615:1903">
          Lorem{" "}
        </p>
        <p className={styles.right} figma-id="3:615:1904">
          Lorem{" "}
        </p>
        <p className={styles.justify} figma-id="3:636:1775">
          Lor em Ips um
        </p>
        <p className={styles.top} figma-id="3:615:1905">
          Lorem{" "}
        </p>
        <p className={styles.middle} figma-id="3:615:1906">
          Lorem{" "}
        </p>
        <p className={styles.bottom} figma-id="3:615:1907">
          Lorem{" "}
        </p>
        <p className={styles.effectsText} figma-id="3:615:1908">
          Lorem{" "}
        </p>
      </div>
      <div className={styles.svg} figma-id="3:733:2163">
        <img
          src={vector_2.src}
          className={styles.vector_1}
          figma-id="3:733:2172"
        />
        <img
          src={vector_2.src}
          className={styles.vector_2}
          figma-id="3:825:1061"
        />
        <img
          src={polygon_1.src}
          className={styles.polygon_1}
          figma-id="3:733:2174"
        />
        <img
          src={polygon_2.src}
          className={styles.polygon_2}
          figma-id="3:733:2175"
        />
        <img src={star_1.src} className={styles.star_1} figma-id="3:733:2177" />
        <img src={line_1.src} className={styles.line_1} figma-id="3:733:2178" />
        <img
          src={group_1.src}
          className={styles.group_1}
          figma-id="3:733:2181"
        />
        <p className={styles.toPreventGrouping} figma-id="3:825:1060">
          To prevent grouping
        </p>
      </div>
      <div className={styles.imageDiv} figma-id="3:669:1758">
        <img
          src={flipCrop.src}
          className={styles.fillImage}
          figma-id="3:669:1757"
        />
        <img src={flipCrop.src} className={styles.fit} figma-id="3:700:1750" />
        <img src={flipCrop.src} className={styles.tile} figma-id="3:700:1752" />
        <img
          src={flipCrop.src}
          className={styles.effectsImage}
          figma-id="3:700:1753"
        />
        <img
          src={flipCrop.src}
          className={styles.ellipse}
          figma-id="3:733:2161"
        />
      </div>
      <div className={styles.imageCrop} figma-id="3:1554:920">
        <div className={styles.normalDiv} figma-id="3:1554:923">
          <img
            src={flipCrop.src}
            className={styles.normal}
            figma-id="3:1554:923"
          />
        </div>
        <div className={styles.scaleXDiv} figma-id="3:1554:929">
          <img
            src={flipCrop.src}
            className={styles.scaleX}
            figma-id="3:1554:929"
          />
        </div>
        <div className={styles.scaleYDiv} figma-id="3:1554:931">
          <img
            src={flipCrop.src}
            className={styles.scaleY}
            figma-id="3:1554:931"
          />
        </div>
        <div className={styles.scaleRotateDiv} figma-id="3:1579:920">
          <img
            src={flipCrop.src}
            className={styles.scaleRotate}
            figma-id="3:1579:920"
          />
        </div>
        <div className={styles.translateXDiv} figma-id="3:1554:933">
          <img
            src={flipCrop.src}
            className={styles.translateX}
            figma-id="3:1554:933"
          />
        </div>
        <div className={styles.translateYDiv} figma-id="3:1554:932">
          <img
            src={flipCrop.src}
            className={styles.translateY}
            figma-id="3:1554:932"
          />
        </div>
        <div className={styles.rotate_1Div1} figma-id="3:1554:934">
          <img
            src={flipCrop.src}
            className={styles.rotate_1Image}
            figma-id="3:1554:934"
          />
        </div>
        <div className={styles.rotate_2Div1} figma-id="3:1554:935">
          <img
            src={flipCrop.src}
            className={styles.rotate_2Image}
            figma-id="3:1554:935"
          />
        </div>
        <div className={styles.rotate_3Div} figma-id="3:1554:936">
          <img
            src={flipCrop.src}
            className={styles.rotate_3Image}
            figma-id="3:1554:936"
          />
        </div>
        <div className={styles.rotate_4Div} figma-id="3:1554:937">
          <img
            src={flipCrop.src}
            className={styles.rotate_4Image}
            figma-id="3:1554:937"
          />
        </div>
        <div className={styles.rotate_5Div} figma-id="3:1575:919">
          <img
            src={flipCrop.src}
            className={styles.rotate_5Image}
            figma-id="3:1575:919"
          />
        </div>
        <div className={styles.comboDiv1} figma-id="3:1554:957">
          <img
            src={flipCrop.src}
            className={styles.comboImage}
            figma-id="3:1554:957"
          />
        </div>
      </div>
      <div className={styles.flips} figma-id="3:1585:921">
        <img
          src={flipCrop.src}
          className={styles.normalImage}
          figma-id="3:1585:922"
        />
        <img
          src={flipCrop.src}
          className={styles.flipX}
          figma-id="3:1585:934"
        />
        <img
          src={flipCrop.src}
          className={styles.flipY}
          figma-id="3:1585:936"
        />
        <img
          src={flipCrop.src}
          className={styles.flipXy}
          figma-id="3:1585:935"
        />
        <div className={styles.flipCropDiv} figma-id="3:1585:937">
          <img
            src={flipCrop.src}
            className={styles.flipCrop}
            figma-id="3:1585:937"
          />
        </div>
      </div>
      <div className={styles.component} figma-id="3:756:1889">
        <Component figma-id="3:1635:937" />
        <Component
          override={{
            borderWidth: "4px",
            borderColor: "rgb(105, 135, 240)",
            borderRadius: "10px",
            backgroundColor: "rgb(255, 18, 18)",
            boxShadow: "0px 4px 4px  rgb(0, 255, 71, 1.00)",
            overflow: "visible",
          }}
          figma-id="3:1635:938"
        />
      </div>
      <div className={styles.constraintsDiv} figma-id="3:846:1019">
        <div className={styles.colDiv} figma-id="3:846:1020">
          <div className={styles.childDiv34} figma-id="3:846:1021" />
          <div className={styles.childDiv35} figma-id="3:846:1022" />
          <div className={styles.childDiv36} figma-id="3:846:1023" />
        </div>
        <div className={styles.rowDiv2} figma-id="3:846:1024">
          <div className={styles.childDiv37} figma-id="3:846:1025" />
          <div className={styles.childDiv38} figma-id="3:846:1027" />
          <div className={styles.childDiv39} figma-id="3:846:1026" />
        </div>
        <div className={styles.topCenterDiv} figma-id="3:846:1028">
          <div className={styles.childDiv40} figma-id="3:846:1029" />
          <div className={styles.childDiv41} figma-id="3:846:1030" />
          <div className={styles.childDiv42} figma-id="3:846:1031" />
        </div>
        <div className={styles.bottomRightDiv} figma-id="3:846:1032">
          <div className={styles.childDiv43} figma-id="3:846:1033" />
          <div className={styles.childDiv44} figma-id="3:846:1035" />
          <div className={styles.childDiv45} figma-id="3:846:1034" />
        </div>
      </div>
    </div>
  );
};
