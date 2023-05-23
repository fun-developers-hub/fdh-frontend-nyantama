import styles from "./MainContainer.module.css";

type MainContainerProps = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: MainContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentLayout;
