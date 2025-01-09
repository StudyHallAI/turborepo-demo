import { Card } from "@repo/ui/card";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <div className={styles.circle1} />
              <div className={styles.circle2} />
            </div>
          </div>
          <h1 className={styles.title}>
            Welcome to our <span className={styles.titleGradient}>Turborepo</span> Project
          </h1>
          <p className={styles.subtitle}>Preview Deployment Demo</p>
        </div>
      </div>

      <div className={styles.grid}>
        <Card
          title="Instant Preview"
          description="This change was deployed automatically when we pushed to a feature branch."
        />
        <Card
          title="Turborepo"
          description="High-performance build system for JavaScript and TypeScript codebases."
        />
        <Card
          title="Vercel"
          description="Deploy instantly with automatic preview deployments."
        />
      </div>
    </main>
  );
}
