import { useContext } from "react";
import FormContext from "../../context/form/FormContext";

const AddressInfo = () => {
  const formContext = useContext(FormContext);

  const formData = formContext?.formState.formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formContext?.nextStep();
  };

  return (
    <form id="address-info-form" onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Address Information
      </h2>

      <input
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
        type="text"
        placeholder="Address"
        value={formData?.address || ""}
        onChange={(e) => formContext?.updateField("address", e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <input
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
          type="text"
          placeholder="City"
          value={formData?.city || ""}
          onChange={(e) => formContext?.updateField("city", e.target.value)}
        />

        <input
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
          type="text"
          placeholder="State"
          value={formData?.state || ""}
          onChange={(e) => formContext?.updateField("state", e.target.value)}
        />

        <input
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
          type="text"
          placeholder="Zip Code"
          value={formData?.zipCode || ""}
          onChange={(e) => formContext?.updateField("zipCode", e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddressInfo;
