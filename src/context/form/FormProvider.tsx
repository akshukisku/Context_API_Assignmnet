import { useReducer, type ReactNode } from "react";
import FormContext from "./FormContext";
import { formInitialState, formReducer } from "../../reducer/form.reducer";
import type {  FormDatatype } from "../../typescript/interface/form.interface";

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, dispatchform] = useReducer(formReducer, formInitialState);

  const nextStep = () => {
    dispatchform({ type: "NEXT_STEP" });
  };

  const previousStep = () => {
    dispatchform({ type: "PREVIOUS_STEP" });
  };

  const updateField = (
    field: keyof FormDatatype,
    value: string
  ) => {
    dispatchform({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  };

  const resetForm = () => {
    dispatchform({ type: "RESET_FORM" });
  };

  return (
    <FormContext
      value={{
        formState,
        nextStep,
        previousStep,
        updateField,
        resetForm,
      }}
    >
      {children}
    </FormContext>
  );
};

export default FormProvider;