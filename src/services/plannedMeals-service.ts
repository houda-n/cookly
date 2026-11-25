import { PlannedMeal } from "../models/PlannedMeal";
import { getOrCreateWeek } from "./plannedWeek-service";

let plannedMeals: PlannedMeal[] = [
  {
    id: "1",
    plannedWeekId: "1",
    userId: "1",
    mealId: 52772,
    date: "2026-11-09",
    createdAt: "2026-11-09",
  },
  {
    id: "2",
    plannedWeekId: "1",
    userId: "1",
    mealId: 52804,
    date: "2026-11-10",
    createdAt: "2026-11-09",
  },
];

export async function getMealsByWeek(weekId: string): Promise<PlannedMeal[]> {
  return plannedMeals.filter((meal) => meal.plannedWeekId === weekId);
}

export async function addPlannedMeal(userId: string, mealId: number, date: string): Promise<PlannedMeal> {
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();

    selectedDate.setDate(selectedDate.getDate() + (day === 0 ? -6 : 1 - day));

    const weekStart = selectedDate.toISOString().split('T')[0];
    const existingWeek = await getOrCreateWeek(userId, weekStart);

    const newPlannedMeal: PlannedMeal = {
        id: '6',
        plannedWeekId: existingWeek.id,
        userId,
        mealId,
        date,
        createdAt: new Date().toISOString(),
    };

    plannedMeals.push(newPlannedMeal);
    return newPlannedMeal;
}