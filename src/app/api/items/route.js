import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("products").find({}).toArray();
  return Response.json(data);
}

export const POST  = async (res) => {
  const postedData = await res.json();
  const result = await dbConnect("products").insertOne(postedData)
  return Response.json(result)
}