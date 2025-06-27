import Styles from "./Styling/MainGameStyles.module.css";
import DialogueContainer from "../DialogueContainer/DialogueContainer";

function MainGameContentContainer() {
  

  
  return (
    <div className={Styles.gameBorder}>
      <h1 className={Styles.titleTextCenter}>Main Game Placeholder</h1>
      <DialogueContainer text={`Welcome to the main game! This is a placeholder piece of text, that is also testing the new implementation of the link text and fade in text components. This is a test of the link text component, which should be clickable and show a modal with more information.
        Does this cause a line break?
        Yes it does, so this text implementation of curly braces with backticks allows for invisible line breaks interpreted by the components
        
        
        How about multiple line breaks?
        Ok so we'll need to come up with something else for paragraph breaks since multiple lines breaks increases the line delay but doesn't insert any blank lines in the html.
        I suppose we could just use multiple dialogue containers in a flexbox column with gaps. Though that could get messy with multiple dialogue containers scanning for keywords, plus it would wreck the one keyword per dialogue container solution. In that case I would have to lift the keywords up into this component, then split the text string into paragraphs after keyword searching, which would be a pain.
        Man I sure hope I don't run into any Iron Wardens since I happen to be an illegal wizard.`} />
    </div>
  );
}

export default MainGameContentContainer;
