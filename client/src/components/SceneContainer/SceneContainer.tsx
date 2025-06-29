import { useCallback, useState } from "react";
import DialogueContainer from "../DialogueContainer/DialogueContainer";
import ResponseContainer from "../ResponseContainer/ResponseContainer";
import Styles from './Styling/SceneContainerStyles.module.css'
import PartyUi from "../PartyUi/PartyUi";
import type { PartyMember } from "../../types/PartyMember";
import MaleKnight from '../../assets/Portraits/MaleKnight.png';
import MaleMageElderly from '../../assets/Portraits/MaleMageElderly.png';
import FemaleRogueDemonic from '../../assets/Portraits/FemaleRogueDemonic.png';
import FemalePaladin from '../../assets/Portraits/FemalePaladin.png';

function SceneContainer() {
    //ToDo: add a function to retrieve the text and response options for the current scene, initially this will likely be a function call to a hardcoded storage in the frontend
    // but in the future this will likely be a call to a backend API that retrieves the text and response options for the current scene
    // it should also contain functions for selecting the next scene based on the appropriate linked scenes and the players choices 
    //then transition the scene and re render the component with the new scene text and response options
    const handleResponseClick = (index: number) => {
        console.log(index);
    }

    const [canRespond, setCanRespond] = useState(false);

    const textFadeInComplete = useCallback(() => {
        setCanRespond(true);
    }, []);

    const tempPartyMembers: PartyMember[] = [
        {id: "1", name: "Trystan", health: {current: 100, max: 100}, mana: {current: 50, max: 50}, armor: 10, position: 0, stats: {strength: 14, dexterity: 12, constitution: 14, wisdom: 10, intelligence: 8, charisma: 6}, level: 1, experience: 0, class: "Warrior", weapon: {name: "Longsword", minDamage: 5, maxDamage: 10, type: "Melee"}, portrait: MaleKnight},
        {id: "2", name: "Elara", health: {current: 120, max: 120}, mana: {current: 70, max: 70}, armor: 8, position: 0, stats: {strength: 12, dexterity: 8, constitution: 14, wisdom: 8, intelligence: 6, charisma: 14}, level: 1, experience: 0, class: "Mage", weapon: {name: "Mace", minDamage: 6, maxDamage: 8, type: "Melee"}, portrait: FemalePaladin},
        {id: "3", name: "Mycah", health: {current: 80, max: 80}, mana: {current: 100, max: 100}, armor: 3, position: 0, stats: {strength: 8, dexterity: 14, constitution: 10, wisdom: 10, intelligence: 16, charisma: 4}, level: 1, experience: 0, class: "Barbarian", weapon: {name: "Staff", minDamage: 3, maxDamage: 5, type: "Melee"}, portrait: MaleMageElderly},
        {id: "4", name: "Lyra", health: {current: 90, max: 90}, mana: {current: 60, max: 60}, armor: 4, position: 0, stats: {strength: 10, dexterity: 14, constitution: 10, wisdom: 8, intelligence: 12, charisma: 12}, level: 1, experience: 0, class: "Rogue", weapon: {name: "Shortbow", minDamage: 2, maxDamage: 6, type: "Ranged"}, portrait: FemaleRogueDemonic}
    ]

    const responses = ["Well we could just give up.", "Or we could keep going.", "Or I could stop talking as though I were multiple people also let's find out what happens when I type a response that's longer than the screen is wide, but I didn't quite make it wide enough so let's add some more text.", "Punch someone in the face."];
    return (
        <>
            <div className={Styles.sceneContainer}>
                <div className={Styles.partyUiBorderLeft}>
                    <PartyUi partyMembers={tempPartyMembers}/>
                </div>
                <div className={Styles.dialogueContainer}>
                    <DialogueContainer onComplete={textFadeInComplete} text={`Welcome to the main game! This is a placeholder piece of text, that is also testing the new implementation of the link text and fade in text components. This is a test of the link text component, which should be clickable and show a modal with more information.
                    Does this cause a line break?
                    Yes it does, so this text implementation of curly braces with backticks allows for invisible line breaks interpreted by the components                
                    How about multiple line breaks?
                    Ok so we'll need to come up with something else for paragraph breaks since multiple lines breaks increases the line delay but doesn't insert any blank lines in the html.
                    I suppose we could just use multiple dialogue containers in a flexbox column with gaps. Though that could get messy with multiple dialogue containers scanning for keywords, plus it would wreck the one keyword per dialogue container solution. In that case I would have to lift the keywords up into this component, then split the text string into paragraphs after keyword searching, which would be a pain.
                    Man I sure hope I don't run into any Iron Wardens since I happen to be an illegal wizard.`} />
                </div>   
                <div className={Styles.partyUiBorderRight}></div>  
            </div>                       
            <ResponseContainer responses={responses} onClick={handleResponseClick} canRespond={canRespond}/>         
        </>
    )
}

export default SceneContainer;