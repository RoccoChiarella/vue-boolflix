Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            imgPath: 'https://image.tmdb.org/t/p/w185',
            searchQuery: '',
            movies: [],
        },
        methods: {
            findMovie: function() {
                if (this.searchQuery.trim()) {
                    this.movies = [];
                    let requestOne = axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: '44b4e7242873c3afbbeb52392a0755bd',
                            query: this.searchQuery
                        }
                    });
                    let requestTwo = axios.get('https://api.themoviedb.org/3/search/tv', {
                        params: {
                            api_key: '44b4e7242873c3afbbeb52392a0755bd',
                            query: this.searchQuery
                        }
                    });
                    axios.all([requestOne, requestTwo]).then((responses) => {
                        let generalResponse = [...responses[0], ...responses[1]];
                        this.movies.push = generalResponse.data.results;
                    });
                }
            },
            changeStar: function(movie) {
                let vote = Math.floor(movie.vote_average / 2);
                return vote;
            }
        }
    }
);
