import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

   Swal.fire({
      icon: "success",
      title: "Reservation Confirmed!",
      text: "Thank you for reserving a table at Petuk Palace.",
      confirmButtonColor: "#18181B"
    });

    reset();
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-4  mt-8">
            <div className="grid gap-4 grid-cols-2">
                <div>
                    <input
                    type="text"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <input
                    type="tel"
                    placeholder="Phone*"
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                </div>

                <div>
                    <input
                    type="time"
                    {...register("time", { required: "Time is required" })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                </div>

                <div>
                    <input
                    type="number"
                    placeholder="Seats*"
                    {...register("seats", {
                        required: "Seats are required",
                        min: { value: 1, message: "Minimum 1 seat required" },
                    })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.seats && <p className="text-red-500 text-sm">{errors.seats.message}</p>}
                </div>

                <div>
                    <input
                    type="email"
                    placeholder="E-mail*"
                    {...register("email", { required: "Email is required" })}
                    className="w-full border p-3 outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
            </div>
             <div>
                <textarea
                placeholder="Notes"
                {...register("notes")}
                className="w-full border p-3 h-32 outline-none"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-gray-200 px-8 py-3 font-medium  cursor-pointer hover:bg-gray-900 hover:text-gray-50"
                >
                    RESERVE
                </button>
            </div>
        </form>
  );
};

export default ReservationForm;
