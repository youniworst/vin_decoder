import { useEffect, useState } from "react";
import $api from "../../axios";
import { getVehicleVariableList } from "../../utils";
import styles from "./VariablesPage.module.scss";

export const VariablesPage = () => {
  const [variables, setVariables] = useState("");
  useEffect(() => {
    getVehicleVariableList().then((res) => setVariables(res));
  }, []);
  return (
    <>
      <h1>Variables</h1>
      <ul className={styles.variables_list}>
        {variables &&
          variables.map((item) => (
            <li className={styles.variables_list_item}>
              <p className={styles.variables_list_item_name}>{item.Name}</p>
              <div
                className={styles.variables_list_item_description}
                dangerouslySetInnerHTML={{ __html: item.Description }}
              ></div>
            </li>
          ))}
      </ul>
    </>
  );
};
