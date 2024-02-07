import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const double = true;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500 w-full p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 grid grid-cols-1 justify-items-center gap-5",
          { "md:grid-cols-2": double }
        )}
      >
        <div className="w-full  max-w-md">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="name">Email</label>
          <input type="text" id="name" {...register("name")} />
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="name">Password</label>
          <input type="text" id="name" {...register("name")} />
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="">Select</label>
          <select>
            <option>one</option>
            <option>two</option>
            <option>tree</option>
            <option>four</option>
          </select>
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="">Select</label>
          <textarea></textarea>
        </div>

        <div className="w-full  max-w-md">
          <label className="block" htmlFor="">
            Select
          </label>
          <input type="checkbox" />
        </div>
      </div>

      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
