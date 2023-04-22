export const getStorageStringItem = (itemName: string): string => {
  const item = localStorage.getItem(itemName);
  if (item) {
    return JSON.parse(item);
  }
  return "";
};
