import styles from "./Footer.module.css";
import MainContainer from "../../Layout/MainContainer/MainContainer";

const Footer = () => {
  return (
    <div className={styles['footer-outer']}>
        <MainContainer>
            <div className={styles['footer-inner']}>
                <div>
                    <div className={styles['site-title']}>FUN Developers Hub</div>
                    <div className={styles['site-subtitle']}>公立はこだて未来大学 技術コミュニティ総合プラットフォーム</div>
                </div>
                <div className={styles['page-links']}>
                    <div className={styles['page-link']}>Events - イベント一覧</div>
                    <div className={styles['page-link']}>Communities - コミュニティ一覧</div>
                </div>
                <div className={styles['information-links']}>
                    <div className={styles['information-link']}>このページについて</div>
                    <div className={styles['information-link']}>運用マニュアル</div>
                    <div className={styles['information-link']}>開発について</div>
                    <div className={styles['information-link']}>利用規約</div>
                </div>
            </div>
        </MainContainer>
    </div>
  );
};

export default Footer;
