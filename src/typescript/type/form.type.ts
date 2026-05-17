import type { FormDatatype } from "../interface/form.interface";

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_FIELD"; field: keyof FormDatatype; value: string }
  | { type: "RESET_FORM" };

export type PersonalInforForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
