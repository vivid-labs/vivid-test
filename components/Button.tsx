import styles from "./Button.module.css";
import { IconsAdd_24px } from "./IconsAdd_24px";
export const Button = ({
  override,
  style,
  state,
  showIcon,
  icon,
  labelText,
}: {
  override?: any;
  style: string;
  state: string;
  showIcon: string;
  icon: any;
  labelText: string;
}) => {
  if (style === "Tonal" && state === "disabled" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent48}
        figma-id="10:53923:27461"
      >
        <div className={styles.stateLayerDiv48} figma-id="10:53923:27462">
          {icon}
          <p className={styles.labelTextText48} figma-id="10:53923:27464">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent47}
        figma-id="10:53923:27465"
      >
        <div className={styles.stateLayerDiv47} figma-id="10:53923:27466">
          {icon}
          <p className={styles.labelTextText47} figma-id="10:53923:27468">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent46}
        figma-id="10:53923:27469"
      >
        <div className={styles.stateLayerDiv46} figma-id="10:53923:27470">
          {icon}
          <p className={styles.labelTextText46} figma-id="10:53923:27472">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent45}
        figma-id="10:53923:27473"
      >
        <div className={styles.stateLayerDiv45} figma-id="10:53923:27474">
          {icon}
          <p className={styles.labelTextText45} figma-id="10:53923:27476">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent44}
        figma-id="10:53923:27477"
      >
        <div className={styles.stateLayerDiv44} figma-id="10:53923:27478">
          {icon}
          <p className={styles.labelTextText44} figma-id="10:53923:27480">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Tonal" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent43}
        figma-id="10:53923:27481"
      >
        <div className={styles.stateLayerDiv43} figma-id="10:53923:27482">
          <p className={styles.labelTextText43} figma-id="10:53923:27483">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent42}
        figma-id="10:53923:27484"
      >
        <div className={styles.stateLayerDiv42} figma-id="10:53923:27485">
          <p className={styles.labelTextText42} figma-id="10:53923:27486">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent41}
        figma-id="10:53923:27487"
      >
        <div className={styles.stateLayerDiv41} figma-id="10:53923:27488">
          <p className={styles.labelTextText41} figma-id="10:53923:27489">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent40}
        figma-id="10:53923:27490"
      >
        <div className={styles.stateLayerDiv40} figma-id="10:53923:27491">
          <p className={styles.labelTextText40} figma-id="10:53923:27492">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent39}
        figma-id="10:53923:27493"
      >
        <div className={styles.stateLayerDiv39} figma-id="10:53923:27494">
          <p className={styles.labelTextText39} figma-id="10:53923:27495">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent38}
        figma-id="10:53923:27496"
      >
        <div className={styles.stateLayerDiv38} figma-id="10:53923:27497">
          {icon}
          <p className={styles.labelTextText38} figma-id="10:53923:27499">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "pressed" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent37}
        figma-id="10:53923:27500"
      >
        <div className={styles.stateLayerDiv37} figma-id="10:53923:27501">
          {icon}
          <p className={styles.labelTextText37} figma-id="10:53923:27503">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "focused" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent36}
        figma-id="10:53923:27504"
      >
        <div className={styles.stateLayerDiv36} figma-id="10:53923:27505">
          {icon}
          <p className={styles.labelTextText36} figma-id="10:53923:27507">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "hovered" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent35}
        figma-id="10:53923:27508"
      >
        <div className={styles.stateLayerDiv35} figma-id="10:53923:27509">
          {icon}
          <p className={styles.labelTextText35} figma-id="10:53923:27511">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "enabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent34}
        figma-id="10:53923:27512"
      >
        <div className={styles.stateLayerDiv34} figma-id="10:53923:27513">
          {icon}
          <p className={styles.labelTextText34} figma-id="10:53923:27515">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent33}
        figma-id="10:53923:27516"
      >
        <div className={styles.stateLayerDiv33} figma-id="10:53923:27517">
          <p className={styles.labelTextText33} figma-id="10:53923:27518">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent32}
        figma-id="10:53923:27519"
      >
        <div className={styles.stateLayerDiv32} figma-id="10:53923:27520">
          <p className={styles.labelTextText32} figma-id="10:53923:27521">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent31}
        figma-id="10:53923:27522"
      >
        <div className={styles.stateLayerDiv31} figma-id="10:53923:27523">
          <p className={styles.labelTextText31} figma-id="10:53923:27524">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent30}
        figma-id="10:53923:27525"
      >
        <div className={styles.stateLayerDiv30} figma-id="10:53923:27526">
          <p className={styles.labelTextText30} figma-id="10:53923:27527">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent29}
        figma-id="10:53923:27528"
      >
        <div className={styles.stateLayerDiv29} figma-id="10:53923:27529">
          <p className={styles.labelTextText29} figma-id="10:53923:27530">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "disabled" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent28}
        figma-id="10:53923:27531"
      >
        <div className={styles.stateLayerDiv28} figma-id="10:53923:27532">
          {icon}
          <p className={styles.labelTextText28} figma-id="10:53923:27534">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "pressed" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent27}
        figma-id="10:53923:27535"
      >
        <div className={styles.stateLayerDiv27} figma-id="10:53923:27536">
          {icon}
          <p className={styles.labelTextText27} figma-id="10:53923:27538">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "focused" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent26}
        figma-id="10:53923:27539"
      >
        <div className={styles.stateLayerDiv26} figma-id="10:53923:27540">
          {icon}
          <p className={styles.labelTextText26} figma-id="10:53923:27542">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "hovered" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent25}
        figma-id="10:53923:27543"
      >
        <div className={styles.stateLayerDiv25} figma-id="10:53923:27544">
          {icon}
          <p className={styles.labelTextText25} figma-id="10:53923:27546">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "enabled" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent24}
        figma-id="10:53923:27547"
      >
        <div className={styles.stateLayerDiv24} figma-id="10:53923:27548">
          {icon}
          <p className={styles.labelTextText24} figma-id="10:53923:27550">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "disabled" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent23}
        figma-id="10:53923:27551"
      >
        <div className={styles.stateLayerDiv23} figma-id="10:53923:27552">
          <p className={styles.labelTextText23} figma-id="10:53923:27553">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "pressed" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent22}
        figma-id="10:53923:27554"
      >
        <div className={styles.stateLayerDiv22} figma-id="10:53923:27555">
          <p className={styles.labelTextText22} figma-id="10:53923:27556">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "focused" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent21}
        figma-id="10:53923:27557"
      >
        <div className={styles.stateLayerDiv21} figma-id="10:53923:27558">
          <p className={styles.labelTextText21} figma-id="10:53923:27559">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "hovered" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent20}
        figma-id="10:53923:27560"
      >
        <div className={styles.stateLayerDiv20} figma-id="10:53923:27561">
          <p className={styles.labelTextText20} figma-id="10:53923:27562">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "enabled" && showIcon === "False") {
    return (
      <div
        style={override}
        className={styles.buttonComponent19}
        figma-id="10:53923:27563"
      >
        <div className={styles.stateLayerDiv19} figma-id="10:53923:27564">
          <p className={styles.labelTextText19} figma-id="10:53923:27565">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent18}
        figma-id="10:53923:27566"
      >
        <div className={styles.stateLayerDiv18} figma-id="10:53923:27567">
          {icon}
          <p className={styles.labelTextText18} figma-id="10:53923:27569">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "pressed" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent17}
        figma-id="10:53923:27570"
      >
        <div className={styles.stateLayerDiv17} figma-id="10:53923:27571">
          {icon}
          <p className={styles.labelTextText17} figma-id="10:53923:27573">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "focused" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent16}
        figma-id="10:53923:27574"
      >
        <div className={styles.stateLayerDiv16} figma-id="10:53923:27575">
          {icon}
          <p className={styles.labelTextText16} figma-id="10:53923:27577">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "hovered" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent15}
        figma-id="10:53923:27578"
      >
        <div className={styles.stateLayerDiv15} figma-id="10:53923:27579">
          {icon}
          <p className={styles.labelTextText15} figma-id="10:53923:27581">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "enabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent14}
        figma-id="10:53923:27582"
      >
        <div className={styles.stateLayerDiv14} figma-id="10:53923:27583">
          {icon}
          <p className={styles.labelTextText14} figma-id="10:53923:27585">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent13}
        figma-id="10:53923:27586"
      >
        <div className={styles.stateLayerDiv13} figma-id="10:53923:27587">
          <p className={styles.labelTextText13} figma-id="10:53923:27588">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent12}
        figma-id="10:53923:27589"
      >
        <div className={styles.stateLayerDiv12} figma-id="10:53923:27590">
          <p className={styles.labelTextText12} figma-id="10:53923:27591">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent11}
        figma-id="10:53923:27592"
      >
        <div className={styles.stateLayerDiv11} figma-id="10:53923:27593">
          <p className={styles.labelTextText11} figma-id="10:53923:27594">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent10}
        figma-id="10:53923:27595"
      >
        <div className={styles.stateLayerDiv10} figma-id="10:53923:27596">
          <p className={styles.labelTextText10} figma-id="10:53923:27597">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent9}
        figma-id="10:53923:27598"
      >
        <div className={styles.stateLayerDiv9} figma-id="10:53923:27599">
          <p className={styles.labelTextText9} figma-id="10:53923:27600">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent8}
        figma-id="10:53923:27601"
      >
        <div className={styles.stateLayerDiv8} figma-id="10:53923:27602">
          {icon}
          <p className={styles.labelTextText8} figma-id="10:53923:27604">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "pressed" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent7}
        figma-id="10:53923:27605"
      >
        <div className={styles.stateLayerDiv7} figma-id="10:53923:27606">
          {icon}
          <p className={styles.labelTextText7} figma-id="10:53923:27608">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "focused" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent6}
        figma-id="10:53923:27609"
      >
        <div className={styles.stateLayerDiv6} figma-id="10:53923:27610">
          {icon}
          <p className={styles.labelTextText6} figma-id="10:53923:27612">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "hovered" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent5}
        figma-id="10:53923:27613"
      >
        <div className={styles.stateLayerDiv5} figma-id="10:53923:27614">
          {icon}
          <p className={styles.labelTextText5} figma-id="10:53923:27616">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "enabled" && showIcon === "True") {
    return (
      <div
        style={override}
        className={styles.buttonComponent4}
        figma-id="10:53923:27617"
      >
        <div className={styles.stateLayerDiv4} figma-id="10:53923:27618">
          {icon}
          <p className={styles.labelTextText4} figma-id="10:53923:27620">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent3}
        figma-id="10:53923:27621"
      >
        <div className={styles.stateLayerDiv3} figma-id="10:53923:27622">
          <p className={styles.labelTextText3} figma-id="10:53923:27623">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent2}
        figma-id="10:53923:27624"
      >
        <div className={styles.stateLayerDiv2} figma-id="10:53923:27625">
          <p className={styles.labelTextText2} figma-id="10:53923:27626">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent1}
        figma-id="10:53923:27627"
      >
        <div className={styles.stateLayerDiv1} figma-id="10:53923:27628">
          <p className={styles.labelTextText1} figma-id="10:53923:27629">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        style={override}
        className={styles.buttonComponent}
        figma-id="10:53923:27630"
      >
        <div className={styles.stateLayerDiv} figma-id="10:53923:27631">
          <p className={styles.labelTextText} figma-id="10:53923:27632">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div style={override} className={styles.button} figma-id="10:53923:27633">
        <div className={styles.stateLayer} figma-id="10:53923:27634">
          <p className={styles.labelText} figma-id="10:53923:27635">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
