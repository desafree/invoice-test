import * as yup from "yup";

const schemaItem = yup.object().shape({
  name: yup.string().min(5).required(),
  quantity: yup.number().min(1).required(),
  price: yup.number().min(1).required(),
  id: yup.string().required(),
  total: yup.number().required(),
});

export default schemaItem;
