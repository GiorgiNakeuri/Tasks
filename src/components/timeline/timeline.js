import styles from "./timeline.module.css";

export function Timeline() {
  return (
    <div className={styles.timeline}>
      <button>
        <p>TODAY</p>
      </button>
      <button>
        <p>TOMORROW</p>
      </button>
      <button>
        <p>THIS WEEK</p>
      </button>
    </div>
  );
}
