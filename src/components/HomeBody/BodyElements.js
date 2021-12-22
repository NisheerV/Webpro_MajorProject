import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const BodyContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height:800px; 
    position: relative;
    z-index: 1;

    // Add :before styles
`;

export const BodyBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const BodyContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    positon: absolute:
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BodyH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-wdth :768px) {
        font-size: 40px;
    }

    @media screen and (max-wdth :480px) {
        font-size: 32px;
    }
`
export const BodyP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-wdth :768px) {
        font-size: 24px;
    }

    @media screen and (max-wdth :480px) {
        font-size: 18px;
    }
`

export const BodyBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items; center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`