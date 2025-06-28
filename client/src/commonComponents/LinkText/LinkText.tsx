import { getInfoByKeyword } from "./InfoDatabase";
import Styles from "./Styling/LinkTextStyles.module.css";

interface LinktextProps {
  children: string;
  onClick: (infoText: string) => void;
  canRespond: boolean;
}

function Linktext({ children, onClick, canRespond }: LinktextProps) {
  const handleClick = () => {
    const infoText = getInfoByKeyword(children);
    onClick(infoText);
  };

  return (
    <>
      <span className={Styles.linkText} onClick={canRespond ? handleClick : undefined} style={{ cursor: canRespond ? 'pointer' : 'default', pointerEvents: canRespond ? 'auto' : 'none' }}> 
        {children}
      </span>
    </>
  );
}

export default Linktext;
