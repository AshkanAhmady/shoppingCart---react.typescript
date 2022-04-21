import { useFormik } from "formik";
import Input from "../Components/Common/Input";
import * as yup from "yup";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../Services/HttpRequestMethods";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
      history.push("/");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("email format is incorrect")
      .required("Email is required"),
    password: yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signup_form">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
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
        {error && <p>{error}</p>}
        <Link to="/signup">Not Signup Yet?</Link>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
