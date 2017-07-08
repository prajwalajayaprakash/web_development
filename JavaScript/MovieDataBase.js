var movies = [
{
	title : "In Bruges",
	rating : 5,
	hasWatched : "watched"
},
{
	title : "Frozen",
	rating : 4.5,
	hasWatched : "not seen"
},
{
	title : "Mad Max Fury Road",
	rating : 5,
	hasWatched : "watched"
},	
{
	title : "Les Miserabled",
	rating : 3.5,
	hasWatched : "not seen"
}
]

movies.forEach(function(movie){
console.log("You have " + movie.hasWatched + " " + "\""+movie.title+"\"" + " - " + movie.rating + " stars");
});