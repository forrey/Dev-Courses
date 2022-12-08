import styles from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/forrest.jpeg"
          alt="Photo of Forrest"
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I'm Forrest</h1>
      <p>Welcome to my blog.</p>
    </section>
  );
}

export default Hero;
