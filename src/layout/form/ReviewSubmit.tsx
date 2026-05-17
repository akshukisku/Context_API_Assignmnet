import { useContext } from "react";
import FormContext from "../../context/form/FormContext";

const ReviewSubmit = () => {
  const formContext = useContext(FormContext);

  const formData = formContext?.formState.formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
    formContext?.resetForm();
  };

  return (
    <form id="review-submit-form" onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Review & Submit
      </h2>

      <div className="space-y-2 rounded-lg border border-zinc-300 bg-zinc-50 p-4 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
        <p>
          <strong>First Name:</strong> {formData?.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData?.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData?.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData?.phone}
        </p>
        <p>
          <strong>Address:</strong> {formData?.address}
        </p>
        <p>
          <strong>City:</strong> {formData?.city}
        </p>
        <p>
          <strong>State:</strong> {formData?.state}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData?.zipCode}
        </p>
      </div>
    </form>
  );
};

export default ReviewSubmit;
