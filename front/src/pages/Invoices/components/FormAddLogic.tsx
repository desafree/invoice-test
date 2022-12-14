import React, { FC } from "react";
import FormData from "../../../typescript/interfaces/FormData";
import Invoice from "../../../typescript/interfaces/Invoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";
import useAddInvoice from "../../../react-query/hooks/useAddInvoice";
import AddInvoiceForm from "../../../common-components/Form/AddInvoiceForm";

interface Props {
  close: () => void;
}

const FormAddLogic: FC<Props> = ({ close }) => {
  const addInvoice = useAddInvoice();

  const onSubmit = (data: FormData) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
    console.log(data, invoice);
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
