Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            searchQuery: 'avenger',
            movies: [],

        },
        methods: {
            findMovie: function() {

            }
        },
        mounted() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '44b4e7242873c3afbbeb52392a0755bd',
                    query: this.searchQuery
                }
            })
            .then((response) => {
                console.log(response);
                this.movies = response.data.results;
            });
        }
    }
);
