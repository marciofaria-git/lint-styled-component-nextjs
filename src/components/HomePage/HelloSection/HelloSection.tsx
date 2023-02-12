import * as S from "./HelloSection.styles";

export const HelloSection = () => {
  return (
    <S.WrappedHelloSection>
      <S.WrapperSection>
        <S.Article>
          <S.ArticleTitle>An message</S.ArticleTitle>
          <S.ArticleText>
            <S.ArticleCite>
              The meaning of life is just to be alive. It is so plain and so
              obvious and so simple. And yet, everybody rushes around in a great
              panic as if it were necessary to achieve something beyond
              themselves.
            </S.ArticleCite>
            by Alan Wilson Watts, The Culture of Counter-Culture: Edited
            Transcripts
          </S.ArticleText>
        </S.Article>
      </S.WrapperSection>
    </S.WrappedHelloSection>
  );
};
