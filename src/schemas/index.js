import * as yup from "yup";
import {
  VIN_REGEX,
  VIN_INVALID_MESSAGE,
  VIN_MINMAX_MESSAGE,
  VIN_REQ_MESSAGE,
} from "../constants";

export const vinSchema = yup.object().shape({
  vin: yup
    .string()
    .required(VIN_REQ_MESSAGE)
    .min(17, VIN_MINMAX_MESSAGE)
    .max(17, VIN_MINMAX_MESSAGE)
    .matches(VIN_REGEX, VIN_INVALID_MESSAGE),
});
