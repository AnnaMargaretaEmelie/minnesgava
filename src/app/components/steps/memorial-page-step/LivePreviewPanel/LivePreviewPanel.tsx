import { MemorialPreviewContent } from "../MemorialPreviewContent/MemorialPreviewContent";
import styles from "./LivePreviewPanel.module.scss";

export function LivePreviewPanel() {
  return (
    <aside className={styles.panel}>
      <h2>Din minneshälsning</h2>
      <div className={styles.frame}>
        <div className={styles.scaled}>
          <MemorialPreviewContent
            imageSrc="/images/dove.png"
            imageAlt="Test"
            fullName="Test Person"
            greeting="Vila i frid en längre text, med flera rader kanske, så vi får se om allt försvinner eller om saker skrivs över kanske? "
          />
        </div>
      </div>
    </aside>
  );
}
