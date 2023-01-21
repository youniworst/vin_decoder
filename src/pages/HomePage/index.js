import { VinForm } from "../../components";
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <VinForm className={styles.form}/>
    </>
  );
};
