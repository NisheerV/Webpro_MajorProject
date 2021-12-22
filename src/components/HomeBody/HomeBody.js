import React, {useState} from 'react';
import Image from '../../images/bg.jpg';
import { Button } from '../ButtonElement';
import { BodyBg, BodyContainer, ImageBg, BodyContent, BodyH1, BodyP, BodyBtnWrapper, ArrowForward, ArrowRight } from './BodyElements'

const HomeBody = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <BodyContainer>
            <BodyBg>
                {/* <ImageBg /> */}
                <ImageBg src={Image} alt="background" />
            </BodyBg>
            <BodyContent>
                <BodyH1>EMPLOYEE DIRECTORY</BodyH1>
                <BodyP>
                    Find and connect with 
                    colleagues-fast,
                    Meet your employee directory
                    It's your digital directory,
                    allowing you to browse
                    employee profiles and visualize
                    your organization's structure.
                </BodyP>
                <BodyBtnWrapper>
                    <Button to="/dept" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'>
                        Veiw Team {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BodyBtnWrapper>
            </BodyContent>
        </BodyContainer>
    )
}

export default HomeBody
