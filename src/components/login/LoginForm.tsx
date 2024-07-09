import axios from "axios";
import { useForm, type FieldValues } from "react-hook-form";
import { baseUrl } from "../url";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const config = { headers: { "Content-Type": "application/json" } };
    await axios.post(`${baseUrl}/api/login`, data, config);
    window.location.assign("/");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 w-full h-full p-4"
      >
        <div className="flex flex-col gap-4 w-full h-20">
          <label htmlFor="email" className="text-sm">
            email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="email"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20">
          <label htmlFor="password" className="text-sm">
            password
          </label>
          <input
            {...register("password", {
              required: "password is required",
            })}
            type="password"
            placeholder="password"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded mt-10"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
