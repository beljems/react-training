export const useSorting = (array) => {
  const sortItems = [].concat(array)
  .sort(function(a, b) {
    return a.id - b.id;
  });

  return {
    sortItems
  }
}
