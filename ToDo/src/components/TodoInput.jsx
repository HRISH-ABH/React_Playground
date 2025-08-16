
import { useForm } from "react-hook-form";

const TodoInput = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data.todo);

    console.log(data.todo);
    addTodo(data.todo);

    reset();
  };
  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 rounded-lg bg-zinc-900 shadow">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex gap-3 items-center">
          <input
            {...register("todo", { required: true })}
            className="flex-1 px-4 py-2 rounded-md border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            type="text"
            placeholder="New Todo"
          />
          <button
            type="submit"
            className="px-6 py-2 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition cursor-pointer shadow-sm"
          >
            Add
          </button>
        </div>
        {errors.todo && <span className="text-red-500">Todo is required</span>}
      </form>
    </div>
  );
};

export default TodoInput;
