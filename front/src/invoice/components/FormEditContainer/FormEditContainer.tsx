import React, { FC } from "react";
import Invoice from "../../types/interfaces/Invoice";
import defineInvoiceDataFromFormInputs from "../../utils/defineInvoiceDataFromFormInputs";
import AddInvoiceForm from "../AddInvoiceForm/AddInvoiceForm";
import useUpdateInvoice from "../../hooks/useUpdateInvoice";
import useInvoice from "../../hooks/useInvoice";

interface Props {
  close: () => void;
  id: string;
}

const FormAddLogic: FC<Props> = ({ close, id }) => {
  const updateInvoice = useUpdateInvoice();
  const { data } = useInvoice(id);

  const onSubmit = (data: any) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
    updateInvoice.mutate(
      { id: id, invoice: { ...invoice } },
      {
        onSuccess: () => {
          close();
        },
      }
    );
  };

  return (
    <>
      <AddInvoiceForm
        close={close}
        onSubmit={onSubmit}
        defaultData={data}
      ></AddInvoiceForm>
    </>
  );
};

export default FormAddLogic;
