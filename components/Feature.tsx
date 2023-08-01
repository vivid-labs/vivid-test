import frame from "./frame.svg";
const Frame = styled.img`
  position: absolute;
  width: 16px;
  left: calc(50% - 8px);
  height: 16px;
  top: 0px;
`;
const Svg = styled.div`
  overflow: hidden;
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
const WorkFaster = styled.p`
  width: fit-content;
  white-space: nowrap;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(18, 18, 18);
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.06px;
  line-height: 19px;
`;
const Term = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  height: fit-content;
  width: fit-content;
  padding: 0px 103.53px 2px 0px;
  position: relative;
  flex-shrink: 0;
`;
const GenerateSummariesActionItemsAndInsights = styled.p`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(18, 18, 18);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 19px;
`;
const Details = styled.div`
  display: flex;
  align-items: flex-start;
  height: fit-content;
  padding: 0px 35.53px 0px 0px;
  position: relative;
  width: 100%;
  flex-shrink: 0;
`;
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: fit-content;
  padding: 0px 0px 1px;
  position: relative;
`;

export const Feature = ({
  override,
  heading,
  description,
}: {
  override?: any;
  heading: string;
  description: string;
}) => {
  return (
    <Feature style={override}>
      <Term>
        <Svg>
          <Frame src={frame.src} />
        </Svg>
        <WorkFaster>{heading}</WorkFaster>
      </Term>
      <Details>
        <GenerateSummariesActionItemsAndInsights>
          {description}
        </GenerateSummariesActionItemsAndInsights>
      </Details>
    </Feature>
  );
};
