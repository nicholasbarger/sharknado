var Movie = function(genre, poster, title, imdbID) {
    this.genre = ko.observable(genre);
    this.poster = ko.observable(poster);
    this.title = ko.observable(title);
    this.imdbID = ko.observable(imdbID);
};