import React from "react";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache"
  });
  const data = await res.json();
  return (
    <div className='grid grid-cols-4'>
      {data?.map((singleData) => (
        <div key={singleData._id} className="p-2 gap-5">
          <h1>{singleData?.name}</h1>
          <img src={singleData?.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
