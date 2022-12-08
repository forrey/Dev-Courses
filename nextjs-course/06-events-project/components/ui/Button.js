import Link from "next/link";
import styles from "./Button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        <span>{props.children}</span>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
}

export default Button;
