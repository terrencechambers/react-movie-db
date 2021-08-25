import { useState, useEffect, useRef } from "react";

// Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from "./SearchBar.style";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='searc icon' />
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

export default SearchBar;