export interface FormDatatype  {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export interface Forminitialdata {
  currentStep: number;
  formData: FormDatatype;
};

export interface FormContextType {
  formState:Forminitialdata,
  nextStep:()=>void;
  previousStep:()=>void;
  updateField:(field:keyof FormDatatype,value:string)=>void;
  resetForm:()=>void;
}