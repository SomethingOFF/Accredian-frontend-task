import DialogModel from "../models/DialogModel";
import LoginForm from "./SignupForm.tsx";
import Button from "../ui/Button";

const SignupBox = () => {
  const Content = (
    <>
      <LoginForm />
    </>
  );
  return (
    <DialogModel Content={Content} HeaderName={"Signup"}>
      <Button variant={"primary"}>Signup</Button>
    </DialogModel>
  );
};

export default SignupBox;
