import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { vinSchema } from "../../schemas";
import { setVin } from "../../store/actualDecodedVin/actualDecodedVinActions";
import { addVin } from "../../store/history/historyActions";
import styles from "./VinForm.module.scss";

export const VinForm = ({ className }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(setVin(values.vin));
    dispatch(addVin(values.vin));
  };
  const formStyles = className
    ? `${className} ${styles.form}`
    : `${styles.form}`;
  return (
    <Formik
      initialValues={{ vin: "" }}
      validationSchema={vinSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={formStyles}>
          <label className={styles.form_label} htmlFor="vin">
            VIN DECODER
          </label>
          <Field
            className={styles.form_field}
            id="vin"
            name="vin"
            placeholder="VIN"
          />
          {errors.vin && touched.vin ? (
            <span className={styles.form_error}>{errors.vin}</span>
          ) : null}
          <button
            className={styles.form_button}
            disabled={errors.vin}
            type="submit"
          >
            Decode
          </button>
        </Form>
      )}
    </Formik>
  );
};
