import { useContext } from "react";
import StepsIndicator from "../components/StepsIndicator";
import AddressInfo from "../layout/form/AddressInfo";
import PersonalInfo from "../layout/form/PersonalInfo";
import FormContext from "../context/form/FormContext";
import ReviewSubmit from "../layout/form/ReviewSubmit";

const Profile = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("FormContext must be used inside FormProvider");
  }

  const { formState, previousStep } = formContext;
  const { currentStep } = formState;

  const currentFormId =
    currentStep === 1
      ? "personal-info-form"
      : currentStep === 2
      ? "address-info-form"
      : "review-submit-form";

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg transition-colors dark:border-zinc-800 dark:bg-zinc-900">
      <StepsIndicator />

      <div className="mt-6">
        {currentStep === 1 && <PersonalInfo />}
        {currentStep === 2 && <AddressInfo />}
        {currentStep === 3 && <ReviewSubmit />}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={previousStep}
          disabled={currentStep === 1}
          className="rounded-lg bg-zinc-200 px-6 py-3 font-medium text-zinc-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-100"
        >
          Previous
        </button>

        <button
          type="submit"
          form={currentFormId}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {currentStep === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Profile;