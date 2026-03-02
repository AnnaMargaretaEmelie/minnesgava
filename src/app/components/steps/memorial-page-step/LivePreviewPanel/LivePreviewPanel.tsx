import { MemorialPreviewContent } from "../MemorialPreviewContent/MemorialPreviewContent";
import styles from "./LivePreviewPanel.module.scss";

export function LivePreviewPanel() {
  return (
    <aside className={styles.panel}>
      <h2>Din minneshälsning</h2>
      <div className={styles.content}>
        <div className={styles.scaled}>
          <MemorialPreviewContent
            imageSrc="/images/test.jpg"
            imageAlt="Test"
            fullName="Test Person"
            greeting="Vila i frid"
          />
        </div>
      </div>
    </aside>
  );
}
