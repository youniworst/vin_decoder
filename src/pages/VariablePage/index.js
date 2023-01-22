import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { setLoading } from "../../store/loading/loadingActions";
import { getVariableValuesList, getVehicleVariableList } from "../../utils";
import styles from "./VariablePage.module.scss";

export const VariablePage = () => {
  const { variableId } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  const [variableData, setVariableData] = useState();
  const [variableValues, setVariableValues] = useState([]);

  useEffect(() => {
    dispatch(setLoading(true));
    const p1 = getVehicleVariableList()
      .then((res) => res.find((item) => item.ID === +variableId))
      .then((res) => setVariableData(res));
    const p2 = getVariableValuesList(variableId).then((res) =>
      setVariableValues(res)
    );

    Promise.all([p1, p2]).finally(() => dispatch(setLoading(false)));
  }, [variableId, dispatch]);
  return (
    <>
      {loading ? <Loader /> : null}

      <div className={styles.container}>
        {variableData ? (
          <>
            <h1>{variableData.Name}</h1>
            <h3>GroupName : {variableData.GroupName}</h3>

            <div
              dangerouslySetInnerHTML={{ __html: variableData.Description }}
            ></div>
          </>
        ) : null}
        {variableValues.length > 0 ? (
          <>
            <h4>Options:</h4>

            <ul>
              {variableValues.map((item) => (
                <li key={item.Id}>{item.Name}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};
