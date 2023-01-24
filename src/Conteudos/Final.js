import styles from "../Conteudos/Final.module.css";

function Final() {
  return (
    <div className={styles.conteudo}>
      <h1>
        Veja tudo o que você vai <span>aprender!</span>
      </h1>

      <div className={styles.containerUm}>
        <div className={styles.caixa}>
          <h3>Modulo 01</h3>
          <p>Pronomes pessoais</p>
          <p>Frases interrogativas</p>
          <p>Adjetivos comuns e demonstrativos</p>
          <p>Verbos auxiliares e de ação</p>
          <p>Vocabulário básico de palavras</p>
          <p>Verbo “to be”</p>
          <p>Modo imperativo</p>
          <p>Preposições de tempo e lugar</p>
          <p>Como estruturar perguntas</p>
          <p>Possessivos</p>
          <p>Quantificadores</p>
          <p>There to be</p>
          <p>Expressões de tempo</p>
          <p>Verbos modais</p>
        </div>

        <div className={styles.caixa}>
          <h3>Modulo 02</h3>
          <p>Presente simple</p>
          <p>Presente contínuo</p>
          <p>Passado simples</p>
          <p>Passado contínuo</p>
          <p>Futuro simples</p>
          <p>Advérbios</p>
          <p>Comparativoss</p>
          <p>Superlativos</p>
          <p>Futuro contínuo</p>
          <p>Condicionais</p>
          <p>Passado contínuo e perfeito</p>
          <p>Presente perfeito contínuo</p>
          <p>Voz passiva</p>
          <p>Previsões</p>
        </div>

        <div className={styles.caixa}>
          <h3>Modulo 03</h3>
          <p>Pronomes relativos</p>
          <p>Desejos</p>
          <p>Condicionais mistas</p>
          <p>Tempos verbais de narrativa</p>
          <p>Futuro contínuo</p>
          <p>Phrasal verbs</p>
          <p>Vocabulário mais técnico</p>
        </div>
      </div>
      <h2>E muito, muito mais!</h2>
      <p>
        Você terá acesso a um curso completo, 100% online e com aulas práticas
        em <br></br>vídeo com tudo que precisa para se tornar um fluente em inglês.
      </p>
    </div>
  );
}

export default Final;
