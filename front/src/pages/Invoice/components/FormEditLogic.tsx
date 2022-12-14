import React, { FC } from "react";
import Invoice from "../../../typescript/interfaces/Invoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";
import AddInvoiceForm from "../../../common-components/Form/AddInvoiceForm";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import { useParams } from "react-router-dom";
import useInvoice from "../../../react-query/hooks/useInvoice";

interface Props {
  close: () => void;
  id: string;
}

const FormAddLogic: FC<Props> = ({ close, id }) => {
  const updateInvoice = useUpdateInvoice();
  const { data } = useInvoice(id as string);

  const onSubmit = (data: any) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
    updateInvoice.mutate(
      { id: id as string, invoice: { ...invoice } },
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
