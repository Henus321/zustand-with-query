import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const schema = z.object({
    email: z.email({ error: "Ошибка почты" }),
    password: z.string().min(8, {
        error: "Слишком короткий пароль",
    }),
    phone: z
        .string()
        .optional()
        .refine(
            (val) => val === undefined || val === "" || phoneRegex.test(val),
            {
                error: "Неверный формат телефона",
            }
        ),
});

type FormFields = z.infer<typeof schema>;

const TodoForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: { email: "test@email.com" },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("data", data);
            //throw new Error();
        } catch (error) {
            // error from backend
            setError("root", {
                message: "This email is already taken" + ` ${error}`,
            });
        }
    };

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <input
                    className="p-1 border-2 border-solid border-sky-800 rounded-sm"
                    {...register("email")}
                    type="text"
                    placeholder="Email"
                />
                {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                )}
            </div>

            <div className="flex flex-col">
                <input
                    className="p-1 border-2 border-solid border-sky-800 rounded-sm"
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && (
                    <div className="text-red-500">
                        {errors.password.message}
                    </div>
                )}
            </div>

            <div className="flex flex-col">
                <input
                    className="p-1 border-2 border-solid border-sky-800 rounded-sm"
                    {...register("phone")}
                    placeholder="Phone"
                />
                {errors.phone && (
                    <div className="text-red-500">{errors.phone.message}</div>
                )}
            </div>

            <button
                className="p-2 bg-sky-700 rounded-sm cursor-pointer text-white hover:bg-sky-800 active:bg-sky-900 disabled:bg-gray-400 disabled:cursor-auto"
                disabled={isSubmitting}
                type="submit"
            >
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
            {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
            )}
        </form>
    );
};

export default TodoForm;
