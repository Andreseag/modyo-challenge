import { GameCards } from "../models";

export const getAnimals = (): Promise<GameCards> => {
  const url = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
