import type { PartyMember } from "../../data/types/PartyMember";
import Styles from "./Styling/BattleOptionsContainerStyles.module.css";

interface BattleOptionsContainerProps {
  options: string[];
  activePartyMember: PartyMember | null;
  onOptionSelect: (option: string) => void;
}

function BattleOptionsContainer({
  options,
  activePartyMember,
  onOptionSelect,
}: BattleOptionsContainerProps) {
  console.log(activePartyMember);
  const handleClick = (option: string) => {
    onOptionSelect(option);
  };
  return (
    <div className={Styles.battleOptionsContainerOuter}>
      {options.map((option, index) => (
        <span
          key={index}
          onClick={() => handleClick(option)}
          className={Styles.battleOptionsText}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default BattleOptionsContainer;
