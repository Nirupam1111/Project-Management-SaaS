/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

import { createPayment } from "@/redux/Payment/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
const SubscriptionCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleUpgrade = () => {
    dispatch(
      createPayment({
        planType: data.planType,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };

 
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
      <p className="font-sans">{data.planName}</p>
      <p className="">
        <span className="text-xl font-semibold font-sans">₹{data.price}/</span>{" "}
        <span className="font-sans">{data.planType}</span>
      </p>
      {data.planType=="ANNUALLY"&&<p className="text-green-500 font-sans">30% off</p>}
      <Button
        disabled={data.planName == "Free" ? true : false}
        className="w-full font-sans"
        onClick={handleUpgrade}
      >
        {data.buttonName}
      </Button>
      <div>
        {data.features.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p className="font-sans">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
