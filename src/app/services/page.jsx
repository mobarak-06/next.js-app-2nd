import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      id: 1,
      name: "Web Design",
      price: 1200,
    },
    {
      id: 2,
      name: "Logo Creation",
      price: 300,
    },
    {
      id: 3,
      name: "SEO Optimization",
      price: 700,
    },
    {
      id: 4,
      name: "Social Media Management",
      price: 500,
    },
  ];

  return (
    <div>
      <h2 className="text-bold">Services</h2>
      <div className="grid grid-cols-2 w-1/2 gap-5 mx-auto">
        {data.map((d) => (
          <Link
            href={`/services/${d.id}`}
            key={d.id}
            className="border border-gray-200 shadow p-5 flex justify-center items-center "
          >
            {d.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
