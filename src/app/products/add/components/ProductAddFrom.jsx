"use client";
const ProductAddFrom = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const payload = { name };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    alert("product added")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" className="border" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductAddFrom;
