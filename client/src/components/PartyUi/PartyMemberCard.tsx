import Styles from './Styling/PartyMemberCardStyles.module.css';
import type { PartyMember } from '../../types/PartyMember';
import MaleKnight from '../../assets/Portraits/MaleKnight.png'
interface PartyMemberCardProps {
    character: PartyMember;
}

function PartyMemberCard ({ character }: PartyMemberCardProps) {
    const healthPercentage = (character.health.current / character.health.max) * 100;
    const manaPercentage = character.mana 
        ? (character.mana.current / character.mana.max) * 100 
        : 0;
    return (
        <div className={Styles.partyMemberCardContainer}>
            <span className={Styles.characterName}>{character.name}</span>
            <img className={Styles.characterPortrait} src={character.portrait} alt={`${character.name}'s portrait`} />
            <span className={Styles.characterClass}>{character.class}</span>

            {/* Health Bar */}
            <div className={Styles.statBar}>
                <div className={Styles.healthBar}>
                    <div 
                        className={Styles.healthFill}
                        style={{ width: `${healthPercentage}%` }}
                    />
                    <span className={Styles.statText}>
                        {character.health.current}/{character.health.max}
                    </span>
                </div>
            </div>

            {/* Mana Bar */}
            {character.mana && (
                <div className={Styles.statBar}>
                    <div className={Styles.manaBar}>
                        <div 
                            className={Styles.manaFill}
                            style={{ width: `${manaPercentage}%` }}
                        />
                        <span className={Styles.statText}>
                            {character.mana.current}/{character.mana.max}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PartyMemberCard;