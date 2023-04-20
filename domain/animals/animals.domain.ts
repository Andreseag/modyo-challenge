import { Entry } from "@/app/game/models";

// Fisher Yates Shuffle
export function swap(array: Entry[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
export function shuffleCards(array: Entry[]): Entry[] {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}
