export const getCategories = (keywords) => {
  const sortedCategories = [];
  for (let cat in keywords) {
    sortedCategories.push([cat, keywords[cat]]);
  }
  sortedCategories.sort((a, b) =>
    b[1] - a[1])
  return sortedCategories
}