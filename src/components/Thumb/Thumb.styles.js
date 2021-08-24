import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 45rem;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
        opactiy: 0.8;
    }

    @keyframes animatethumb {
        from {
            opacity: 0;
        }
        to {
            opactiy: 1;
        }
    }
`;