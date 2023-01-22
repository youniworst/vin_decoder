import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { setLoading } from "../../store/loading/loadingActions";
import { getVehicleVariableList } from "../../utils";
import styles from "./VariablesPage.module.scss";

export const VariablesPage = () => {
  const [variables, setVariables] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    getVehicleVariableList()
      .then((res) => setVariables(res))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch]);

  return (
    <>
      {loading ? <Loader /> : null}

      <h1>Variables</h1>

      <ul className={styles.variables_list}>
        {variables
          ? variables.map((item) => (
              <li key={item.Name} className={styles.variables_list_item}>
                <p className={styles.variables_list_item_name}>{item.Name}</p>
                <div
                  className={styles.variables_list_item_description}
                  dangerouslySetInnerHTML={{ __html: item.Description }}
                ></div>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};
