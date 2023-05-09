import "./StatusIndicator.module.css";

export const StatusIndicator = ({ status }: { status: string }) => {
  const status_0 = {
    Implemented: "20px",
    New: "85px",
    Local: "150px",
  }[status];

  return (
    <div
      style={{
        left: status_0,
      }}
      className="status-indicator-0"
    >
      <div className="status-indicator-1">
        <div className="status-indicator-2" />
      </div>
    </div>
  );
};
