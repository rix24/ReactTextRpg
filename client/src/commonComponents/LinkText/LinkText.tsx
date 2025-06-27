import Styles from "./Styling/LinkTextStyles.module.css";

interface LinktextProps {
  children: React.ReactNode;
  infoText: string;
  onClick: (infoText: string) => void;
}

function Linktext({ children, infoText, onClick }: LinktextProps) {
  const handleClick = () => {
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
