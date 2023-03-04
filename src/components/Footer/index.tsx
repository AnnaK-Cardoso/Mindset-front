import * as S from './styles';

const Footer = () => (
    <S.Wrapper>
        <S.Container>
            <S.Container1>
                <S.SubContainer>
                    <S.Text>Redes Sociais:</S.Text>
                    <S.MediasButton>
                        <S.MediaImage src="/assets/intagramMedia.svg" />
                    </S.MediasButton>
                    <S.MediasButton>
                        <S.MediaImage src="/assets/linkedinmedias.svg" />
                    </S.MediasButton>
                    <S.MediasButton>
                        <S.MediaImage src="/assets/facebookmedias.svg" />
                    </S.MediasButton>
                    <img src="/assets/verticalBar.svg" alt="bar" />
                </S.SubContainer>
            </S.Container1>
            <S.Logo src="/assets/LogoWithWhitLetters.svg" />
            <img src="/assets/verticalBar.svg" alt="bar" />
            <S.Container1>
                <S.Text>Pesquisa rápida: </S.Text>
                <S.SubContainer2>
                    <S.ButtonLink>Home</S.ButtonLink>
                    <S.ButtonLink>FAQ</S.ButtonLink>
                    <S.ButtonLink>Termo de uso</S.ButtonLink>
                </S.SubContainer2>
            </S.Container1>
        </S.Container>
    </S.Wrapper>
);
export default Footer;
