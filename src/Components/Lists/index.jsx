import { Container, Item, Title } from "./styles";
import FollowSugestion from "../FollowSuggestion";

const Props = {
  title: "Talvez você curta",
  elements: [
    <FollowSugestion name="Luiz Batanero" nickname="@luizbatanero" />,
    <FollowSugestion name="Luke Morales" nickname="@lukemorales" />,
    <FollowSugestion name="Camila Magalhães" nickname="@camilaamgl" />,
  ],
};

const Lists = () => {
  return (
    <Container>
      <Item>
        <Title>{Props.title}</Title>
      </Item>

      {Props.elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default Lists;
