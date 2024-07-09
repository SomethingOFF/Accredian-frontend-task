import DialogModel from "../models/DialogModel";
import Button from "../ui/Button";
import ReferForm from "./ReferForm";

const ReferBox = () => {
  const Content = (
    <>
      <ReferForm />
    </>
  );
  return (
    <DialogModel Content={Content} HeaderName={"Refer now"}>
      <Button
        variant={"primary"}
        className="text-lg font-medium px-6 py-3 w-[200px]"
      >
        Refer Now
      </Button>
    </DialogModel>
  );
};

export default ReferBox;
