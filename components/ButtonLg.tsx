import styles from "./ButtonLg.module.css";
import icnSettingsIcnXs_1 from "./icnSettingsIcnXs_1.svg";
import icnArrowDownIcnSm_3 from "./icnArrowDownIcnSm_3.svg";
import icnArrowLeftIcnSm_3 from "./icnArrowLeftIcnSm_3.svg";
import icnArrowRightIcnSm_2 from "./icnArrowRightIcnSm_2.svg";
import icnArrowDownIcnSm_2 from "./icnArrowDownIcnSm_2.svg";
import icnArrowLeftIcnSm_2 from "./icnArrowLeftIcnSm_2.svg";
import icnArrowRightIcnSm_1 from "./icnArrowRightIcnSm_1.svg";
import icnSettingsIcnXs from "./icnSettingsIcnXs.svg";
import icnArrowDownIcnSm_1 from "./icnArrowDownIcnSm_1.svg";
import icnArrowLeftIcnSm_1 from "./icnArrowLeftIcnSm_1.svg";
import icnArrowRightIcnSm from "./icnArrowRightIcnSm.svg";
import icnArrowDownIcnSm from "./icnArrowDownIcnSm.svg";
import icnArrowLeftIcnSm from "./icnArrowLeftIcnSm.svg";
import icnPlayIcnSm_3 from "./icnPlayIcnSm_3.svg";
import icnPlayIcnSm_2 from "./icnPlayIcnSm_2.svg";
import icnPlayIcnSm_1 from "./icnPlayIcnSm_1.svg";
import icnPlayIcnSm from "./icnPlayIcnSm.svg";

export const ButtonLg = ({
  style,
  text,
  icon,
  rounded,
  ourlined,
  iconLeft,
  dropdown,
  previous,
  next,
  play,
}: {
  style?: any;
  text: string;
  icon: string;
  rounded: string;
  ourlined: string;
  iconLeft: string;
  dropdown: string;
  previous: string;
  next: string;
  play: string;
}) => {
  if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "false" &&
    play === "true"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "false"
  ) {
    return null;
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "true" &&
    next === "true" &&
    play === "true"
  ) {
    return null;
  }

  if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent26}>
        <p className={styles.h3Text10}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent25}>
        <img
          src={icnSettingsIcnXs_1.src}
          className={styles.icnSettingsIcnXsImage6}
        />
        <p className={styles.h3Text9}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent24}>
        <p className={styles.h3Text8}>Button</p>
        <img
          src={icnArrowDownIcnSm_3.src}
          className={styles.icnArrowDownIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent23}>
        <img
          src={icnSettingsIcnXs_1.src}
          className={styles.icnSettingsIcnXsImage5}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent22}>
        <img
          src={icnArrowLeftIcnSm_3.src}
          className={styles.icnArrowLeftIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent21}>
        <img
          src={icnArrowRightIcnSm_2.src}
          className={styles.icnArrowRightIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent20}>
        <p className={styles.h3Text7}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent19}>
        <img
          src={icnSettingsIcnXs_1.src}
          className={styles.icnSettingsIcnXsImage4}
        />
        <p className={styles.h3Text6}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent18}>
        <p className={styles.h3Text5}>Button</p>
        <img
          src={icnArrowDownIcnSm_2.src}
          className={styles.icnArrowDownIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent17}>
        <img
          src={icnSettingsIcnXs_1.src}
          className={styles.icnSettingsIcnXsImage3}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent16}>
        <img
          src={icnArrowLeftIcnSm_2.src}
          className={styles.icnArrowLeftIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent15}>
        <img
          src={icnArrowRightIcnSm_1.src}
          className={styles.icnArrowRightIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent14}>
        <p className={styles.h3Text4}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent13}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage2}
        />
        <p className={styles.h3Text3}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent12}>
        <p className={styles.h3Text2}>Button</p>
        <img
          src={icnArrowDownIcnSm_1.src}
          className={styles.icnArrowDownIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent11}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent10}>
        <img
          src={icnArrowLeftIcnSm_1.src}
          className={styles.icnArrowLeftIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent9}>
        <img
          src={icnArrowRightIcnSm.src}
          className={styles.icnArrowRightIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent8}>
        <p className={styles.h3Text1}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent7}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage}
        />
        <p className={styles.h3Text}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent6}>
        <p className={styles.h3}>Button</p>
        <img src={icnArrowDownIcnSm.src} className={styles.icnArrowDownIcnSm} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent5}>
        <img src={icnSettingsIcnXs.src} className={styles.icnSettingsIcnXs} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent4}>
        <img src={icnArrowLeftIcnSm.src} className={styles.icnArrowLeftIcnSm} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent3}>
        <img
          src={icnArrowRightIcnSm.src}
          className={styles.icnArrowRightIcnSm}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent2}>
        <img src={icnPlayIcnSm_3.src} className={styles.icnPlayIcnSmImage2} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent1}>
        <img src={icnPlayIcnSm_2.src} className={styles.icnPlayIcnSmImage1} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent}>
        <img src={icnPlayIcnSm_1.src} className={styles.icnPlayIcnSmImage} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLg}>
        <img src={icnPlayIcnSm.src} className={styles.icnPlayIcnSm} />
      </div>
    );
  } else {
    return;
  }
};
