export const getStorageStringItem = (itemName: string): string => {
  const item: string | null | false =
    typeof window !== "undefined" && localStorage.getItem(itemName);
  if (item) {
    return JSON.parse(item);
  }
  return "";
};
