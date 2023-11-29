import { Card } from "./Card.style";

const CardDef = (props: { mode: string }) => (
  <Card {...props}>
    <Card.Header>
      <Card.Title>Trends</Card.Title>
      <Card.Sun />
    </Card.Header>
    <Card.Body>
      <Card.BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun...
      </Card.BodyText>
    </Card.Body>
    <Card.Footer>
      <Card.Theme>Theme</Card.Theme>
      <Card.Button>
        <Card.ButtonText>Click me!</Card.ButtonText>
      </Card.Button>
    </Card.Footer>
  </Card>
);

export { CardDef as Card };
