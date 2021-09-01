// Component used with Class function
//import { Component } from 'react';
// API used with Class function
//import API from '../API';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

// Hook (Not used with class component)
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

// Use with class Component, moved from useHomeFetch
// const initialState = {
//     page: 0,
//     results: [],
//     total_pages: 0,
//     total_results: 0
// };

// class Home extends Component { this is how to set a class function

// functional component
const Home = () => {
    // Use with Class component
    // state = {
    //     movies: initialState,
    //         searchTerm: '',
    //         setIsLoadingMore: false,
    //         loading: false,
    //         error: false
    // // }

    // Moved from useHomeFetch
    // fetchMovies = async (page, searchTerm = '') => {
    //     try {
    //         this.setState({error: false, loading: true});

    //         const movies = await API.fetchMovies(searchTerm, page);

    //         this.setState(prev => ({
    //             ...prev,
    //             movies: {
    //                 ...movies,
    //                 results: page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]
    //             },
    //             loading: false
    //         }));
    //     } catch (error) {
    //         this.setState({error: true, loading: false});
    //     }
    // };

    // handleSearch = searchTerm => {
    //     this.setSTate({ movies: initialState, searchTerm }, () =>
    //     this.fetchMovies(1, this.state.searchTerm)
    //     );
    // };

    // handleLoadMore = () =>
    //     this.fetchMovies(this.state.movies.page +1, this.state.searchTerm);

    // render() {
    //     const { searchTerm, movies, loading, error } = this.state;

        // componentDidMount() {
        //     this.fetchMovies(1);
        // }

    //     if (error) return <div>Something went wrong ...</div>;
    
    //     return (
    //         <>
    //             {!searchTerm && movies.results[0] ? (
    //                 <HeroImage 
    //                     image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
    //                     title={movies.results[0].original_title}
    //                     text={movies.results[0].overview}
    //                 />
    //             ) : null
    //             }

    //             <SearchBar setSearchTerm={this.handleSearch} />

    //             <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
    //                 {movies.results.map(movie => (
    //                     <Thumb 
    //                         key={movie.id}
    //                         clickable
    //                         image={movie.poster_path 
    //                             ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
    //                             : NoImage
    //                         }
    //                         movieId={movie.id}
    //                     />
    //                 ))}
    //             </Grid>
                
    //             {loading && <Spinner />}
                
    //             {movies.page < movies.total_pages && !loading && (
    //                 <Button text='Load More' callback={this.handleLoadMore} />
    //             )}
    //         </>
    //     );
    // }

    // this is not used with class components
    const { 
        state, 
        loading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore 
    } = useHomeFetch();

    // moved the below up to render()
    if (error) return <div>Something went wrong ...</div>;
    
    return (
        <>
            {!searchTerm && state.results[0] ? (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={movie.poster_path 
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                            : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            
            {loading && <Spinner />}
            
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    );
};

export default Home;