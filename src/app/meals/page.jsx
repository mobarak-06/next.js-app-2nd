"use client"
import React, { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data.meals)
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);
  return (
    <div>
      <p>{JSON.stringify(meals)}</p>
    </div>
  );
};

export default MealsPage;
