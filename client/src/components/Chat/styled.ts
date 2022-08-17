import styled from 'styled-components';

export const WrapperGlobalSpinner = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(151, 206, 157, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    @media (max-width: 768px) {
        background: none;
        backdrop-filter: none;
    }
`;
export const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    background: rgba(99, 132, 102, 0.43);
`;
export const SearchIcon = styled.div`
    padding: 13px 19px 13px 0;
    cursor: pointer;
`;
export const Main = styled.div`
    height: 100%;
    position: relative;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    color: rgba(0, 0, 0, 0);
    transition: color 0.3s ease;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
        width: 12px;
        border-radius: 13px;
        background-clip: padding-box;
        border: 4px solid transparent;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 0 10px;
    }
    &:hover {
        color: rgba(122, 142, 137, 1);
    }
`;
export const WrapperSpinner = styled.div`
    width: 142px;
    height: 31px;
    margin: auto;
    display: flex;
    padding: 8px 12px;
    margin-bottom: 12px;
    background: #daeddc;
    border-radius: 3px;
`;
export const FetchingSpinnerText = styled.div`
    margin-left: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #707070;
`;

export const AnswerSpinnerText = styled.div`
    margin-left: 8px;
    font-family: 'Miriam Libre';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #949494;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
export const ArrowWrapper = styled.div`
    position: absolute;
    bottom: 80px;
    right: 13px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f9f3f0;
    z-index: 5;
    cursor: pointer;
    &:hover {
        background: #e4e0dd;
    }
    @media (max-width: 768px) {
        width: 41px;
        height: 41px;
        right: 15px;
        bottom: 90px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &:hover {
            background: #f9f3f0;
        }
        &:active {
            background: #e4e0dd;
        }
    }
`;
export const WrapperIcon = styled.div`
    width: 22px;
    height: 25px;
    @media (max-width: 768px) {
        width: 16px;
        height: 19px;
    }
`;
export const WrapperAgentAnswer = styled.div`
    height: 25px;
    display: flex;
`;
export const WrapperWaitingSpinner = styled.div`
    display: flex;
    align-items: center;
`;
export const WrapperFooter = styled.div`
    display: flex;
`;
export const Footer = styled.div`
    margin-left: 9px;
    margin-right: 12px;
    padding-bottom: 9px;
    @media (max-width: 768px) {
        margin-left: 16px;
        margin-right: 16px;
        padding-bottom: 12px;
    } ;
`;
export const FooterInput = styled.input`
    width: 100%;
    padding: 15px 0px 15px 18px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 60px;
    outline: 0;
    font-family: 'Miriam Libre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    @media (max-width: 768px) {
        font-size: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 13px;
    } ;
`;
export const FooterSend = styled.button`
    padding: 13px 12px 13px 6px;
    margin-left: 12px;
    border-radius: 50%;
    background: #d5e8f3;
    box-shadow: 1.44px 1.44px 1.44px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border: 0;
    &:hover {
        background: #849299;
    }
    &:hover path {
        stroke: white;
    }
    &:active {
        box-shadow: 0px 0px 10px #627599;
    }
    @media (max-width: 768px) {
        margin-left: 8px;
        padding: 10px 10px 10px 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &:hover {
            background: #d5e8f3;
        }
        &:hover path {
            stroke: #627599;
        }
        &:active {
            background: #849299;
        }
        &:active path {
            stroke: white;
        }
    } ;
`;
export const WrapperSendIcon = styled.div`
    width: 33px;
    height: 27px;
    @media (max-width: 768px) {
        width: 25px;
        height: 20px;
    } ;
`;
export const FooterVoice = styled.div`
    padding: 8px 13px;
    border-radius: 50%;
    background: rgba(213, 232, 243, 0.5);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        background: #519bbb;
    }
    &:active {
        box-shadow: 0px 0px 10px #627599;
    }
`;
