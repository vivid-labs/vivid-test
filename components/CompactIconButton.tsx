import { QrcodeScan } from "./QrcodeScan";
import styled from "styled-components";
const CompactIconButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 7px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 25px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 9px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 30px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 27px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 7px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 25px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
`;
const CompactIconButtonComponent4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 7px;
  border-radius: 4px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 27px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
`;
const CompactIconButtonComponent6 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  height: 27px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent7 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  height: 27px;
`;
const CompactIconButtonComponent8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 9px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
  height: 30px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
`;
const CompactIconButtonComponent9 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 9px;
  border-radius: 4px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.04);
`;
const CompactIconButtonComponent10 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 9px;
  border-radius: 4px;
  height: 30px;
`;
const CompactIconButtonComponent11 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 7px;
  border-radius: 4px;
  height: 25px;
`;
export const CompactIconButton = ({
  override,
  hover,
  size,
  type,
}: {
  override?: React.CSSProperties;
  hover: string;
  size: string;
  type: string;
}) => {
  if (hover === "no" && size === "small" && type === "ghost") {
    return (
      <CompactIconButtonComponent11 style={override}>
        <QrcodeScan
          override={{
            height: "14px",
            width: "14px",
          }}
        />
      </CompactIconButtonComponent11>
    );
  } else if (hover === "no" && size === "large" && type === "ghost") {
    return (
      <CompactIconButtonComponent10 style={override}>
        <QrcodeScan
          override={{
            height: "20px",
            width: "20px",
          }}
        />
      </CompactIconButtonComponent10>
    );
  } else if (hover === "yes" && size === "large" && type === "ghost") {
    return (
      <CompactIconButtonComponent9 style={override}>
        <QrcodeScan
          override={{
            height: "20px",
            width: "20px",
          }}
        />
      </CompactIconButtonComponent9>
    );
  } else if (hover === "no" && size === "large" && type === "secondary") {
    return (
      <CompactIconButtonComponent8 style={override}>
        <QrcodeScan
          override={{
            height: "20px",
            width: "20px",
          }}
        />
      </CompactIconButtonComponent8>
    );
  } else if (hover === "no" && size === "medium" && type === "ghost") {
    return (
      <CompactIconButtonComponent7 style={override}>
        <QrcodeScan
          override={{
            height: "16px",
            width: "16px",
          }}
        />
      </CompactIconButtonComponent7>
    );
  } else if (hover === "yes" && size === "medium" && type === "ghost") {
    return (
      <CompactIconButtonComponent6 style={override}>
        <QrcodeScan
          override={{
            height: "16px",
            width: "16px",
          }}
        />
      </CompactIconButtonComponent6>
    );
  } else if (hover === "no" && size === "medium" && type === "secondary") {
    return (
      <CompactIconButtonComponent5 style={override}>
        <QrcodeScan
          override={{
            height: "16px",
            width: "16px",
          }}
        />
      </CompactIconButtonComponent5>
    );
  } else if (hover === "yes" && size === "small" && type === "ghost") {
    return (
      <CompactIconButtonComponent4 style={override}>
        <QrcodeScan
          override={{
            height: "14px",
            width: "14px",
          }}
        />
      </CompactIconButtonComponent4>
    );
  } else if (hover === "no" && size === "small" && type === "secondary") {
    return (
      <CompactIconButtonComponent3 style={override}>
        <QrcodeScan
          override={{
            height: "14px",
            width: "14px",
          }}
        />
      </CompactIconButtonComponent3>
    );
  } else if (hover === "yes" && size === "medium" && type === "secondary") {
    return (
      <CompactIconButtonComponent2 style={override}>
        <QrcodeScan
          override={{
            height: "16px",
            width: "16px",
          }}
        />
      </CompactIconButtonComponent2>
    );
  } else if (hover === "yes" && size === "large" && type === "secondary") {
    return (
      <CompactIconButtonComponent1 style={override}>
        <QrcodeScan
          override={{
            height: "20px",
            width: "20px",
          }}
        />
      </CompactIconButtonComponent1>
    );
  } else if (hover === "yes" && size === "small" && type === "secondary") {
    return (
      <CompactIconButtonComponent style={override}>
        <QrcodeScan
          override={{
            height: "14px",
            width: "14px",
          }}
        />
      </CompactIconButtonComponent>
    );
  } else {
    return null;
  }
};
