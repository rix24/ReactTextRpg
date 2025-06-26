import Styles from "./Styling/LoginWizardStyles.module.css";

interface LoginWizardContentContainerProps {
  children: React.ReactNode;
}

function LoginWizardContentContainer({
  children,
}: LoginWizardContentContainerProps) {
  return (
    <div className={Styles.contentBorder}>
      <div className={Styles.contentContainer}>{children}</div>
    </div>
  );
}

export default LoginWizardContentContainer;
