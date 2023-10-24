import { MobileFileIcons } from "./MobileFileIcons";
import { CompactIconButton } from "./CompactIconButton";
import styled from "styled-components";
const Selected = styled.div`
  position: absolute;
  width: 141px;
  left: 0px;
  height: 184px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.08);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  border-radius: 8px;
`;
const Script = styled.p`
  flex: 1 1 0%;
  min-width: 0px;
  color: rgb(0, 0, 0);
  font-size: 13px;
  font-family: Universal Sans Text;
  font-weight: 300;
  line-height: 1.3em;
`;
const TitleAndButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: fit-content;
  width: 100%;
`;
const Text152Kb = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
  font-family: Universal Sans Text;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;
const Divider = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.34);
  border-radius: 50%;
`;
const Js = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
  font-family: Universal Sans Text;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: fit-content;
  height: fit-content;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 129px;
  flex: 1 1 0%;
  min-height: 0px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  height: fit-content;
  padding: 6px;
  position: absolute;
  width: 141px;
  left: 0px;
  top: 0px;
`;
const TypeCodeComponent = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 184px;
  font-family: Universal Sans Text Trial;
`;
export const TypeCode = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <TypeCodeComponent style={override}>
      <Selected />
      <Container>
        <MobileFileIcons
          size="Large"
          type="Code"
          override={{
            borderRadius: "4px",
            height: "129px",
            width: "129px",
          }}
        />
        <Desc>
          <DescContainer>
            <TitleAndButton>
              <Script>script</Script>
              <CompactIconButton hover="no" size="small" type="ghost" />
            </TitleAndButton>
            <Info>
              <Text152Kb>152 KB</Text152Kb>
              <Divider />
              <Js>JS</Js>
            </Info>
          </DescContainer>
        </Desc>
      </Container>
    </TypeCodeComponent>
  );
};
