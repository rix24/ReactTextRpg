import Styles from './Styling/characterCardStyles.module.css';
import type { Enemy } from '../../types/Enemy';

interface EnemyCardProps {
    enemy: Enemy;
}

function EnemyCard({ enemy }: EnemyCardProps) {
    const healthPercentage = (enemy.health.current / enemy.health.max) * 100;
    const manaPercentage = enemy.mana 
        ? (enemy.mana.current / enemy.mana.max) * 100 
        : 0;
    return (
        <div className={Styles.enemyCardContainer}>
            <span className={Styles.enemyname}>{enemy.name}</span>
            <img className={Styles.characterPortrait} src={enemy.portrait} alt={`${enemy.name}'s portrait`} />

            {/* Health Bar */}
            <div className={Styles.statBar}>
                <div className={Styles.healthBar}>
                    <div 
                        className={Styles.healthFill}
                        style={{ width: `${healthPercentage}%` }}
                    />
                    <span className={Styles.statText}>
                        {enemy.health.current}/{enemy.health.max}
                    </span>
                </div>
            </div>

            {/* Mana Bar */}
            {enemy.mana && (
                <div className={Styles.statBar}>
                    <div className={Styles.manaBar}>
                        <div 
                            className={Styles.manaFill}
                            style={{ width: `${manaPercentage}%` }}
                        />
                        <span className={Styles.statText}>
                            {enemy.mana.current}/{enemy.mana.max}
                        </span>
                    </div>
                </div>
            )}
            <span className={Styles.smallText}>{enemy.tempDistance}</span>
        </div>
    )
};

export default EnemyCard;
