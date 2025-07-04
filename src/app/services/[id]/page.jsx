import NotFoundPag404 from "@/app/not-found";
import React from "react";

const ServiceDetails = ({ params }) => {
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
  const _id = params?.id;

  const singleData = data?.find((d) => d.id == _id);
  // const {id, name, price} = singleData;
  if (singleData) {
    return (
      <div className="text-center">
        <h1>ServicesDetailsPage</h1>
        <p>ID: {singleData.id}</p>
        <p>{singleData.name}</p>
        <p>{singleData.price}</p>
      </div>
    );
  } else {
    return <NotFoundPag404 />;
  }
};

export default ServiceDetails;
