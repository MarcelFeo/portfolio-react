import styled, { css } from "styled-components";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-top: -5rem;
    padding: 2rem;

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
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    
    @media (min-width: 811px) {
        margin-right: 35rem;
        margin-left: 35rem;
        font-size: 1.5rem;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
`;

const iconCSS = css`
    width: 3rem;
    height: 3rem;
    fill: #171717;
    flex-shrink: 0;

    margin-right: 1rem;

    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        fill: #fff;
        border: none;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;

export const GithubLogo = styled(FaGithub)`${iconCSS}`;

export const WhatsappLogo = styled(FaWhatsapp)`${iconCSS}`;

export const LinkedInLogo = styled(FaLinkedinIn)`${iconCSS}`;
