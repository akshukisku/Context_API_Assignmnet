import type { Forminitialdata } from "../typescript/interface/form.interface";
import type { FormAction } from "../typescript/type/form.type";

export const formInitialState: Forminitialdata = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  },
};

export const formReducer = (
  state: Forminitialdata,
  action: FormAction,
): Forminitialdata => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "RESET_FORM":
      return formInitialState;

    default:
      return state;
  }
};