import { PlannedWeek } from "../models/PlannedWeek";

    export let weeksplanned: PlannedWeek[] = [
    {
      id: "1",
      userId: "1",
      weekStart: "2026-11-09",
    },
    {
      id: "2",
      userId: "1",
      weekStart: "2026-11-16",
    }
]

export async function getPlannedWeek(userId?: string): Promise<PlannedWeek[]> {
  return weeksplanned.filter(week => !userId || week.userId === userId);
}

export function getCurrentWeek(): string {
  const today = new Date();
  const jour = today.getDay();

  // Calculer le décalage pour obtenir le lundi de la semaine en cours
  const diff = jour === 0 ? -6 : 1 - jour;

  // Récupérer la date du lundi de la semaine en cours
  const lundi = new Date(today);
  lundi.setDate(today.getDate() + diff);

  return `${lundi.getDate()}/${lundi.getMonth() + 1}/${lundi.getFullYear()}`;
}

export async function getWeekById(id: string): Promise<PlannedWeek | undefined> {
  return weeksplanned.find(week => week.id === id);
}

export async function getOrCreateWeek(userId: string, weekStart: string): Promise<PlannedWeek> {
  const existingWeek = weeksplanned.find(week => week.userId === userId && week.weekStart === weekStart);
  if (existingWeek) {
    return existingWeek;
  }
  const newWeek: PlannedWeek = {
    id: '5',
    userId,
    weekStart
    };
    weeksplanned.push(newWeek);
    return newWeek;
}