import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "All Meals",
  description: "Meals Loaded From MealDB API",
};

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})

const MealsPage = async ({searchParams}) => {
  const query = await searchParams;
  console.log(query);
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();


  return (
    <div>
      <div className="flex justify-center">
        <MealSearchInput/>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {meals?.map((meal, index) => (
          <div key={index} className={roboto.className}>
            <Image src={meal?.strMealThumb} width={500} height={500} alt={meal?.strMeal} />
            <p className="text-2xl font-black">{meal?.strMeal}</p>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
