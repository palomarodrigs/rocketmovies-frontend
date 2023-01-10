import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Form>
        <div>
          <ButtonText title="Back" icon={FiArrowLeft} />

          <h1>New movie</h1>
        </div>

        <main>
          <div>
            <Input placeholder="Title" style={{ marginRight: 40 }} />
            <Input placeholder="Your note (from 0 to 5)" />
          </div>

          <TextArea placeholder="Observation" />

          <Section title="Bookmarks">
            <div className="tags">
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />
              <NoteItem value="test" />

              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>

          <div className="btns">
            <Button title="Delete movie" />
            <Button title="Save changes" />
          </div>
        </main>
      </Form>
    </Container>
  );
}
