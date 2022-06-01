import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: any) {
  return (
    <div className={styles.container}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
