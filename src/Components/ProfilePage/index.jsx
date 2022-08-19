import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Samu S2</h1>

        <h2>@Samuel_17A</h2>

        <p>Front-End developer</p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 14 de dezembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>

          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
