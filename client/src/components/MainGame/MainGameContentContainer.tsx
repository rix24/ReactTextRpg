import Styles from "./Styling/MainGameStyles.module.css";
import SceneContainer from "../SceneContainer/SceneContainer";

function MainGameContentContainer() {
  

  
  return (
    <div className={Styles.gameBorder}>
      <h1 className={Styles.titleTextCenter}>Briarbank</h1>
      <SceneContainer />
    </div>
  );
}

export default MainGameContentContainer;
