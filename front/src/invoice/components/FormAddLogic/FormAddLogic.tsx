import React, { FC } from "react";
import FormData from "../../types/interfaces/FormData";
import Invoice from "../../types/interfaces/Invoice";
import defineInvoiceDataFromFormInputs from "../../utils/defineInvoiceDataFromFormInputs";
import useAddInvoice from "../../hooks/useAddInvoice";
import AddInvoiceForm from "../AddInvoiceForm/AddInvoiceForm";

interface Props {
  close: () => void;
}

const FormAddLogic: FC<Props> = ({ close }) => {
  const addInvoice = useAddInvoice();

  const onSubmit = (data: FormData) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
    addInvoice.mutate(invoice, {
      onSuccess: () => {
        close();
      },
    });
  };

  return (
    <>
      <AddInvoiceForm close={close} onSubmit={onSubmit}></AddInvoiceForm>
    </>
  );
};

export default FormAddLogic;
