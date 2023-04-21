import { Entry } from "@/app/game/models";

/**
 * Fisher Yates Shuffle
 * @param entries as Entry[]
 */
function swap(array: Entry[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/**
 * Generate random array of Entries
 * @param entries as Entry[]
 * @returns Entry[] random
 */
export function shuffleCards(entries: Entry[]): Entry[] {
  const length = entries.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(entries, currentIndex, randomIndex);
  }
  return entries;
}

// Generate cards to create board
export const generateShuffleCards = (entries: Entry[]) => {
  return shuffleCards(entries.concat(entries));
};
