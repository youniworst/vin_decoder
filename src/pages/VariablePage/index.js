import $api from "../../axios";

export const VariablePage = () => {
  $api
    .get("vehicles/decodevin/1FTFW1CT5DFC10312?format=json")
    .then((res) => console.log(res));
  return (
    <>
      <h1>Variable</h1>
    </>
  );
};
