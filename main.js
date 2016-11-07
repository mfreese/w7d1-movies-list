movies = []
movies.push({
  title: "Animal House",
  director: "John Landis",
  genre: "Comedy",
  year: "1978",
  stars: ["John Belushi, Karen Allen, Tom Hulce"]
})
movies.push({
  title: "Top Gun",
  director: "Tony Scott",
  genre: "Action",
  year: "1986",
  stars: ["Tom Cruise, Vall Kilmer, Kelly Mcgillis"]
})
movies.push({
  title: "Batman",
  director: "Tim Burton",
  genre: "Action",
  year: "1989",
  stars: ["Michael Keaton, Jack Nicholson, Kim Basinger"]
})
movies.push({
  title: "Teenage Mutant Ninja Turtles",
  director: "Steve Barron",
  genre: "Action",
  year: "1990",
  stars: ["Judith Hoag, Elias Koteas", "Josh Pais"]
})
movies.push({
  title: "Fight Club",
  director: "David Fincher",
  genre: "Drama",
  year: "1999",
  stars: ["Brad Pitt, Edward Norton", "Meat Loaf"]
})
function compare(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
  }
  movies.sort (compare)
  console.log(JSON.stringify(movies))
