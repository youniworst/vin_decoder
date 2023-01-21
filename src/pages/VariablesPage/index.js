import { useState } from "react";
import $api from "../../axios";
import styles from "./VariablesPage.module.scss";

export const VariablesPage = () => {
  const [variables, setVariables] = useState("");
  (() => {
    $api
      .get("vehicles/getvehiclevariablelist?format=json")
      .then((res) => setVariables(res.data.Results));
  })();
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
