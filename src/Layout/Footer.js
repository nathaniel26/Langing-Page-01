import styles from "../Layout/Footer.module.css";
function Footer() {
  return (
    <div  className={styles.conteudo}>
      <p id={styles.p1}>
        © 2022 Desenvolvido Por:
        <a href="https://nathanielfarias.netlify.app/"> Nathaniel Farias</a>
      </p>
    </div>
  );
}
export default Footer;
