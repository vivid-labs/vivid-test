import table from "./table.svg";
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
const Table = styled.img`
  position: absolute;
  width: 24px;
  left: calc(50% - 12px);
  height: 24px;
  top: calc(50% - 12px);
`;
const MobileFileIcons = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 129px;
  height: 129px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgb(250, 250, 250);
`;
const Finances = styled.p`
  flex: 1 1 0%;
  min-width: 0px;
  color: rgb(0, 0, 0);
  font-size: 13px;
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
const Text123Kb = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
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
const TableText = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;
const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: fit-content;
  height: fit-content;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 129px;
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
const TypeGenericComponent = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 184px;
  font-family: Universal Sans Text;
`;
export const TypeGeneric = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <TypeGenericComponent style={override}>
      <Selected />
      <Container>
        <MobileFileIcons>
          <Table src={table.src} />
        </MobileFileIcons>
        <Desc>
          <DescContainer>
            <TitleAndButton>
              <Finances>Finances</Finances>
              <CompactIconButton hover="no" size="small" type="ghost" />
            </TitleAndButton>
            <Info>
              <InfoDiv>
                <Text123Kb>123 KB</Text123Kb>
                <Divider />
                <TableText>TABLE</TableText>
              </InfoDiv>
            </Info>
          </DescContainer>
        </Desc>
      </Container>
    </TypeGenericComponent>
  );
};
