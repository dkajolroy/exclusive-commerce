import {
  IconBxCheckShield,
  IconHeadphones,
  IconTruckFast,
} from "@/components/assets/servicesIcons";

const services = [
  {
    icons: <IconTruckFast />,
    title: "FREE AND FAST DELIVERY",
    label: "Free delivery for all orders over $140",
  },
  {
    icons: <IconHeadphones />,
    title: "24/7 CUSTOMER SERVICE",
    label: "Friendly 24/7 customer support",
  },
  {
    icons: <IconBxCheckShield />,
    title: "MONEY BACK GUARANTEE",
    label: "We reurn money within 30 days",
  },
];

function Service() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:py-28 py-10 md:grid-cols-3 md:gap-10 gap-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5"
          >
            <div className="bg-gray-500 rounded-full p-2 w-fit">
              <span className="w-12 h-12 text-4xl flex items-center justify-center rounded-full  bg-black text-white p-2">
                {item.icons}
              </span>
            </div>
            <div className="flex items-center flex-col gap-1">
              <h2 className="text font-bold text-black">{item.title}</h2>
              <p className="text-sm text-black">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
