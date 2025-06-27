import { getInfoByKeyword } from "./InfoDatabase";
import Styles from "./Styling/LinkTextStyles.module.css";

interface LinktextProps {
  children: string;
  onClick: (infoText: string) => void;
}

function Linktext({ children, onClick }: LinktextProps) {
  const handleClick = () => {
    const infoText = getInfoByKeyword(children);
    onClick(infoText);
  };
  return (
    <>
      <span className={Styles.linkText} onClick={handleClick}> 
        {children}
      </span>
    </>
  );
}

export default Linktext;
