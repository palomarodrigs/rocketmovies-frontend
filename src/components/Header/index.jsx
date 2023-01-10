import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Logout } from "../Logout";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <div>
        <Input placeholder="Search by title" />
      </div>
      <div>
        <Profile to="/profile">
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
