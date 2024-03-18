import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "../../types/FormTypes";
import "./Form.css";

interface Props {
  title: string;
  handlerClick: (email: string, password: string) => void;
}

export const Form: FC<Props> = ({ title, handlerClick }) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors }
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormSchema) => {
    const { email, password } = data;
    return handlerClick(email, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {errors.email && <p>{errors.email?.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password")}
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>

      <button disabled={!isDirty || isSubmitting}>{title}</button>
    </form>
  );
};
