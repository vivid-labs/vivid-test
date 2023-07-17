import { Tab } from "./Tab";
export const Tabs = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  const tabProps = [
    {
      state: "active",
      text: "Today",
      number: "302",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Week",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Month",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "All Time",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
  ];
  const tabProps1 = [
    {
      state: "inactive",
      text: "Today",
      number: "302",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "active",
      text: "This Week",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Month",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "All Time",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
  ];
  const tabProps2 = [
    {
      state: "inactive",
      text: "Today",
      number: "302",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Week",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "active",
      text: "This Month",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "All Time",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
  ];
  const tabProps3 = [
    {
      state: "inactive",
      text: "Today",
      number: "302",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Week",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "inactive",
      text: "This Month",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
    {
      state: "active",
      text: "All Time",
      number: "67",
      override: {
        height: "60px",
        width: "fit-content",
      },
    },
  ];
  switch (property_1) {
    case "Tab 1":
      return (
        <div
          style={override}
          className="flex items-start relative"
          figma-id="1979:9948"
        >
          {tabProps.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    case "Tab 2":
      return (
        <div
          style={override}
          className="flex items-start relative"
          figma-id="1979:9954"
        >
          {tabProps1.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    case "Tab 3":
      return (
        <div
          style={override}
          className="flex items-start relative"
          figma-id="1979:9977"
        >
          {tabProps2.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    case "Tab 4":
      return (
        <div
          style={override}
          className="flex items-start relative"
          figma-id="1979:10000"
        >
          {tabProps3.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    default:
      return null;
  }
};
