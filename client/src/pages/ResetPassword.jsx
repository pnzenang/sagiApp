import {
  Form,
  redirect,
  useNavigate,
  useLocation,
  // useHistory,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const searchParams = new URLSearchParams(window.location.search);

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

export const action = async ({ request }) => {
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const formData = await request.formData();
  const { password } = Object.fromEntries(formData);
  const data = { token, email, password };
  console.log(password);
  console.log(token);
  console.log(email);

  try {
    await customFetch.post("/auth/reset-password", data);
    toast.success("Password reset successfully, login");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPassword = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Reset Password</h4>
        <FormRow type="password" name="password" labelText="new password" />

        <SubmitBtn />
      </Form>
    </Wrapper>
  );
};
export default ResetPassword;
