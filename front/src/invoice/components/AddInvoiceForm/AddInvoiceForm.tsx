import React, { FC, useRef } from "react";
import AddFormData from "../AddFormData/AddFormData";
import AddItemsList from "../AddItemsList/AddItemsList";
import Invoice from "../../types/interfaces/Invoice";
import invoiceSchema from "../../utils/schemaForm";
import FormOptions from "../FormOptions/FormOptions";
import defineDefaultDataFromInvoice from "../../utils/defineDefaultDataFromInvoice";
import InvoiceFormData from "../../types/interfaces/FormData";
import useTheme from "../../../_shared/hooks/useTheme";
import useForm from "../../../_shared/form/hooks/useForm";
import Form from "../../../_shared/form/Form/Form";
import { useClickOutsideListener } from "../../../_shared/hooks/useClickOutsideListener";
import { AddInvoiceFormStyled } from "./AddInvoiceForm.styled";

interface Props {
  close: () => void;
  defaultData?: Invoice;
  onSubmit: (data: InvoiceFormData) => void;
}

const AddInvoiceForm: FC<Props> = ({ close, defaultData, onSubmit }) => {
  const theme = useTheme();

  const ref = useRef<HTMLFormElement>(null);
  useClickOutsideListener(ref, close);

  const formContextValue = useForm<InvoiceFormData>({
    initialValues: defineDefaultDataFromInvoice(defaultData),
    validationSchema: invoiceSchema,
  });

  return (
    <AddInvoiceFormStyled theme={theme}>
      <Form
        formContextValue={formContextValue}
        onSubmit={onSubmit}
        formRef={ref}
      >
        <button onClick={close}>Close</button>
        <h3>{defaultData ? "Edit Invoice" : "Add Invoice"}</h3>
        <AddFormData></AddFormData>
        <AddItemsList></AddItemsList>
        <FormOptions></FormOptions>
      </Form>
    </AddInvoiceFormStyled>
  );
};

export default AddInvoiceForm;
