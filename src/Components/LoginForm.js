import { useFormik } from "formik";
import Input from "../Components/Common/Input";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const LoginForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "name must be more than 3 character"),
    email: yup
      .string()
      .email("email format is incorrect")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "password at least must be 8 character")
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Password is weak"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signup_form">
      <h1>SignUp</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
