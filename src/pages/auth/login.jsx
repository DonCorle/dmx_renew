/* eslint-disable */
import LayoutAuth from "../../components/Auth/LayoutAuth";
import { useFetchUser } from "../../lib/authContext";
import { default as LoginComponent } from "../../components/Auth/Login";
const Login = () => {
  const { user } = useFetchUser();

  return (
    <LayoutAuth user={user}>
      <LoginComponent />
    </LayoutAuth>
  );
};

export default Login;
