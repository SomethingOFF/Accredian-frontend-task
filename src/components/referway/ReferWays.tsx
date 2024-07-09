import ReferBox from "../referform/ReferBox";
import { data } from "./data";

const ReferWays = () => {
  return (
    <div className=" my-20 max-w-[1360px] mx-auto px-4 flex flex-col gap-8">
      <div className="flex items-center justify-center w-full h-20 text-3xl font-semibold">
        How to Refer!
      </div>
      <div className="flex items-center gap-8">
        {data.map(({ url, description }, index) => (
          <div className="flex items-center w-full flex-col gap-4" key={index}>
            <div className="w-14 aspect-square">
              <img src={url} className="w-full h-full object-cover" />
            </div>
            <div className="md:text-lg text-sm">{description}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full h-20">
        <ReferBox />
      </div>
    </div>
  );
};

export default ReferWays;
