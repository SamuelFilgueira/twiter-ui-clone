import { Container, Avatar, Info, FollowButton } from "./styles";

const FollowSugestion = (props) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{props.name}</strong>
          <span>{props.nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSugestion;
