import styled, { css } from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
    margin: 0 auto;
    margin-top: -3rem;

    width: 25rem;

    @media (min-width: 811px) {
        margin-top: -5rem;
        width: 55rem;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 40vh;
    transition: 0.5s;

    @media (min-width: 811px) {
        height: 60vh;
    }

    &:hover {
        filter: brightness(70%);
        cursor: pointer;
    }
`;

export const ImageApp = styled.img`
    width: 100%;
    height: 60vh;
    transition: 0.5s;

    &:hover {
        filter: brightness(70%);
        cursor: pointer;
    }
`;

export const Text = styled.p`
    margin-top: -7rem;
    text-align: center;
    padding: 0.5rem;

    font-size: 1.5rem;

    > span {
        color: var(--pink);
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;

const iconCSS = css`
    width: 3rem;
    height: 3rem;
    fill: #171717;
    flex-shrink: 0;

    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        fill: #fff;
        border: none;
    }
`;

export const GithubLogo = styled(FaGithub)`${iconCSS}`;

export const GitHubContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
`;
