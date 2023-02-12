import * as S from "./NavBar.styles";

export const NavBar = () => {
  return (
    <S.WrapperNavBar>
      <S.WrapperNavBarList>
        <S.WrapperNavBarListItem>
          <S.NavLink href={"/"}>Home</S.NavLink>
        </S.WrapperNavBarListItem>
        <S.WrapperNavBarListItem>
          <S.NavLink href={"/about"}>About</S.NavLink>
        </S.WrapperNavBarListItem>
      </S.WrapperNavBarList>
    </S.WrapperNavBar>
  );
};
