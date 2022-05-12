import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

export const Title = styled.h1`
    font-size: 1.25rem;
    margin-top: -6rem;
    text-align: center;
    text-transform: uppercase;

    > span {
        color: var(--pink);
    }

    @media (min-width: 811px) {
        font-size: 2.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 4rem;

    @media (min-width: 811px) {
        margin-top: 5rem;
    }
`;

export const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    border-radius: 6px;
    border: none;

    box-shadow: 0 0 0 0;
    outline: 0;

    &:focus {
        border: 3px solid var(--pink);
    }

    @media (min-width: 811px) {
        width: 35rem;
        padding: 0.75rem;
    }
`;

export const TextArea = styled.textarea`
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    border-radius: 6px;
    border: none;

    box-shadow: 0 0 0 0;
    outline: 0;

    &:focus {
        border: 3px solid var(--pink);
    }

    @media (min-width: 811px) {
        width: 35rem;
        padding: 0.75rem;
    }
`;

export const InputButton = styled.input`
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    background-color: var(--pink);
    color: var(--black);
    
    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }

    @media (min-width: 811px) {
        width: 35rem;
        padding: 0.75rem;
    }
`;
