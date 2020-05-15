const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ec9c257544b5422787aca81fcf0db399";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
