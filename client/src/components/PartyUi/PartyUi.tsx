import Styles from './Styling/PartyUiStyles.module.css';
import PartyMemberCard from './PartyMemberCard'
import type { PartyMember } from '../../types/PartyMember';

interface PartyUiProps {
    partyMembers: PartyMember[]; // Assuming PartyMember is defined elsewhere
}

function PartyUi({ partyMembers }: PartyUiProps) {
    
    


    const partyCards = partyMembers.map((member, index) => (
        <div 
            key={member.id}
            className={index === 3 ? "bottom-card" : Styles.partyCardBorder} 
            style={{ height: "25%" }}
        >
            <PartyMemberCard character={member} />
        </div>
    ));
    
    return (        
        <>
            {partyCards}
        </>
    );
}

export default PartyUi;