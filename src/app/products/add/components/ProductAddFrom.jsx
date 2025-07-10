"use client";
import { useRouter } from "next/navigation";
const ProductAddFrom = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const payload = { name };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    router.push("/products")
    router.refresh();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="border"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductAddFrom;
