import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decodeVin } from "../../utils";
import styles from "./DecodedVin.module.scss";

export const DecodedVin = () => {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const vin = useSelector((state) => state.actualDecodedVin.vin);
  useEffect(() => {
    vin &&
      decodeVin(vin).then((res) => {
        setData(res);
        const additionalErrorText = res.find(
          (item) => item.Variable === "Additional Error Text"
        ).Value;
        additionalErrorText ? setHasError(true) : setHasError(false);
        console.log(additionalErrorText);
      });
  }, [vin]);

  const tableStyle = !hasError
    ? `${styles.table}`
    : `${styles.table} ${styles.error}`;
  if (data)
    return (
      <table className={tableStyle}>
        <thead>
          <tr>
            <th className={styles.table_head} colSpan={2}>
              Decode VIN code result
              {hasError ? <span style={{ color: "red" }}> (error)</span> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            item.Value && item.Value !== "Not Applicable" ? (
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
