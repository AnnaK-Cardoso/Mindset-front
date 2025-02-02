import * as S from './styles';

export type CardComponentProps = {
    description: string;
    title: string;
    image?: string;
    isWhite: boolean;
};

const CardVideo: React.FC<CardComponentProps> = ({
    title,
    description,
    isWhite
}) => (
    <S.Container isWhite={isWhite}>
        <S.SubContainer>
            {isWhite ? (
                <S.Image src="/assets/imgOptionBlack.svg" />
            ) : (
                <S.Image src="/assets/imgOptionWhite.svg" />
            )}

            <S.SubContainer2>
                <S.Title isWhite={isWhite}>{title}</S.Title>
                <S.Text isWhite={isWhite}>{description}</S.Text>
            </S.SubContainer2>
            <S.ButtonImage>
                {isWhite ? (
                    <img src="/assets/playwhite.svg" alt="play" />
                ) : (
                    <img src="/assets/blackplay.svg" alt="play" />
                )}
            </S.ButtonImage>
        </S.SubContainer>
        <S.ProgressBar value={40} max={100} />
    </S.Container>
);
export default CardVideo;
