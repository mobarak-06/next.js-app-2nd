export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  let data = [];

  console.log(process.env.NEXT_PUBLIC_API_URL);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text(); // safer than res.json if it's not JSON
      console.error("API error:", res.status, text);
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    data = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-red-600 p-6">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4">
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
