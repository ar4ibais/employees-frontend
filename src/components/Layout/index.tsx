import { Layout as AntLayout } from "antd";
import styles from "./index.module.css";
import Header from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
