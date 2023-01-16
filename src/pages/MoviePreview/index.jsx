import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <Link to="/">
            <FiArrowLeft size={20} />
            Return
          </Link>
        </div>

        <div>
          <h1>Interstellar </h1>
          <Stars rating={1} />
        </div>

        <div>
          <img src="https://github.com/palomarodrigs.png" alt="User image" />
          By Paloma Rodrigues
          <FiClock /> 01/05/23 ace 08:00
        </div>

        <div>
          <Tag title="test" />
          <Tag title="test" />
          <Tag title="test" />
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat esse
          magni rerum, cupiditate odio hic. Praesentium exercitationem sequi
          eligendi officia doloribus modi dolorem qui beatae cumque, molestiae
          deleniti dicta pariatur! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit consectetur, commodi corrupti cum laborum
          veniam ex, similique impedit aliquid sint fugiat mollitia dolor ipsum
          quidem, quod odit nesciunt atque perspiciatis?
        </p>
      </main>
    </Container>
  );
}
