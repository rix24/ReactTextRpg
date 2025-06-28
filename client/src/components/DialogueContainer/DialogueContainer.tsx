import { useState, useCallback, useEffect, useMemo } from "react";
import LinkText from "../../commonComponents/LinkText/LinkText";
import FadeInText from "../../commonComponents/FadeInText/FadeInText";
import { getAllKeywords } from "../../commonComponents/LinkText/InfoDatabase";

interface DialogueContainerProps {
    text: string;
}

function DialogueContainer({ text }: DialogueContainerProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [linkText, setLinkText] = useState(""); //In the future, link text should probably accept a topic prop, and contain a function that searches a hardcoded database to retrieve the text relevant to that topic, return it and set it in the modal component
    
    //constants for fade in settings
    const [linkClicked, setLinkClicked] = useState(false);
    const [delay, setDelay] = useState(1000);
    const [lineDelay, setLineDelay] = useState(1000);
    const [gradual, setGradual] = useState(true);    
    
    //useEffect on the firstLinkClick to control the settings for the fade in text
    useEffect(() => {
        if (!linkClicked) {
            return;
        } else {
            setDelay(0);
            setLineDelay(0);
            setGradual(false);
        };
    }, [linkClicked]);

    const handleLinkClick = useCallback((infoText: string) => {
        setLinkText(infoText);
        setModalVisible(true);
        setLinkClicked(true);
    }, []);

    //temporary event listener to close the link text
    const handleEscapeKey = useCallback(() => {
        if (modalVisible) {
        setModalVisible(false);
        setLinkText("");
        //toggle first link click to false so that the next time the link is clicked, it will not be the first click
        setLinkClicked(false);
        }
    }, [modalVisible]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            handleEscapeKey();
        }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
    
    }, [handleEscapeKey]);
    //end of temp event listener code

    const textParsedForKeywords = useMemo(() => {
        let remainingText = text;
        const result: React.ReactNode[] = [];
        const usedKeywords = new Set<string>();
        let keyIndex = 0;
        
        const allKeywords = getAllKeywords().sort((a, b) => b.length - a.length);
        while (remainingText.length > 0) {
            let foundKeyword = false;

            for (const keyword of allKeywords) {
                if (!usedKeywords.has(keyword)) {
                    const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
                    const match = remainingText.match(keywordRegex);

                    if (match && match.index === 0) {
                        usedKeywords.add(keyword);
                        
                        result.push(
                            <LinkText key={`link-${keyIndex++}`} onClick={handleLinkClick}>
                                {match[0]}
                            </LinkText>
                        );
                        
                        remainingText = remainingText.slice(match[0].length);
                        foundKeyword = true;
                        break;
                    }
                }
            }

            if (!foundKeyword) {
                result.push(remainingText[0]);
                remainingText = remainingText.slice(1);
            }
        }

        return result;
    }, [text]);

    return (
        <>{!modalVisible ? (
            <FadeInText delay={delay} paragraphDelay={lineDelay} gradual={gradual}>
                {textParsedForKeywords}
            </FadeInText>           
      ) : (
        <FadeInText delay={delay} paragraphDelay={lineDelay} gradual={gradual}>{linkText}</FadeInText>
      )}</>
    )
}

export default DialogueContainer;