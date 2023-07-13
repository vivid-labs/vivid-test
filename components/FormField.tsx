import img_2585_1 from "./img_2585_1.png";
export const FormField = ({
  override,
  type,
  field,
  placeholder,
}: {
  override?: any;
  type: string;
  field: string;
  placeholder: string;
}) => {
  switch (type) {
    case "TextInput":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            height: "fit-content",
            position: "relative",
            width: "379px",
            ...override,
          }}
          figma-id="255:236"
        >
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "20px",
              flexShrink: 0,
              color: "rgb(0, 0, 0)",
              fontSize: "16px",
              fontFamily: "Avenir",
              fontWeight: 500,
              letterSpacing: "0.01px",
              lineHeight: "23px",
            }}
            figma-id="255:237"
          >
            {field}
          </p>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "12px",
              height: "fit-content",
              padding: "8px",
              borderRadius: "5px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
              borderStyle: "solid",
              borderColor: "rgb(217, 217, 217)",
              borderWidth: "1px",
              backgroundColor: "rgb(245, 241, 241)",
            }}
            figma-id="255:238"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "16px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="255:239"
            >
              {placeholder}
            </p>
          </div>
        </div>
      );
    case "Select":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            height: "fit-content",
            position: "relative",
            width: "379px",
            ...override,
          }}
          figma-id="255:240"
        >
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "20px",
              flexShrink: 0,
              color: "rgb(0, 0, 0)",
              fontSize: "16px",
              fontFamily: "Avenir",
              fontWeight: 500,
              letterSpacing: "0.01px",
              lineHeight: "23px",
            }}
            figma-id="255:241"
          >
            {field}
          </p>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              height: "fit-content",
              padding: "8px",
              borderRadius: "5px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
              borderStyle: "solid",
              borderColor: "rgb(217, 217, 217)",
              borderWidth: "1px",
              backgroundColor: "rgb(245, 241, 241)",
            }}
            figma-id="255:242"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "16px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="255:243"
            >
              {placeholder}
            </p>
            <img
              style={{
                rotate: "90.0deg",
                width: "20px",
                height: "20.29px",
                flexShrink: 0,
                objectFit: "cover",
                opacity: 0.30000001192092896,
              }}
              src={img_2585_1.src}
              figma-id="255:244"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
