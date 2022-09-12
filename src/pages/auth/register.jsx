/* eslint-disable */
import LayoutAuth from "../../components/Auth/LayoutAuth";
import { useFetchUser } from "../../lib/authContext";
import { default as RegisterComponent } from "../../components/Auth/Register";

const Register = () => {
  const { user } = useFetchUser();
  return (
    <LayoutAuth user={user}>
      <RegisterComponent />
    </LayoutAuth>
  );
};

export default Register;
