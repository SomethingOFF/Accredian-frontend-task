import Button from "./ui/Button";

const ContactExpert = () => {
  return (
    <div className="h-[60px] hidden items-center justify-center bg-primary/15 gap-2 md:flex">
      <div>Navigate your ideal career path with tailored expert advice</div>
      <Button variant={"link"} className="">
        Contact Expert
      </Button>
    </div>
  );
};

export default ContactExpert;
