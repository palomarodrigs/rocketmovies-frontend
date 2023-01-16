import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Logout } from "../Logout";

import { Link } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <div>
        <Input placeholder="Search by title" />
      </div>
      <div>
        <Profile>
          <div>
            <Link to="/profile">{user.name}</Link>
            {/* <strong>{user.name}</strong> */}
            <Logout onClick={signOut} title="exit" />
          </div>
          <img to="/profile" src={avatarURL} alt={user.name} />
        </Profile>
      </div>
    </Container>
  );
}
