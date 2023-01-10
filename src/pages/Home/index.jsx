import { FiPlus } from "react-icons/fi";
import { Container, Content, NewMovie } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { MovieNote } from "../../components/MovieNote";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="title">
          <h1>My movies</h1>
          <NewMovie to="/newmovie">
            <Button title="Add movie" icon={FiPlus} />
          </NewMovie>
        </div>
        <main>
          <div className="notes">
            <MovieNote
              data={{
                title: "Interstellar",
                rating: 2,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum ",
                tags: [
                  { id: "1", name: "Science Fiction" },
                  { id: "2", name: "Drama" },
                ],
              }}
            />
            <MovieNote
              data={{
                title: "Interstellar",
                rating: 2,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum ",
                tags: [
                  { id: "1", name: "Science Fiction" },
                  { id: "2", name: "Drama" },
                ],
              }}
            />
            <MovieNote
              data={{
                title: "Interstellar",
                rating: 2,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum ",
                tags: [
                  { id: "1", name: "Science Fiction" },
                  { id: "2", name: "Drama" },
                ],
              }}
            />
            <MovieNote
              data={{
                title: "Interstellar",
                rating: 2,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum ",
                tags: [
                  { id: "1", name: "Science Fiction" },
                  { id: "2", name: "Drama" },
                ],
              }}
            />
            <MovieNote
              data={{
                title: "Interstellar",
                rating: 3,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum",
                tags: [
                  { id: "1", name: "Science Fiction" },
                  { id: "2", name: "Drama" },
                ],
              }}
            />
          </div>
        </main>
      </Content>
    </Container>
  );
}
