import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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

export const Text = styled.p`
    font-size: 3rem;
    text-align: center;

    > span {
        color: var(--pink);
    }
`;
