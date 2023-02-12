import styled from "styled-components";

export const WrappedHelloSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background-image: url("https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: clamp(30rem, 100%, 120rem);
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  width: clamp(30rem, 100%, 70rem);
  height: 40rem;
`;

export const ArticleTitle = styled.h2`
  font-size: 3rem;
  color: white;
`;

export const ArticleText = styled.p`
  color: wheat;
  font-size: 3.2rem;
`;

export const ArticleCite = styled.cite``;
