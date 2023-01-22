import $api from "../axios";
import { setLoading } from "../store/loading/loadingActions";

export const decodeVin = async (vin) => {
  let result = null;
  await $api
    .get(`vehicles/decodevin/${vin}?format=json`)
    .then((res) => (result = res.data.Results));
  return result;
};

export const getVehicleVariableList = async () => {
  let result = null;
  await $api
    .get("vehicles/getvehiclevariablelist?format=json")
    .then((res) => (result = res.data.Results));
  return result;
};
