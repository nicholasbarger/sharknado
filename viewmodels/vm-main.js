var vm = (function() {
    
    var searchTerms = ko.observable();
    var movie = ko.observable();
    var results = ko.observableArray();
    
    var search = function() {
        
        var url = 'http://www.omdbapi.com/?i=&s=' + searchTerms();
        
        $.getJSON(url, function(response) {
            
            var returnedItems = response.Search;
            if(returnedItems.length === 1)
            {
                selectMovie(returnedItems[0]);
            }
            else {
                results(response.Search);
            }
        });
    }
    
    var selectMovie = function(data) {
        
        var url = 'http://www.omdbapi.com/?i=' + data.imdbID;
        
        $.getJSON(url, function(response) {
            movie(new Movie(response.Genre, response.Poster, response.Title, response.imdbID));    
        });
    };
    
    return {
        movie: movie,
        searchTerms: searchTerms,
        search: search,
        selectMovie: selectMovie,
        results: results
    }
    
})();

ko.applyBindings(vm);