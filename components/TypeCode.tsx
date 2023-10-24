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
const Rectangle_39269 = styled.div`
  position: absolute;
  width: 121px;
  left: calc(50% - 59.97px);
  height: 121px;
  top: calc(50% - 59.97px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
`;
const ConstNumbers_2_4_6_8_10ConstTotalNumbersReduceaccNumGtAccNum_0ConsoleLogTotalTotalFunctionGreetnameConsoleLogHelloNameimportantConstRandomIndexMathFloorMathRandomNumbersLengthConstRandomNumNumbersrandomIndexConsoleLogRandomNumberRandomNumConstIsEvenNumGtNumPc_2_0ConsoleLogIsRandomNumEvenqIsEvenrandomNum = styled.p`
  position: absolute;
  left: 0px;
  top: 0px;
  font-size: 13px;
  font-family: Edu Diatype Semi-Mono;
  font-weight: 400;
  line-height: 1.3em;
`;
const Frame_3465256 = styled.div`
  overflow: hidden;
  position: absolute;
  width: 113px;
  left: 8.51px;
  height: 113px;
  top: 8.06px;
`;
const MobileFileIcons = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 129px;
  height: 129px;
  background-color: rgb(41, 41, 41);
`;
const Script = styled.p`
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
const Text152Kb = styled.p`
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
const Js = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
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
  font-family: Universal Sans Text;
`;


export const TypeCode = ({
  override
}: {
  override?: React.CSSProperties;
}) => {
  

  return <TypeCodeComponent style={override}><Selected /><Container><MobileFileIcons><Rectangle_39269 /><Frame_3465256><ConstNumbers_2_4_6_8_10ConstTotalNumbersReduceaccNumGtAccNum_0ConsoleLogTotalTotalFunctionGreetnameConsoleLogHelloNameimportantConstRandomIndexMathFloorMathRandomNumbersLengthConstRandomNumNumbersrandomIndexConsoleLogRandomNumberRandomNumConstIsEvenNumGtNumPc_2_0ConsoleLogIsRandomNumEvenqIsEvenrandomNum>const numbers = [2, 4, 6, 8, 10];<br />const total = numbers.reduce((acc, num) =&amp;gt; acc + num, 0);<br />console.log(`Total: &#x24;{total}`);<br /><br />function greet(name) {<br />    console.log(`Hello, &#x24;{name}!`);<br />}<br /><br />const randomIndex = Math.floor(Math.random() * numbers.length);<br />const randomNum = numbers[randomIndex];<br />console.log(`Random number: &#x24;{randomNum}`);<br /><br />const isEven = num =&amp;gt; num % 2 === 0;<br />console.log(`Is &#x24;{randomNum} even? &#x24;{isEven(randomNum)}`);<br /></ConstNumbers_2_4_6_8_10ConstTotalNumbersReduceaccNumGtAccNum_0ConsoleLogTotalTotalFunctionGreetnameConsoleLogHelloNameimportantConstRandomIndexMathFloorMathRandomNumbersLengthConstRandomNumNumbersrandomIndexConsoleLogRandomNumberRandomNumConstIsEvenNumGtNumPc_2_0ConsoleLogIsRandomNumEvenqIsEvenrandomNum></Frame_3465256></MobileFileIcons><Desc><DescContainer><TitleAndButton><Script>script</Script><CompactIconButton hover="no" size="small" type="ghost" /></TitleAndButton><Info><Text152Kb>152 KB</Text152Kb><Divider /><Js>JS</Js></Info></DescContainer></Desc></Container></TypeCodeComponent>;
};