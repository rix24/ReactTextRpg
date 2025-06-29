import Styles from './Styling/PartyUiStyles.module.css';
import PartyMemberCard from './PartyMemberCard'
import type { PartyMember } from '../../types/PartyMember';
import type { Enemy } from '../../types/Enemy';
import type { JSX } from 'react';
import EnemyCard from './EnemyCard';

interface PartyUiProps {
    partyMembers: PartyMember[] | Enemy[]; 
    isEnemy: boolean;
}

function PartyUi({ partyMembers, isEnemy }: PartyUiProps) {
    var partyCards: JSX.Element[] = [];
    const characters: PartyMember[] = [];
    const enemies: Enemy[] = [];
    
    if (isEnemy) {
        enemies.push(...partyMembers as Enemy[]);
        partyCards = enemies.map((enemy, index) => (
            <div 
                key={enemy.id}
                className={index === 3 ? "bottom-card" : Styles.partyCardBorder} 
                style={{ height: "25%" }}
            >
                <EnemyCard enemy={enemy} />
            </div>
        ));
    } else {
        characters.push(...partyMembers as PartyMember[]);
        partyCards = characters.map((member, index) => (
        <div 
            key={member.id}
            className={index === 3 ? "bottom-card" : Styles.partyCardBorder} 
            style={{ height: "25%" }}
        >
            <PartyMemberCard character={member} />
        </div>
    ));
    }

    
    
    return (        
        <>
            {partyCards}
        </>
    );
}

export default PartyUi;