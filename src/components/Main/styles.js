import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;

    padding: 2rem;
    margin-top: -5rem;

    animation: slide-up .6s cubic-bezier(0.4, 0, 0.2, 1) 0ms backwards;

    @keyframes slide-up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    };
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 6rem;

    @media (min-width: 768px) {
        font-size: 8rem;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.5rem;
    filter: brightness(95%);

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const IconsContainer = styled.div`

`;

export const Image = styled.img`
    width: 2.5rem;
    height: 2.5rem;

    margin-right: 0.5rem;
    margin-top: 3rem;

    @media (min-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;

        margin-right: 1.5rem;
    }
`;

export const ImgContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;