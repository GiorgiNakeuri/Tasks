import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger}>
        <div />
        <div />
      </button>

      <div className={styles.content}>
        <h1>Tasks</h1>
        <button>
          <img src="/assets/icons/bell.svg" alt="" />
        </button>
      </div>
    </header>
  );
}
