import React, { useState } from "react";
import Button from "../ui/Button";
import { CgClose } from "react-icons/cg";

interface DialogModelProps {
  children: React.ReactNode;
  Content: React.ReactNode;
  HeaderName?: String;
}

const DialogModel: React.FC<DialogModelProps> = ({
  children,
  Content,
  HeaderName,
}) => {
  const [active, setactive] = useState(false);
  return (
    <div className="h-full w-full bg-white">
      <div
        className="flex items-center justify-center"
        onClick={() => setactive(true)}
      >
        {children}
      </div>
      <div
        className={
          active
            ? "bg-black/20 backdrop-blur top-0 left-0 z-50 fixed w-full h-full flex items-center justify-center visible opacity-100"
            : "invisible opacity-0 hidden"
        }
      >
        <div className="w-1/2 max-h-3/4 bg-white overflow-y-auto rounded-lg px-4 py-2">
          <div className="h-20 flex items-center justify-center w-full text-lg font-medium relative">
            <div>{HeaderName}</div>
            <Button
              variant={"primary"}
              className="px-2 absolute right-0"
              onClick={() => setactive(false)}
            >
              <CgClose />
            </Button>
          </div>
          {Content}
        </div>
      </div>
    </div>
  );
};

export default DialogModel;
