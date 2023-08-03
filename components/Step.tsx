import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: any;
  status: string;
  icon: any;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div style={override}>
          <div>
            <div />
            {icon}
          </div>
          <div>
            <p>{task}</p>
            <p>{time}</p>
          </div>
          <img src={img_2585_1.src} />
        </div>
      );
    case "Complete":
      return (
        <div style={override}>
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div>
            <p>{task}</p>
            <p>{time}</p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div style={override}>
          <div>
            <div />
            {icon}
          </div>
          <div>
            <div>
              <p>{task}</p>
              <div>
                <p>Coming Soon!</p>
              </div>
            </div>
            <p>{time}</p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div style={override}>
          <div>
            <div />
            {icon}
          </div>
          <div>
            <div>
              <p>{task}</p>
              <div>
                <p>Up Next!</p>
              </div>
            </div>
            <p>{time}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
