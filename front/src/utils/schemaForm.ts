import * as yup from "yup";
import schemaItem from "./schemaItem";

const schema = yup.object().shape({
  "street-from": yup.string().required(),
  "city-from": yup.string().required(),
  "postcode-from": yup.string().required(),
  "country-from": yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  "street-to": yup.string().required(),
  "city-to": yup.string().required(),
  "postcode-to": yup.string().required(),
  "country-to": yup.string().required(),
  "invoice-date": yup.date().required(),
  terms: yup.number().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  cart: yup
    .array()
    .of(schemaItem)
    .required("Must have fields")
    .min(1, "Minimum of 1 field"),
});

export default schema;
