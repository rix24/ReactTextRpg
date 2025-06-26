import { useState, type ChangeEvent } from "react";
import { useWizard } from "react-use-wizard";
import LoginWizardContentContainer from "./LoginWizardContentContainer";
import Styles from "./Styling/LoginWizardStyles.module.css";
import type { LoginData } from "./LoginWizardInterfaces";

interface LoginWizardLoginStepProps {
  //will need to return actal login data at some point
  onLogin: () => void;
  onForgotPassword: () => void;
}

function LoginWizardLoginStep({
  onLogin,
  onForgotPassword,
}: LoginWizardLoginStepProps) {
  const { nextStep, handleStep } = useWizard();
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  handleStep(() => {
    console.log("Step change");
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onLogin();
  };

  return (
    <LoginWizardContentContainer>
      <h4 className={`${Styles.textCenter} ${Styles.titleText}`}>Login</h4>
      <div className={Styles.inputSection}>
        <input
          name="username"
          value={loginData.username}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter Username..."
          className={Styles.inputContainer}
          type="text"
          required
        />
        <input
          name="password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter Password..."
          className={Styles.inputContainer}
          type="password"
          required
        />
        <span className={Styles.forgotPassword} onClick={onForgotPassword}>
          Forgot Password
        </span>
      </div>
      <div className={Styles.twoButtonContainer}>
        <button onClick={nextStep} className={Styles.loginButton}>
          Register
        </button>
        <button onClick={handleSubmit} className={Styles.loginButton}>
          Login
        </button>
      </div>
    </LoginWizardContentContainer>
  );
}

export default LoginWizardLoginStep;
