import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-contente: space-between;
    flex-direction: row;
    background: URL('/assets/background12.svg');
    background-repeat: no-repeat;
    background-position-x: right;
`;
export const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    gap: 32px;
    padding-left: 24px;
    background: #272727;
`;
export const AuxII = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 38px;
`;
export const ImageBack = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 32px;
    cursor: pointer;
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 48px;
`;

export const LoginName = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #ffffff;
`;
export const RecuperarSenha = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    color: #e7a837;
    cursor: pointer;
`;
export const ErrorWrapper = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    color: red;
`;
export const SignInButton = styled.button`
    width: 500px;
    height: 50px;
    background: #eeac0e;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
`;
export const GeneralText = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
`;
export const FooterLogo = styled.img`
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: 0;
    right: 0;
    
`;
