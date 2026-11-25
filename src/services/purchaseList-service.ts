import { ingredient } from "../models/Ingredient";
import { getMealsByWeek } from "./plannedMeals-service";
import { PlannedWeek } from "../models/PlannedWeek";
import { Recipe } from "../models/recipe";

export async function getShoppingList(weekId: string): Promise<ingredient[]> {
    const meals = await getMealsByWeek(weekId);
    const ingredients: ingredient[] = [];

    meals.forEach((meal) => {
        
    })