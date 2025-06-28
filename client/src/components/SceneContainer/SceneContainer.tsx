import DialogueContainer from "../DialogueContainer/DialogueContainer";
import ResponseContainer from "../ResponseContainer/ResponseContainer";import Styles from './Styling/SceneContainerStyles.module.css'

function SceneContainer() {
    const handleResponseClick = (index: number) => {
        //logic for selecting the appropriate dialgoue for the response the user selected
    }

    const responses = ["Well we could just give up.", "Or we could keep going.", "Or I could stop talking as though I were multiple people also let's find out what happens when I type a response that's longer than the screen is wide, but I didn't quite make it wide enough so let's add some more text.", "Punch someone in the face."];
    return (
        <>
            <div className="scene-container">
                <DialogueContainer text={`Welcome to the main game! This is a placeholder piece of text, that is also testing the new implementation of the link text and fade in text components. This is a test of the link text component, which should be clickable and show a modal with more information.
                Does this cause a line break?
                Yes it does, so this text implementation of curly braces with backticks allows for invisible line breaks interpreted by the components
                
                
                How about multiple line breaks?
                Ok so we'll need to come up with something else for paragraph breaks since multiple lines breaks increases the line delay but doesn't insert any blank lines in the html.
                I suppose we could just use multiple dialogue containers in a flexbox column with gaps. Though that could get messy with multiple dialogue containers scanning for keywords, plus it would wreck the one keyword per dialogue container solution. In that case I would have to lift the keywords up into this component, then split the text string into paragraphs after keyword searching, which would be a pain.
                Man I sure hope I don't run into any Iron Wardens since I happen to be an illegal wizard.`} />
            </div>                        
            <ResponseContainer responses ={responses} onClick={handleResponseClick}/>         
        </>
    )
}

export default SceneContainer;