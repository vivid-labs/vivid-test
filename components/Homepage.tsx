import dashboard_1 from "./dashboard_1.png";
import image_16 from "./image_16.png";
import intro1_1 from "./intro1_1.png";
import suggestions_1 from "./suggestions_1.png";
import { EvLogoGray } from "./EvLogoGray";
import ecoLabel_1 from "./ecoLabel_1.png";
import infiniteGoodsLogo_2 from "./infiniteGoodsLogo_2.png";
import home_1 from "./home_1.png";
import profile_1 from "./profile_1.png";
import nycolorLogo from "./nycolorLogo.png";
import arrow_9 from "./arrow_9.svg";
export const Homepage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden relative w-full h-[3731px] bg-white font-[Montserrat]"
      style={override}
    >
      <div className="flex flex-col items-start gap-[108px] absolute left-0 top-[21.9px]">
        <div className="flex flex-col items-start px-9">
          <div className="flex items-start gap-[14.1px] w-[1365px]">
            <p className="text-black text-[22.5px] font-[Lantinghei_SC] font-normal">
              Work
            </p>
            <p className="text-[rgba(0,_0,_0,_0.25)] text-[22.5px] font-[Lantinghei_SC] font-normal">
              About
            </p>
            <p className="text-black text-[22.5px] font-[Lantinghei_SC] font-normal">
              Resume
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[72px] w-[1365px]">
          <div className="flex flex-col items-start gap-[18px] w-[996px]">
            <p className="text-black text-3xl font-bold">
              Hi, I&apos;m Rachel!
            </p>
            <p className="text-2xl font-normal">
              I&apos;m a UX Designer and senior at Columbia University studying
              computer science.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[72px] relative">
            <div className="w-[998px] h-[420px]">
              <div
                className="absolute [rotate:-270deg] w-[420px] left-0 h-[998px] top-[420px] border-solid border-[rgba(0,_0,_0,_0.15)] border-[1.5px] rounded-[5.4px]"
                style={{
                  transform: "scale(77%, 118%)",
                }}
              />
              <div className="flex items-center gap-[111px] absolute left-[59.56px]">
                <div className="flex flex-col items-start gap-[0.66px]">
                  <p className="text-black text-xl font-normal">ROARREG</p>
                  <p className="w-[325px] text-black text-[32px] font-bold">
                    Streamlining the course registration process
                  </p>
                </div>
                <div className="w-[458px] h-[312px]">
                  <img
                    className="absolute w-[424px] left-[435.6px] h-[302px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[10.93px]"
                    src={dashboard_1.src}
                  />
                  <div>
                    <img
                      className="absolute w-[89px] left-[805.2px] h-[90px] top-[222.47px] object-cover"
                      src={image_16.src}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[998px] h-[420px]">
              <div
                className="absolute [rotate:-270deg] w-[420px] left-[0.06px] h-[998px] top-[912px] border-solid border-[rgba(0,_0,_0,_0.15)] border-[1.5px] rounded-[5.4px]"
                style={{
                  transform: "scale(95%, 95%)",
                }}
              />
              <div className="flex items-center gap-[84px] absolute left-[59.63px]">
                <div className="flex flex-col items-start gap-[0.66px]">
                  <p className="text-black text-xl font-light">EXPERTVOICE</p>
                  <p className="w-[355px] text-black text-[32px] font-bold">
                    Helping consumers confidently make purchase decisions
                  </p>
                </div>
                <div className="flex items-start gap-[7.2px]">
                  <img
                    className="w-[196px] h-[360px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[7.2px]"
                    src={intro1_1.src}
                  />
                  <img
                    className="w-[196px] h-[360px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[7.2px]"
                    src={suggestions_1.src}
                  />
                </div>
              </div>
              <div>
                <div className="absolute w-[87px] left-[865.2px] h-[89px] top-[803.4px] bg-white rounded-[50%]" />
                <EvLogoGray
                  override={{
                    height: "90px",
                    width: "89px",
                    position: "absolute",
                    top: "803.4px",
                    left: "865.2px",
                  }}
                />
              </div>
            </div>
            <div className="w-[998px] h-[420px]">
              <div
                className="absolute [rotate:-270deg] w-[420px] left-0 h-[998px] top-[1404px] border-solid border-[rgba(0,_0,_0,_0.15)] border-[1.5px] rounded-[8.4px]"
                style={{
                  transform: "scale(77%, 118%)",
                }}
              />
              <div className="flex items-center gap-[165.3px] absolute left-[59.56px]">
                <div className="flex flex-col items-start gap-[0.66px]">
                  <p className="text-black text-xl font-normal">
                    INFINITE GOODS
                  </p>
                  <p className="w-[337px] text-black text-[32px] font-bold">
                    Improving a scoring system for product sustainability
                  </p>
                </div>
                <div className="w-[339px] h-[329px]">
                  <img
                    className="absolute w-[339px] left-[501.9px] h-[329px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[10.93px]"
                    src={ecoLabel_1.src}
                  />
                </div>
              </div>
              <div className="absolute w-[90px] left-[853.5px] h-[90px] top-[1285.5px] rounded-full overflow-hidden">
                <div className="bg-[rgb(180,_53,_152)] absolute h-full w-full" />
                <img
                  className="object-cover absolute h-full w-full"
                  src={infiniteGoodsLogo_2.src}
                />
              </div>
            </div>
            <div className="w-[998px] h-[420px]">
              <div
                className="absolute [rotate:-270deg] w-[420px] left-0 h-[998px] top-[1896px] border-solid border-[rgba(0,_0,_0,_0.15)] border-[1.5px] rounded-[8.4px]"
                style={{
                  transform: "scale(77%, 118%)",
                }}
              />
              <div className="flex items-center gap-[165.3px] absolute left-[59.56px]">
                <div className="flex flex-col items-start gap-[0.66px]">
                  <p className="text-black text-xl font-normal">NYCOLOR</p>
                  <p className="w-[337px] text-black text-[32px] font-bold">
                    Gamifying urban exploration in New York City
                  </p>
                </div>
                <div className="flex items-center gap-[7.2px]">
                  <img
                    className="w-[175px] h-[360px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[7.2px]"
                    src={home_1.src}
                  />
                  <img
                    className="w-[175px] h-[360px] object-cover border-solid border-[rgba(0,_0,_0,_0.15)] border-[0.9px] rounded-[7.2px]"
                    src={profile_1.src}
                  />
                </div>
              </div>
              <div className="absolute w-[90px] left-[858.6px] h-[90px] top-[1786.8px] origin-top-left rounded-full overflow-hidden">
                <img
                  className="origin-top-left h-full w-full"
                  style={{
                    transform:
                      "scale(109.75%, 108.29%) translate(-4.22%, -3.56%)",
                  }}
                  src={nycolorLogo.src}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-9 w-[994px]">
            <p className="text-black text-4xl font-bold">Other projects</p>
            <div className="flex flex-col items-start relative">
              <div className="w-[521px] h-[83px]">
                <div className="flex flex-col items-start gap-[0.67px] absolute w-[521px] left-0">
                  <p className="text-black text-xl font-normal">EXPERTVOICE</p>
                  <p className="w-[445px] text-black text-2xl font-bold">
                    Enhancing the Android shopping cart experience
                  </p>
                </div>
                <img
                  className="absolute w-[33px] left-[485.92px] h-0"
                  src={arrow_9.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
