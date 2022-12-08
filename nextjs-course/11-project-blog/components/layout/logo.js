import Image from "next/image";
import styles from "./logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/site/logo.png"
        alt="Forrest McKinney Logo"
        width={70}
        height={35}
      />
    </div>
  );
}

export default Logo;
