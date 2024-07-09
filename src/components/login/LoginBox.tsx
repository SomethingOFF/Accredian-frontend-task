import DialogModel from "../models/DialogModel";
import LoginForm from "./LoginForm";
import Button from "../ui/Button";

const LoginBox = () => {
  const Content = (
    <>
      <LoginForm />
    </>
  );
  return (
    <DialogModel Content={Content} HeaderName={"Login"}>
      <Button variant={"primary"}>Login</Button>
    </DialogModel>
  );
};

export default LoginBox;
