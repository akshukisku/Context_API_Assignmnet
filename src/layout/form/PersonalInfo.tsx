import { useContext } from "react";
import FormContext from "../../context/form/FormContext";
import type { PersonalInforForm } from "../../typescript/type/form.type";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInfoschema } from "../../services/validation/personalinfo.validation";

const PersonalInfo = () => {
  const formcontxt = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInforForm>({
    resolver: yupResolver(PersonalInfoschema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: PersonalInforForm) => {
    formcontxt?.updateField("firstName", data.firstName);
    formcontxt?.updateField("lastName", data.lastName);
    formcontxt?.updateField("email", data.email);
    formcontxt?.updateField("phone", data.phone);
    formcontxt?.nextStep();
  };

  return (
  <form
  id="personal-info-form"
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-4"
>
  <div>
    <input
      {...register("firstName")}
      placeholder="First Name"
      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
    />
    <p className="mt-1 text-sm text-red-500">
      {errors.firstName?.message}
    </p>
  </div>

  <div>
    <input
      {...register("lastName")}
      placeholder="Last Name"
      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
    />
    <p className="mt-1 text-sm text-red-500">
      {errors.lastName?.message}
    </p>
  </div>

  <div>
    <input
      {...register("email")}
      placeholder="Email"
      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
    />
    <p className="mt-1 text-sm text-red-500">
      {errors.email?.message}
    </p>
  </div>

  <div>
    <input
      {...register("phone")}
      placeholder="Phone"
      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
    />
    <p className="mt-1 text-sm text-red-500">
      {errors.phone?.message}
    </p>
  </div>
</form>
  );
};

export default PersonalInfo;
