import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("products").find({}).toArray();
  return Response.json(data);
}

export const POST  = async (res) => {
  const postedData = await res.json();
  const result = await dbConnect("products").insertOne(postedData)
  revalidatePath("/products")
  return Response.json(result)
}