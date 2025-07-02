import { act, useCallback, useEffect, useState } from "react";
import DialogueContainer from "../DialogueContainer/DialogueContainer";
import ResponseContainer from "../ResponseContainer/ResponseContainer";
import Styles from "./Styling/SceneContainerStyles.module.css";
import PartyUi from "../PartyUi/PartyUi";
import type { PartyMember } from "../../data/types/PartyMember";
import type { Enemy } from "../../data/types/Enemy";
import { useGameStore } from "../../store/gameStore";

import BattleOptionsContainer from "../BattleOptionsContainer/BattleOptionsContainer";
import type { Skill, Spell } from "../../data/types/abilities";
import { useCombat } from "../../gameLogic/combatFunctions";

function SceneContainer() {
  //ToDo: add a function to retrieve the text and response options for the current scene, initially this will likely be a function call to a hardcoded storage in the frontend
  // but in the future this will likely be a call to a backend API that retrieves the text and response options for the current scene
  // it should also contain functions for selecting the next scene based on the appropriate linked scenes and the players choices
  //then transition the scene and re render the component with the new scene text and response options

  const {
    activePartyMembers,
    activePartyMember,
    activeEnemies,
    isBattle,
    battleMenuOptions,
    setActivePartyMember,
    setBattleMode,
    setBattleMenuOptions,
    initializeDefaultParty,
    initializeDefaultEnemies,
    setSpellcasterBattleMenu,
    setMartialBattleMenu,
  } = useGameStore();

  const { executeAbility } = useCombat();

  const [canRespond, setCanRespond] = useState(false);
  const [savedBattleMenuOptions, setSavedBattleMenuOptions] =
    useState<string[]>();

  useEffect(() => {
    initializeDefaultParty();
    initializeDefaultEnemies();
  }, []);

  const handleResponseClick = (index: number) => {
    console.log(index);
  };

  const textFadeInComplete = useCallback(() => {
    setCanRespond(true);
  }, []);

  const battleOptionClicked = useCallback(
    (option: string) => {
      console.log("Battle option clicked:", option);
      switch (option) {
        case "Attack":
          // Handle attack logic here
          console.log("Attack option selected");
          break;
        case "Advance":
          // Handle advance logic here
          console.log("Advance option selected");
          break;
        case "Retreat":
          // Handle retreat logic here
          console.log("Retreat option selected");
          break;
        case "Skills":
          setSavedBattleMenuOptions(battleMenuOptions);
          if (activePartyMember && !activePartyMember.isSpellcaster) {
            setBattleMenuOptions([
              "Back",
              ...activePartyMember.skills.map((skill) => skill.name),
            ]);
          }
          break;
        case "Spells":
          setSavedBattleMenuOptions(battleMenuOptions);
          if (activePartyMember && activePartyMember.isSpellcaster) {
            setBattleMenuOptions([
              "Back",
              ...activePartyMember.spells.map((spell) => spell.name),
            ]);
          }
          break;
        case "Inventory":
          setSavedBattleMenuOptions(battleMenuOptions);
          setBattleMenuOptions(["Back", "Item 1", "Item 2", "Item 3"]);
          break;
        case "Back":
          if (savedBattleMenuOptions) {
            setBattleMenuOptions(savedBattleMenuOptions);
          }
          break;
        default:
          handleAbilityUsage(option);
          break;
      }
    },
    [battleMenuOptions]
  );

  const handleAbilityUsage = (abilityName: string) => {
    let selectedAbility: Skill | Spell | undefined = undefined;
    if (!activePartyMember) {
      console.error("No active party member selected.");
      return;
    }

    if (activePartyMember.isSpellcaster) {
      selectedAbility = activePartyMember.spells.find(
        (spell: Spell) => spell.name === abilityName
      );
    } else {
      selectedAbility = activePartyMember.skills.find(
        (skill: Skill) => skill.name === abilityName
      );
    }

    if (!selectedAbility) {
      console.error(
        `Ability ${abilityName} not found for ${activePartyMember.name}.`
      );
      return;
    }

    const test = executeAbility(selectedAbility, activePartyMember);
    console.log("Ability executed:", test);
  };

  const responses = [
    "Well we could just give up.",
    "Or we could keep going.",
    "Or I could stop talking as though I were multiple people also let's find out what happens when I type a response that's longer than the screen is wide, but I didn't quite make it wide enough so let's add some more text.",
    "Punch someone in the face.",
  ];

  //temp battle control functions
  const toggleBattleMode = () => {
    setBattleMode(!isBattle);
    if (!isBattle) {
      changeActivePartMember(activePartyMembers[0]);
    } else {
      setActivePartyMember(null);
    }
  };

  const changeActivePartMember = (member: PartyMember) => {
    setActivePartyMember(member);
    if (member.isSpellcaster) {
      setSpellcasterBattleMenu();
    } else {
      setMartialBattleMenu();
    }
  };

  return (
    <>
      <div className={Styles.sceneContainer}>
        <div className={Styles.partyUiBorderLeft}>
          <PartyUi partyMembers={activePartyMembers} isEnemy={false} />
        </div>
        <div className={Styles.dialogueContainer}>
          <DialogueContainer
            onComplete={textFadeInComplete}
            text={`Welcome to the main game! This is a placeholder piece of text, that is also testing the new implementation of the link text and fade in text components. This is a test of the link text component, which should be clickable and show a modal with more information.
                    Does this cause a line break?
                    Yes it does, so this text implementation of curly braces with backticks allows for invisible line breaks interpreted by the components                
                    How about multiple line breaks?
                    Ok so we'll need to come up with something else for paragraph breaks since multiple lines breaks increases the line delay but doesn't insert any blank lines in the html.
                    I suppose we could just use multiple dialogue containers in a flexbox column with gaps. Though that could get messy with multiple dialogue containers scanning for keywords, plus it would wreck the one keyword per dialogue container solution. In that case I would have to lift the keywords up into this component, then split the text string into paragraphs after keyword searching, which would be a pain.
                    Man I sure hope I don't run into any Iron Wardens since I happen to be an illegal wizard.`}
          />
          <button onClick={toggleBattleMode}>toggleBattle</button>
          <button onClick={() => changeActivePartMember(activePartyMembers[0])}>
            Party member 1
          </button>
          <button onClick={() => changeActivePartMember(activePartyMembers[1])}>
            Party member 2
          </button>
          <button onClick={() => changeActivePartMember(activePartyMembers[2])}>
            Party member 3
          </button>
          <button onClick={() => changeActivePartMember(activePartyMembers[3])}>
            Party member 4
          </button>
        </div>
        <div className={Styles.partyUiBorderRight}>
          <PartyUi partyMembers={activeEnemies} isEnemy={true} />
        </div>
      </div>
      {isBattle ? (
        <BattleOptionsContainer
          options={battleMenuOptions}
          onOptionSelect={battleOptionClicked}
          activePartyMember={activePartyMember}
        />
      ) : (
        <ResponseContainer
          responses={responses}
          onClick={handleResponseClick}
          canRespond={canRespond}
        />
      )}
    </>
  );
}

export default SceneContainer;
