import Styles from './Styling/ResponseContainerStyles.module.css';

interface ResponseContainerProps {
    responses: string[];
    onClick: (index: number) => void;
}

function ResponseContainer({ responses, onClick }: ResponseContainerProps) {
    const handleClick = (index: number) => {
        onClick(index);
    }
    const responseElements = responses.map((response, index) => (
        index === 0 ? (
            <span key={index} className={Styles.responseFirstOption} onClick={() => handleClick(index)}>{index + 1}{": "}{response}</span>) : (
            <span key={index} className={Styles.responseOption} onClick={() => handleClick(index)}>{index + 1}{": "}{response}</span>)
        )
    );

    return (
        <div className={Styles.responseContainer}>
            <div className={Styles.responseContainerInner}>
                {responseElements}
            </div>
        </div>
    );

}

export default ResponseContainer;