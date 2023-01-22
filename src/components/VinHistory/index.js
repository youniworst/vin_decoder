import { useSelector } from "react-redux";
import styles from "./VinHistory.module.scss";

export const VinHistory = () => {
  const list = useSelector((state) => state.history.history);
  console.log(list);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last VIN codes</h2>
      <ul className={styles.list}>
        {list.length > 0
          ? list.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </div>
  );
};
