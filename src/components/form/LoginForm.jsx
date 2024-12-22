import { useForm } from "react-hook-form";
import Field from "./Field";
import { useLoginMutation } from "../../features/auth/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";

const LoginForm = () => {
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, { data, isLoading, error: responseError }] = useLoginMutation();


    useEffect(() => {
        if (responseError?.data?.message) {
            setError(responseError.data.message);
        }

    }, [data, responseError,]);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (responseError?.data?.message) {
    //         setError(responseError.data.message);
    //     }
    //     if (data?.accessToken) {
    //         navigate("/dashboard");
    //     }
    // }, [data, responseError, navigate]);


    const submitForm = async (formData) => {
        try {
            await login(formData).unwrap();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit(submitForm)} className="mb-4">
                <div className="flex flex-col gap-3">
                    <Field label="Username" error={errors.username}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            {...register("username", { required: "Username is required" })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </Field>
                    <Field label="Password" error={errors.password}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </Field>
                    <Field>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </Field>
                </div>
            </form>
            {error && <Error message={error} />}


        </>
    );
};

export default LoginForm;
