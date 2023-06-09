import { ChartPieComponent } from "./ChartPieComponent";
import { DocumentReportComponent } from "./DocumentReportComponent";
import { ChevronDownComponent } from "./ChevronDownComponent";
import { ShoppingBagComponent } from "./ShoppingBagComponent";
import { ChevronUpComponent } from "./ChevronUpComponent";
import { InboxInComponent } from "./InboxInComponent";
import { Badge } from "./Badge";
import { LockClosedComponent } from "./LockClosedComponent";
import { ClipboardListComponent } from "./ClipboardListComponent";
import { CollectionComponent } from "./CollectionComponent";
import { SupportComponent } from "./SupportComponent";
import { Adjustments } from "./Adjustments";
import { GlobeComponent } from "./GlobeComponent";
import { Cog } from "./Cog";

export const Sidebar = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row justify-start items-start relative w-[250px] h-[1691px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
    >
      <div className="flex flex-col justify-start items-start gap-24 relative h-[1691px] flex-shrink-0 flex-1 [0]">
        <div className="flex flex-col justify-start items-start gap-[22px] pl-12 pr-12 pt-16 relative w-[249px] flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <ChartPieComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(28,_100,_242)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Overview
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <DocumentReportComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Pages
              </p>
            </div>
            <div className="flex flex-row justify-end items-center relative flex-shrink-0">
              <ChevronDownComponent
                override={{
                  height: "22px",
                  width: "22px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[6px] relative w-full flex-shrink-0 bg-[]">
            <div className="flex flex-row justify-start items-center pl-8 pr-8 pt-4 pb-4 rounded-[12px] relative w-full flex-shrink-0 bg-[rgb(243,_244,_246)]">
              <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
                <ShoppingBagComponent
                  override={{
                    height: "24px",
                    width: "24px",
                  }}
                />
                <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                  Sales
                </p>
              </div>
              <ChevronUpComponent
                override={{
                  height: "22px",
                  width: "22px",
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-[6px] pl-48 relative w-[226px] flex-shrink-0">
              <div className="flex flex-col justify-start items-start gap-[10px] pt-[9px] pb-[9px] relative w-full flex-shrink-0">
                <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                  Product List
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-[10px] pt-[10px] pb-[10px] relative w-full flex-shrink-0">
                <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                  Billing
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-[10px] pt-[10px] pb-[10px] relative w-full flex-shrink-0">
                <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                  Invoice
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <InboxInComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Messages
              </p>
            </div>
            <div className="flex flex-row justify-end items-center relative flex-shrink-0">
              <Badge
                type="Circle"
                size="Small"
                theme="Red"
                icon="False"
                override={{
                  backgroundColor: "rgb(251, 213, 213)",
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <LockClosedComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Authentication
              </p>
            </div>
            <div className="flex flex-row justify-end items-center relative flex-shrink-0">
              <ChevronDownComponent
                override={{
                  height: "22px",
                  width: "22px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[1px] flex-shrink-0 border-[0rem] bg-[rgb(229,_231,_235)]" />
        <div className="flex flex-col justify-start items-start gap-[22px] pl-12 pr-12 relative w-[250px] flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <ClipboardListComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Docs
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <CollectionComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Components
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center pl-8 pr-8 relative w-full flex-shrink-0">
            <div className="flex flex-row justify-start items-start gap-16 relative flex-shrink-0 flex-1 [0]">
              <SupportComponent
                override={{
                  height: "24px",
                  width: "24px",
                }}
              />
              <p className="whitespace-nowrap flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-medium leading-[1.5em]">
                Help
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-end gap-[22px] pb-16 relative w-[250px] flex-shrink-0 flex-1 [0]">
          <Adjustments
            override={{
              height: "24px",
              width: "24px",
            }}
          />
          <GlobeComponent
            override={{
              height: "24px",
              width: "24px",
            }}
          />
          <Cog
            override={{
              height: "24px",
              width: "24px",
            }}
          />
        </div>
      </div>
      <div className="w-px h-full flex-shrink-0 bg-[rgb(229,_231,_235)]" />
    </div>
  );
};
