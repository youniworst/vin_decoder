import { useDispatch, useSelector } from "react-redux";
import { setVin } from "../../store/actualDecodedVin/actualDecodedVinActions";
import styles from "./VinHistory.module.scss";

export const VinHistory = () => {
  const list = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  console.log(list);
  const onClick = (e) => {
    dispatch(setVin(e.target.outerText));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last VIN codes</h2>
      <ul className={styles.list}>
        {list.length > 0
          ? list.map((item, index) => (
              <li onClick={onClick} key={index}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
