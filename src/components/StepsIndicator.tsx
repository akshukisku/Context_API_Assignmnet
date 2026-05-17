import  { useContext } from 'react'
import FormContext from '../context/form/FormContext';

const StepsIndicator = () => {

const formcontxt = useContext(FormContext)

 const steps = ["Personal Info", "Address Info", "Review"];

 const currentStep =  formcontxt?.formState?.currentStep ?? 1;

  return (
    <div className="flex items-center justify-between gap-2 mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={step}
            className={`flex-1 rounded-lg px-4 py-3 text-center text-sm font-medium ${
              isActive
                ? "bg-blue-600 text-white"
                : isCompleted
                ? "bg-green-600 text-white"
                : "bg-zinc-200 text-zinc-700"
            }`}
          >
            {step}
          </div>
        );
      })}
    </div>
  )
}

export default StepsIndicator