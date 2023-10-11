import { OrgButton } from "./OrgButton";
import { SidebarTab } from "./SidebarTab";
import { VectorComponent } from "./VectorComponent";
import { VectorComponent1 } from "./VectorComponent1";
import { VectorComponent2 } from "./VectorComponent2";
import { VectorComponent3 } from "./VectorComponent3";
import { Img } from "./Img";
import { ImgComponent } from "./ImgComponent";
import { ImgComponent1 } from "./ImgComponent1";
import { ImgComponent2 } from "./ImgComponent2";
import loadingIcon from "./loadingIcon.svg";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 6px;
  width: 239px;
  height: 48px;
  border-style: solid;
  border-color: rgb(199, 199, 199);
  border-bottom-width: 1px;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  height: fit-content;
  padding: 6px;
  width: 100%;
`;

const SharedToEveryone = styled.p`
  color: rgb(111, 111, 111);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02px;
  line-height: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 6px 8px;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;

const SharedToEveryoneText = styled.p`
  color: rgb(111, 111, 111);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02px;
  line-height: 16px;
`;

const TextWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 6px 8px;
  width: 100%;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;

const Spreadsheets = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 6px;
  width: 239px;
  flex: 1 1 0%;
  min-height: 0px;
`;

const ImportAboutToStart = styled.p`
  color: rgb(23, 23, 23);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.03px;
  line-height: 20px;
`;

const LoadingIcon = styled.img`
  rotate: -24deg;
  width: 13px;
  height: 13px;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  height: fit-content;
  padding: 13px 12px 12px;
  position: relative;
  width: 239px;
  border-style: solid;
  border-color: rgb(199, 199, 199);
  border-top-width: 1px;
`;

const SidebarComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 902px;
  border-style: solid;
  border-color: rgb(199, 199, 199);
  border-right-width: 1px;
  background-color: rgb(255, 255, 255);
  font-family: Inter;
`;

export const Sidebar = ({ override }: { override?: React.CSSProperties }) => {
  const sidebarTabProps = [
    {
      status: "Unselected",
      text: "Search",
      icon: <VectorComponent />,
      override: {
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      status: "Unselected",
      text: "Notifications",
      icon: <VectorComponent1 />,
      override: {
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      status: "Unselected",
      text: "Messages",
      icon: <VectorComponent2 />,
      override: {
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      status: "Unselected",
      text: "Settings & members",
      icon: <VectorComponent3 />,
      override: {
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
  ];
  return (
    <SidebarComponent style={override}>
      <Header>
        <OrgButton state="Default" companyName="Vivid Labs" logoLetter="V" />
      </Header>
      <UserActions>
        {sidebarTabProps.map((props, i) => (
          <SidebarTab {...props} key={i} />
        ))}
      </UserActions>
      <Spreadsheets>
        <VividId />
        <SectionDiv />
      </Spreadsheets>
      <Alert>
        <ImportAboutToStart>Import about to start</ImportAboutToStart>
        <LoadingIcon src={loadingIcon.src} />
      </Alert>
    </SidebarComponent>
  );
};

const VividId = () => (
  <Section>
    <TextWrapper>
      <SharedToEveryone>Shared to everyone</SharedToEveryone>
    </TextWrapper>
    <SidebarTab
      status="Selected"
      text="Lead hunting"
      icon={<Img />}
      override={{
        height: "28px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    />
    <SidebarTab
      status="Unselected"
      text="Prospects pipeline"
      icon={<ImgComponent />}
      override={{
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    />
  </Section>
);

const SectionDiv = () => (
  <SectionDiv>
    <TextWrapperDiv>
      <SharedToEveryoneText>Private</SharedToEveryoneText>
    </TextWrapperDiv>
    <SidebarTab
      status="Unselected"
      text="Lead hunting"
      icon={<ImgComponent1 />}
      override={{
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    />
    <SidebarTab
      status="Unselected"
      text="Prospects pipeline"
      icon={<ImgComponent2 />}
      override={{
        width: "100%",
        height: "28px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    />
  </SectionDiv>
);
