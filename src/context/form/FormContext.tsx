import { createContext } from "react";
import type { FormContextType } from "../../typescript/interface/form.interface";

const FormContext = createContext<FormContextType | null>(null);

export default FormContext;
