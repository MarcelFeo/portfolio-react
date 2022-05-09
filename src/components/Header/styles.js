import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;

    height: 30vh;
    max-width: 100%;

    overflow: hidden;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
`;

export const ListItem = styled.li`
    list-style: none;
    margin-right: 1rem;
`;

export const ListContainer = styled.div`
`;

export const LinkItem = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover {
        color: #2E2E40;
    }
`;

export const LogoContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const Logo = styled.div`
    > img {
        width: 3rem;
        height: 3rem;
    }
`
