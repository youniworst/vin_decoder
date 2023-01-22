import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../store/loading/loadingActions";
import { decodeVin } from "../../utils";
import styles from "./DecodedVin.module.scss";

export const DecodedVin = () => {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  const vin = useSelector((state) => state.actualDecodedVin.vin);

  const navigate = useNavigate();

  useEffect(() => {
    if (vin) {
      dispatch(setLoading(true));
      decodeVin(vin)
        .then((res) => {
          setData(res);
          const additionalErrorText = res.find(
            (item) => item.Variable === "Additional Error Text"
          ).Value;
          additionalErrorText ? setHasError(true) : setHasError(false);
          console.log(additionalErrorText);
        })
        .finally(() => dispatch(setLoading(false)));
    }
  }, [vin, dispatch]);

  const tableStyle = !hasError
    ? `${styles.table}`
    : `${styles.table} ${styles.error}`;

  const onVariableClick = (e) => {
    navigate(`/variables/${e.target.id}`);
  };

  if (data)
    return (
      <table className={tableStyle}>
        <thead>
          <tr>
            <th className={styles.table_head} colSpan={2}>
              Decode VIN code result - <span>{vin}</span>
              {hasError ? <span style={{ color: "red" }}> (error)</span> : null}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) =>
            item.Value && item.Value !== "Not Applicable" ? (
              <tr key={item.Variable}>
                <td
                  onClick={onVariableClick}
                  id={item.VariableId}
                  className={styles.table_variable}
                >
                  {item.Variable}
                </td>
                <td className={styles.table_value}>{item.Value}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    );
};
