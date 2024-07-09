import axios from "axios";
import { useForm, type FieldValues } from "react-hook-form";
import { baseUrl } from "../url";

const ReferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const config = { headers: { "Content-Type": "application/json" } };

    const response = await axios.post(`${baseUrl}/api/referal`, data, config);
    alert(response.data.message);
    window.location.assign("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 w-full h-full p-4"
    >
      <div className="flex flex-col gap-4 w-full h-20">
        <label htmlFor="program" className="text-sm">
          program name
        </label>
        <input
          {...register("program", {
            required: "program is required",
          })}
          type="program"
          placeholder="program"
          className="px-4 py-2 rounded w-full border"
        />
        {errors.program && (
          <p className="text-red-500">{`${errors.program.message}`}</p>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full h-auto">
        <label htmlFor="message" className="text-sm">
          message
        </label>
        <textarea
          {...register("message", {
            required: "message is required",
          })}
          rows={3}
          placeholder="message"
          className="px-4 py-2 rounded w-full border"
        />
        {errors.message && (
          <p className="text-red-500">{`${errors.message.message}`}</p>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full h-20">
        <label htmlFor="userEmails" className="text-sm">
          userEmail
        </label>
        <input
          {...register("userEmails", {
            required: "users is required",
          })}
          placeholder="abc@gmail.com"
          className="px-4 py-2 rounded w-full border"
        />
        {errors.userEmails && (
          <p className="text-red-500">{`${errors.userEmails.message}`}</p>
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
  );
};

export default ReferForm;
