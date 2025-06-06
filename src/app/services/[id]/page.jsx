import React from 'react';

const ServiceDetails = ({params}) => {
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

    const singleData = data.find(d => d.id == _id);
    const {id, name, price} = singleData;

    return (
        <div className='text-center'>
           <h1>ServicesDetailsPage</h1> 
           <p>ID: {id}</p>
           <p>{name}</p>
           <p>{price}</p>
        </div>
    );
};

export default ServiceDetails;