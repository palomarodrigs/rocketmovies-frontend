import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Logout } from "../Logout";

export function Header() {
  return (
    <Container>
      <a href="/">
        <h1>RocketMovies</h1>
      </a>
      <div>
        <Input placeholder="Search by title" />
      </div>
      <div>
        <Profile>
          <div>
            <strong>Paloma Rodrigues</strong>

            <Logout title="exit" />
          </div>
          <img src="https://github.com/palomarodrigs.png" alt="User image" />
        </Profile>
      </div>
    </Container>
  );
}
