import axios from "axios";
import { useForm, type FieldValues } from "react-hook-form";
import { baseUrl } from "../url";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const config = { headers: { "Content-Type": "application/json" } };

    const response = await axios.post(`${baseUrl}/api/register`, data, config);
    alert(response.data.message);
    window.location.assign("/");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 w-full h-full p-4"
      >
        <div className="flex flex-col gap-4 w-full h-20 relative">
          <label htmlFor="name" className="text-sm">
            name
          </label>
          <input
            {...register("name", {
              required: "name is required",
            })}
            placeholder="name"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.name && (
            <p className="text-red-500 absolute top-0 right-0">{`${errors.name.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20 relative">
          <label htmlFor="email" className="text-sm">
            email
          </label>
          <input
            {...register("email", {
              required: "email is required",
            })}
            type="email"
            placeholder="email"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.email && (
            <p className="text-red-500 absolute top-0 right-0">{`${errors.email.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20 relative">
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
            <p className="text-red-500 absolute top-0 right-0">{`${errors.password.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20 relative">
          <label htmlFor="describe" className="text-sm">
            describe
          </label>
          <input
            {...register("describe", {
              required: "describe is required",
            })}
            placeholder="describe"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.describe && (
            <p className="text-red-500 absolute top-0 right-0">{`${errors.describe.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20 relative">
          <label htmlFor="contact" className="text-sm">
            contact
          </label>
          <input
            {...register("contact", {
              required: "contact is required",
            })}
            type="number"
            placeholder="contactNo"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.contact && (
            <p className="text-red-500 absolute top-0 right-0">{`${errors.contact.message}`}</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-20 relative">
          <label htmlFor="position" className="text-sm">
            role
          </label>
          <input
            {...register("position", {
              required: "position is required",
            })}
            type="position"
            placeholder="student"
            className="px-4 py-2 rounded w-full border"
          />
          {errors.position && (
            <p className="text-red-500 absolute top-0 right-0">{`${errors.position.message}`}</p>
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

export default SignupForm;
