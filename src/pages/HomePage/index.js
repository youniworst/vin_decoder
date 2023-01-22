import { VinForm, VinHistory } from "../../components";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <div className={styles.container}>
        <VinForm className={styles.form} />
        <VinHistory />
      </div>
    </>
  );
};
