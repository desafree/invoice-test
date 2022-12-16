import React, { FC, useContext, useEffect } from "react";
import classes from "./AddInvoiceForm.module.scss";
import AddFormData from "./AddFormData";
import AddItemsList from "./AddItemsList";
import stopEventBubbling from "../../../_shared/utils/stopEventBubbling";
import { useForm, FormProvider } from "react-hook-form";
import Invoice from "../../types/interfaces/Invoice";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../utils/schemaForm";
import FormOptions from "./FormOptions";
import defineDefaultDataFromInvoice from "../../utils/defineDefaultDataFromInvoice";
import FormData from "../../types/interfaces/FormData";
import useTheme from "../../../_shared/hooks/useTheme";
import { DevTool } from "@hookform/devtools";
import useRegisteredForm from "../../../_shared/form/useFormCopy";

interface Props {
  close: () => void;
  defaultData?: Invoice;
  onSubmit: (data: FormData) => void;
}

const AddInvoiceForm: FC<Props> = ({ close, defaultData, onSubmit }) => {
  const theme = useTheme();

  const methods = useForm<FormData>({
    defaultValues: defineDefaultDataFromInvoice(defaultData),
    resolver: yupResolver(schema),
  });

  /*  const methods = useRegisteredForm<FormData>(
    schema,
    defineDefaultDataFromInvoice(defaultData)
  );*/

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  return (
    <div className={`${classes.container} ${classes[theme]}`} onClick={close}>
      <FormProvider {...methods}>
        <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
          <h3>{defaultData ? "Edit Invoice" : "Add Invoice"}</h3>
          <AddFormData register={register} errors={errors}></AddFormData>
          <AddItemsList
            control={control}
            register={register}
            errors={errors}
          ></AddItemsList>
          <FormOptions reset={reset}></FormOptions>
          <DevTool control={control} />
        </form>
      </FormProvider>
    </div>
  );
};

export default AddInvoiceForm;
