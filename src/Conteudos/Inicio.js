import styles from "../Conteudos/Inicio.module.css";
import imagem01 from "../IMGS/img01.png";
import {
  BsFillCartCheckFill,
  BsFillTrophyFill,
  BsShieldLockFill,
} from "react-icons/bs";

function Inicio() {
  return (
    <div className={styles.conteudo}>
      <div className={styles.containerUm}>
        <h1>
          Rumo a <span>fluência</span> em inglês
        </h1>
        <h3>
          Com o melhor e mais <span>Completo</span> Curso de Inglês do mercado.{" "}
          <br></br>
          <span>Aprenda</span> inglês de qualquer lugar.
        </h3>
      </div>

      <div className={styles.containerDois}>
        <img src={imagem01} alt="Curso de inglês"></img>
        <div className={styles.descContDois}>
          <p>
            Curso <span>completo</span> de inglês com aulas do Básico ao{" "}
            <span>avançado</span>.
          </p>
          <p>
            Com mais de <span>200</span> aulas.
          </p>
          <p>
            As aulas gravadas para assistir <span>onde e quando puder</span>.
          </p>
          <p>
            Filmes, séries e conteúdos <span>extras</span>
          </p>
          <p>
            Acompanha material em <span>PDF</span>
          </p>
        </div>
      </div>

      <div className={styles.containerTres}>
        <h2>APROVEITE, COMECE O CURSO AGORA!</h2>
        <h2>
          <span>OFERTA POR TEMPO LIMITADO</span>
        </h2>
        <h3>De R$ 250,00</h3>
        <h4>Por apenas</h4>
        <h1>10 x R$ 18,00</h1>
        <h4>ou R$ 150,00 á vista</h4>
        <button>SIM, QUERO COMEÇAR AGORA MESMO!</button>
      </div>

      <div className={styles.containerQuatro}>
        <div>
          <BsFillCartCheckFill />
          <p>Checkout Seguro</p>
        </div>

        <div>
          <BsFillTrophyFill />
          <p>Satisfação Garantida</p>
        </div>

        <div>
          <BsShieldLockFill />
          <p>Privacidade Protegida</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
