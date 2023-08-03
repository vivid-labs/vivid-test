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
    <div className={styles.rootComponent} style={override}>
      <div className={styles.row}>
        <div className={styles.transforms}>
          <div className={styles.rotation} />
          <div className={styles.clipContent} />
          <div className={styles.cornerRadius} />
          <div className={styles.splitCorners} />
        </div>
        <div className={styles.constraints}>
          <div className={styles.fixed}>
            <div className={styles.child} />
          </div>
          <div className={styles.fill}>
            <div className={styles.childDiv} />
          </div>
          <div className={styles.fillWidth}>
            <div className={styles.childDiv1} />
          </div>
          <div className={styles.fillHeight}>
            <div className={styles.childDiv2} />
          </div>
          <div className={styles.hug}>
            <div className={styles.childDiv3} />
          </div>
        </div>
      </div>
      <div className={styles.autoLayout}>
        <div className={styles.col}>
          <div className={styles.childDiv4} />
          <div className={styles.childDiv5} />
          <div className={styles.childDiv6} />
        </div>
        <div className={styles.rowDiv}>
          <div className={styles.childDiv7} />
          <div className={styles.childDiv8} />
          <div className={styles.childDiv9} />
        </div>
        <div className={styles.topCenter}>
          <div className={styles.childDiv10} />
          <div className={styles.childDiv11} />
          <div className={styles.childDiv12} />
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.childDiv13} />
          <div className={styles.childDiv14} />
          <div className={styles.childDiv15} />
        </div>
        <div className={styles.between}>
          <div className={styles.childDiv16} />
          <div className={styles.childDiv17} />
          <div className={styles.childDiv18} />
        </div>
        <div className={styles.padding}>
          <div className={styles.childDiv19} />
          <div className={styles.childDiv20} />
          <div className={styles.childDiv21} />
        </div>
        <div className={styles.gap}>
          <div className={styles.childDiv22} />
          <div className={styles.childDiv23} />
          <div className={styles.childDiv24} />
        </div>
        <div className={styles.splitPadding}>
          <div className={styles.childDiv25} />
          <div className={styles.childDiv26} />
          <div className={styles.childDiv27} />
        </div>
        <div className={styles.hugDiv}>
          <div className={styles.childDiv28} />
          <div className={styles.childDiv29} />
          <div className={styles.childDiv30} />
        </div>
        <div className={styles.hugFullChild}>
          <div className={styles.childDiv31} />
          <div className={styles.childDiv32} />
          <div className={styles.childDiv33} />
        </div>
      </div>
      <div className={styles.rowDiv1}>
        <div className={styles.fillAndStroke}>
          <div className={styles.frameOpacity} />
          <div className={styles.colorOpacity} />
          <div className={styles.multipleFills} />
          <div className={styles.stroke} />
          <div className={styles.strokeWidth} />
          <div className={styles.splitWidths} />
        </div>
        <div className={styles.effects}>
          <div className={styles.dropShadow} />
          <div className={styles.blur} />
          <div className={styles.innerShadow} />
        </div>
      </div>
      <div className={styles.gradient}>
        <div className={styles.linearGradient} />
        <div className={styles.linearRotatedAndScaled} />
        <div className={styles.radialGradient} />
        <div className={styles.radialCorner} />
        <div className={styles.radialScaled} />
        <div className={styles.angularConcialGradient} />
        <div className={styles.angularConcialRotated} />
        <div className={styles.gradientOpacity} />
        <div className={styles.multipleGradients} />
      </div>
      <div className={styles.textStyle}>
        <p className={styles.fillText}>Lorem </p>
        <p className={styles.gradients}>Lorem </p>
        <p className={styles.strokeText}>Lorem </p>
        <p className={styles.font}>Lorem</p>
        <p className={styles.italic}>Lorem</p>
        <p className={styles.weight}>Lorem</p>
        <p className={styles.italicWeight}>Lorem</p>
        <p className={styles.size}>Lorem </p>
        <p className={styles.kerning}>Lorem </p>
        <p className={styles.leading}>
          Lorem
          <br />
          Ipsum
        </p>
        <p className={styles.text0Leading}>Lorem</p>
        <p className={styles.paragraphLeading}>
          Lorem
          <br />
          Ipsum
        </p>
        <p className={styles.underline}>Lorem </p>
        <p className={styles.strike}>Lorem </p>
        <p className={styles.case}>Lorem </p>
      </div>
      <div className={styles.rectFills}>
        <div className={styles.singleGradient} />
        <div className={styles.gradientsDiv} />
        <div className={styles.singleSolid} />
        <div className={styles.solids} />
        <img className={styles.singleImage} src={combo.src} />
        <div className={styles.singleImageCrop}>
          <img className={styles.singleImageCropImage} src={combo.src} />
        </div>
        <div className={styles.images}>
          <img className={styles.image} src={combo.src} />
          <img className={styles.imageImage} src={combo.src} />
          <img className={styles.imageImage1} src={combo.src} />
        </div>
        <div className={styles.combo}>
          <div className={styles.div} />
          <img className={styles.imageImage2} src={combo.src} />
          <div className={styles.divDiv} />
          <img className={styles.imageImage3} src={combo.src} />
          <div className={styles.divDiv1} />
          <img className={styles.imageImage4} src={combo.src} />
          <div className={styles.divDiv2} />
        </div>
      </div>
      <div className={styles.rectangle}>
        <div className={styles.square} />
        <div className={styles.grow} />
        <div className={styles.rotate_1} />
        <div className={styles.rotate_2} />
        <div className={styles.corners} />
        <div className={styles.splitCornersDiv} />
        <div className={styles.multipleFillsDiv} />
        <div className={styles.gradientsDiv1} />
        <div className={styles.strokeDiv} />
      </div>
      <div className={styles.rotationDiv}>
        <div className={styles.rotate_1Div}>
          <p className={styles.t}>T</p>
        </div>
        <div className={styles.rotate_2Div}>
          <p className={styles.tText}>T</p>
        </div>
        <div className={styles.rotate_3}>
          <p className={styles.tText1}>T</p>
        </div>
        <div className={styles.rotate_4}>
          <p className={styles.tText2}>T</p>
        </div>
        <div className={styles.rotate_5}>
          <p className={styles.tText3}>T</p>
        </div>
        <div className={styles.rotate_6} />
        <div className={styles.rotate_7} />
      </div>
      <div className={styles.textLayoutAndEffects}>
        <p className={styles.autoWidth}>Lorem </p>
        <p className={styles.autoHeight}>Lorem Ipsum </p>
        <p className={styles.fixedSize}>Lorem </p>
        <p className={styles.truncate}>Lorem </p>
        <p className={styles.center}>Lorem </p>
        <p className={styles.right}>Lorem </p>
        <p className={styles.justify}>Lor em Ips um</p>
        <p className={styles.top}>Lorem </p>
        <p className={styles.middle}>Lorem </p>
        <p className={styles.bottom}>Lorem </p>
        <p className={styles.effectsText}>Lorem </p>
      </div>
      <div className={styles.svg}>
        <img className={styles.vector_1} src={vector_2.src} />
        <img className={styles.vector_2} src={vector_2.src} />
        <img className={styles.polygon_1} src={polygon_1.src} />
        <img className={styles.polygon_2} src={polygon_2.src} />
        <img className={styles.star_1} src={star_1.src} />
        <img className={styles.line_1} src={line_1.src} />
        <img className={styles.group_1} src={group_1.src} />
        <p className={styles.toPreventGrouping}>To prevent grouping</p>
      </div>
      <div className={styles.imageDiv}>
        <img className={styles.fillImage} src={flipCrop.src} />
        <img className={styles.fit} src={flipCrop.src} />
        <img className={styles.tile} src={flipCrop.src} />
        <img className={styles.effectsImage} src={flipCrop.src} />
        <img className={styles.ellipse} src={flipCrop.src} />
      </div>
      <div className={styles.imageCrop}>
        <div className={styles.normal}>
          <img className={styles.normalImage} src={flipCrop.src} />
        </div>
        <div className={styles.scaleX}>
          <img className={styles.scaleXImage} src={flipCrop.src} />
        </div>
        <div className={styles.scaleY}>
          <img className={styles.scaleYImage} src={flipCrop.src} />
        </div>
        <div className={styles.scaleRotate}>
          <img className={styles.scaleRotateImage} src={flipCrop.src} />
        </div>
        <div className={styles.translateX}>
          <img className={styles.translateXImage} src={flipCrop.src} />
        </div>
        <div className={styles.translateY}>
          <img className={styles.translateYImage} src={flipCrop.src} />
        </div>
        <div className={styles.rotate_1Div1}>
          <img className={styles.rotate_1Image} src={flipCrop.src} />
        </div>
        <div className={styles.rotate_2Div1}>
          <img className={styles.rotate_2Image} src={flipCrop.src} />
        </div>
        <div className={styles.rotate_3Div}>
          <img className={styles.rotate_3Image} src={flipCrop.src} />
        </div>
        <div className={styles.rotate_4Div}>
          <img className={styles.rotate_4Image} src={flipCrop.src} />
        </div>
        <div className={styles.rotate_5Div}>
          <img className={styles.rotate_5Image} src={flipCrop.src} />
        </div>
        <div className={styles.comboDiv}>
          <img className={styles.comboImage} src={flipCrop.src} />
        </div>
      </div>
      <div className={styles.flips}>
        <img className={styles.normalImage1} src={flipCrop.src} />
        <img className={styles.flipX} src={flipCrop.src} />
        <img className={styles.flipY} src={flipCrop.src} />
        <img className={styles.flipXy} src={flipCrop.src} />
        <div className={styles.flipCrop}>
          <img className={styles.flipCropImage} src={flipCrop.src} />
        </div>
      </div>
      <div className={styles.component}>
        <Component />
        <Component
          override={{
            borderWidth: "4px",
            borderColor: "rgb(105, 135, 240)",
            borderRadius: "10px",
            backgroundColor: "rgb(255, 18, 18)",
            boxShadow: "0px 4px 4px  rgb(0, 255, 71)",
            rotate: "38.9deg",
            overflow: "visible",
          }}
        />
      </div>
      <div className={styles.constraintsDiv}>
        <div className={styles.colDiv}>
          <div className={styles.childDiv34} />
          <div className={styles.childDiv35} />
          <div className={styles.childDiv36} />
        </div>
        <div className={styles.rowDiv2}>
          <div className={styles.childDiv37} />
          <div className={styles.childDiv38} />
          <div className={styles.childDiv39} />
        </div>
        <div className={styles.topCenterDiv}>
          <div className={styles.childDiv40} />
          <div className={styles.childDiv41} />
          <div className={styles.childDiv42} />
        </div>
        <div className={styles.bottomRightDiv}>
          <div className={styles.childDiv43} />
          <div className={styles.childDiv44} />
          <div className={styles.childDiv45} />
        </div>
      </div>
    </div>
  );
};
