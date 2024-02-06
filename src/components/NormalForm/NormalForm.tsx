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
      <div className="border border-blue-500 grid grid-cols-1 justify-items-center gap-5">
        <div className="w-full  max-w-md">
          <label htmlFor="name">Name</label>
          <input
            className="block w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="name">Email</label>
          <input
            className="block w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>

        <div className="w-full  max-w-md">
          <label htmlFor="name">Password</label>
          <input
            className="block w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
      </div>

      {/* <select>
        <option>one</option>
        <option>two</option>
        <option>tree</option>
        <option>four</option>
      </select> */}
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
