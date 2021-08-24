import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.65)
        100%
    ),
        url(${props => props.image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 40rem;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage {
        from {
            opacity: 0;

        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 1.5rem;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 45rem;
    position: absolute;
    bottom: 2rem;
    margin-right: 1.5rem;
    min-height: 12rem;
    color: var(--white);

    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;

