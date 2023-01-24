import styles from "../Conteudos/Meio.module.css";
import foto01 from "../IMGS/professor.png";

function Meio() {
  return (
    <div className={styles.conteudo}>
      <div className={styles.containerUm}>
        <h1>Prof. Rui</h1>
        <p>
          Professor Rui é o professor de inglês mais <span>popular</span> da internet. Nativo
          do Canadá, leciona no Brasil <span>há mais de 10 anos</span>, desenvolveu uma
          metodologia <span>unica e revolucionária</span> que garante o aprendizado
          <span> definitivo</span> do inglês. Foi professor de línguas estrangeiras em
          <span> diversas</span> Universidades pelo Brasil. Hoje, possui em suas redes sociais
          mais de <span>5 milhões</span> de seguidores e oferece a melhor <span>plataforma e metodologia</span> de
          ensino de inglês do mercado.
        </p>

      </div>

      <img src={foto01} alt="Professor Rui"></img>
    </div>
  );
}

export default Meio;
