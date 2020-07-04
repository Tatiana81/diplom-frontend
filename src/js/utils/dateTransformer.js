export const transformDate = (date) => {
  return date.publishedAt.slice(8, 10) + '.' + date.publishedAt.slice(5, 7) + '.' + date.publishedAt.slice(0, 4)
}