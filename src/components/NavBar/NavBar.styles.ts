import styled, { css } from "styled-components";
import Link from "next/link";

export const WrapperNavBar = styled.nav(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 5rem;

    background-color: gray;
    color: black;
  `
);

export const WrapperNavBarList = styled.ul(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: clamp(10rem, 100%, 15rem);
  `
);

export const WrapperNavBarListItem = styled.li(
  () => css`
    width: 4rem;

    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `
);

export const NavLink = styled(Link)(
  () => css`
    color: black;
    &:hover {
      color: blueviolet;
    }
  `
);
