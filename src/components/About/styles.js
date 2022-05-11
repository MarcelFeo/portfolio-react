import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-top: -5rem;
    padding: 2rem;
`;

export const Text = styled.p`
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 811px) {
        margin-right: 10rem;
        margin-left: 10rem;
        font-size: 1.5rem;
    }
`;
