import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>

        <h2>Create your account</h2>

        <Input placeholder="Name" type="text" icon={FiUser} />

        <Input placeholder="Mail" type="text" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Create" />

        <Link to="/">Back to login</Link>
      </Form>
      <Background />
    </Container>
  );
}
