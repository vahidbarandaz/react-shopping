import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const ShopeForm = () => {
  const schema = yup
    .object()
    .shape({
      fullName: yup.string().min(3).required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).max(15).required(),
      confirmPassword: yup.string().oneOf([yup.ref("password")], null),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="pt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="d-flex justify-content-between">
              <input
                type="text"
                placeholder="First Name"
                className="form-control mb-3"
                {...register("fullName")}
              />
              <p className="text-danger">{errors.fullName?.message}</p>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control mb-3"
                {...register("fullName")}
              />
              <p className="text-danger">{errors.fullName?.message}</p>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              {...register("email")}
            />
            <p className="text-danger">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              {...register("password")}
            />
            <p className="text-danger">{errors.password?.message}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control mb-3"
              {...register("confirmPassword")}
            />
            <p className="text-danger">
              {errors.confirmPassword && "password should match!"}
            </p>

            <Link className="btn btn-primary btc mt-3">Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShopeForm;
