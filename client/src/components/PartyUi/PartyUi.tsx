import Styles from './Styling/PartyUiStyles.module.css';

interface PartyUiProps {
    partySize: number;
}

function PartyUi({ partySize }: PartyUiProps) {
    const partyCards = [];
    
    for (let i = 0; i < partySize; i++) {
        partyCards.push(
            <div 
                key={i}
                className={i === 3 ? "bottom-card" : Styles.partyCardBorder} 
                style={{ height: "25%" }}
            />
        );
    }
    
    return (        
        <>
            {partyCards}
        </>
    );
}

export default PartyUi;