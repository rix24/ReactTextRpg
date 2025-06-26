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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!registerData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!registerData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (!registerData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onRegister();
    }
  };

  return (
    <LoginWizardContentContainer>
      <h4 className={`${Styles.textCenter} ${Styles.titleText}`}>Register</h4>
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
        {errors.username && (
          <span className={Styles.errorText}>{errors.username}</span>
        )}
        <input
          name="password"
          value={registerData.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Create Password..."
          className={Styles.inputContainer}
          type="password"
          required
        />
        {errors.password && (
          <span className={Styles.errorText}>{errors.password}</span>
        )}
        <input
          name="email"
          value={registerData.email}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter Email..."
          className={Styles.inputContainer}
          type="email"
          required
        />
        {errors.email && (
          <span className={Styles.errorText}>{errors.email}</span>
        )}
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
