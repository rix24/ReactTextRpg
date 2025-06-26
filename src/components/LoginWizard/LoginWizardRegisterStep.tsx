import { useWizard } from "react-use-wizard";
import LoginWizardContentContainer from "./LoginWizardContentContainer";
import type { RegisterData } from "./LoginWizardInterfaces";
import { useState, type ChangeEvent } from "react";
import Styles from "./Styling/LoginWizardStyles.module.css";

interface LoginWizardRegisterStepProps {
  //will need to return actal login data at some point
  onRegister: () => void;
}

function LoginWizardRegisterStep({ onRegister }: LoginWizardRegisterStepProps) {
  const { previousStep, handleStep } = useWizard();
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: "",
    password: "",
    email: "",
  });

  handleStep(() => {
    console.log("Step change");
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onRegister();
  };

  return (
    <LoginWizardContentContainer>
      <h4 className={Styles.textCenter}>Register</h4>
      <div className={Styles.inputSection}>
        <input
          name="username"
          value={registerData.username}
          onChange={(e) => handleInputChange(e)}
          placeholder="Create Username..."
          className={Styles.inputContainer}
          type="text"
          required
        />
        <input
          name="password"
          value={registerData.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Create Password..."
          className={Styles.inputContainer}
          type="password"
          required
        />
        <input
          name="email"
          value={registerData.email}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter Email..."
          className={Styles.inputContainer}
          type="email"
          required
        />
      </div>
      <div className={Styles.twoButtonContainer}>
        <button onClick={previousStep} className={Styles.loginButton}>
          Back
        </button>
        <button onClick={handleSubmit} className={Styles.loginButton}>
          Register
        </button>
      </div>
    </LoginWizardContentContainer>
  );
}

export default LoginWizardRegisterStep;
