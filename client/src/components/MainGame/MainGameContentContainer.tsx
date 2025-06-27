import Styles from "./Styling/MainGameStyles.module.css";
import LinkText from "../../commonComponents/LinkText/LinkText";
import { useCallback, useState } from "react";

function MainGameContentContainer() {
  const infoText =
    "This is some information text that can be used in the link.";
  const [modalVisible, setModalVisible] = useState(false);
  const [linkText, setLinkText] = useState(""); //In the future, link text should probably accept a topic prop, and contain a function that searches a hardcoded database to retrieve the text relevant to that topic, return it and set it in the modal component

  const handleLinkClick = useCallback((infoText: string) => {
    setLinkText(infoText);
    setModalVisible(!modalVisible);
  }, []);

  return (
    <div className={Styles.gameBorder}>
      <h1 className={Styles.titleTextCenter}>Main Game Placeholder</h1>
      {!modalVisible ? (
        <>
          <span className={Styles.textCenter}>
            Here is some text to showcase the link text component, here is the{" "}
            <LinkText infoText={infoText} onClick={handleLinkClick}>
              link
            </LinkText>
          </span>
        </>
      ) : (
        <span className={Styles.textCenter}>{linkText}</span>
      )}
    </div>
  );
}

export default MainGameContentContainer;
