Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            movie_index: 0,
            imgPath: 'https://image.tmdb.org/t/p/w185',
            searchQuery: '',
            movies: [],
        },
        methods: {
            findMovie: function() {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '44b4e7242873c3afbbeb52392a0755bd',
                        query: this.searchQuery
                    }
                })
                .then((response) => {
                    this.movies = response.data.results;
                });
            },
            changeStar: function(index) {
                let vote = Math.trunc(this.movies[this.movie_index].vote_average) / 2;
                return vote;
            }
        }
    }
);
