import { useEffect, useState } from 'react';
import Styles from './Styling/ResponseContainerStyles.module.css';

interface ResponseContainerProps {
    responses: string[];
    onClick: (index: number) => void;
    canRespond: boolean;
}

function ResponseContainer({ responses, onClick, canRespond }: ResponseContainerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (canRespond) {
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setIsVisible(false);
        }
    }, [canRespond]);

    const handleClick = (index: number) => {
        onClick(index);
    }

    const responseElements = responses.map((response, index) => (
        index === 0 ? (
            <span 
                key={index} 
                className={Styles.responseFirstOption} 
                onClick={canRespond ? () => handleClick(index) : undefined} 
                style={{ cursor: canRespond ? 'pointer' : 'default', pointerEvents: canRespond ? 'auto' : 'none' }}>
                    {index + 1}{": "}{response}
                </span>) : (
            <span 
                key={index} 
                className={Styles.responseOption} 
                onClick={canRespond ? () => handleClick(index) : undefined} style={{ cursor: canRespond ? 'pointer' : 'default', pointerEvents: canRespond ? 'auto' : 'none' }}>
                    {index + 1}{": "}{response}
                </span>
            )
        )
    );

    return (
        <>
            <div className={`${Styles.responseContainer} ${isVisible ? Styles.fadeIn : Styles.fadeOut}`}>
                <div className={Styles.responseContainerInner}>
                    {responseElements}
                </div>
            </div>           
        </>
    );

}

export default ResponseContainer;