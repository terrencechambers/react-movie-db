import { useState, useEffect, useRef } from "react";
// import { Component } from "react"; This is for class functions

import PropTypes from 'prop-types';

// Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from "./SearchBar.style";

// class SearchBar extends Component { this is how to set a class function

// functional component
const SearchBar = ({ setSearchTerm }) => {
    // This replaces the state and initial variables when using class function
    // state = { value: '' };
    // timeout = null;

    // componentDidUpdate(_prevProps, prevState) {
    //      if (this.state.value !== prevState.value) {
    //          const {setSearchTerm } = this.props;
    //          clearTimeout(this.timeout);
    //            this.timeout = setTimeout(() => {
    //                const {value } = this.state;
    //                setSearchTerm(value);
    //            }, 500);
    //      }
    //}

    // render() {
    //     return (
    //         <Wrapper>
    //             <Content>
    //                 <img src={searchIcon} alt='search icon' />
    //                 <input
    //                     type='text'
    //                     placeholder='Search Movie'
    //                     onChange={event => this.setState({ value: event.currentTarget.value})
    //                     value={this.state.value}
    //                 />
    //             </Content>
    //         </Wrapper>
    //     );
    // }

    // Not used with class function
    const [state, setState] = useState('');
    const initial = useRef(true);

    // useEffect is not used with class component
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        // for class moved this inside componentDidUpdate
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    },[setSearchTerm, state]);

    // this is moved into the render() with class function
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;