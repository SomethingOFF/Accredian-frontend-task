import { BiChevronDown } from "react-icons/bi";
import Button from "../ui/Button";
import Logo from "./Logo";
import LoginBox from "../login/LoginBox";
import SignupBox from "../signup/SignupBox";

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between h-[60px] my-[10px] ] mx-auto px-4">
      <div className="flex items-center gap-4">
        <Logo />
        <Button
          variant={"primary"}
          className="hidden items-center pr-2 md:flex"
        >
          <span className="font-medium">DropDown</span>
          <div className="w-8 flex items-center justify-center">
            <BiChevronDown className="w-6 h-6" />
          </div>
        </Button>
      </div>
      <div className="md:flex items-center gap-4 lg:gap-6 hidden">
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant={"link"}>Refer & Earn</Button>
          <Button variant={"link"}>Resources</Button>
          <Button variant={"link"}>About Us</Button>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <LoginBox />
          <SignupBox />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
