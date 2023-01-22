import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DecodedVin, Loader, VinForm, VinHistory } from "../../components";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <>
      {loading ? <Loader /> : null}

      <h1>Home</h1>
      <Link className={styles.link} to={"/variables"}>Variables</Link>
      <div className={styles.container}>
        <VinForm className={styles.form} />
        <VinHistory />
      </div>
      <DecodedVin />
    </>
  );
};
