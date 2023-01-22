import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decodeVin } from "../../utils";
import styles from "./DecodedVin.module.scss";

export const DecodedVin = () => {
  const [data, setData] = useState(null);
  const vin = useSelector((state) => state.actualDecodedVin.vin);
  useEffect(() => {
    vin && decodeVin(vin).then((res) => setData(res));
  }, [vin]);

  if (data)
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_head} colSpan={2}>
              Decode VIN code result
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            item.Value ? (
              <tr key={item.Variable}>
                <td className={styles.table_variable}>{item.Variable}</td>
                <td className={styles.table_value}>{item.Value}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    );
};
