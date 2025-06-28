import { useState, type ChangeEvent } from "react";
import { useWizard } from "react-use-wizard";
import LoginWizardContentContainer from "./LoginWizardContentContainer";
import Styles from "./Styling/LoginWizardStyles.module.css";
import type { LoginData } from "./LoginWizardInterfaces";

interface LoginWizardLoginStepProps {
  //will need to return actal login data at some point
  onLogin: (loginData: LoginData) => Promise<void>;
  onForgotPassword: () => void;
  error: string;
}

function LoginWizardLoginStep({
  onLogin,
  onForgotPassword,
  error,
}: LoginWizardLoginStepProps) {
  const { nextStep } = useWizard();
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!loginData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      await onLogin(loginData);
    }
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
        {errors.username && (
          <span className={Styles.errorText}>{errors.username}</span>
        )}
        <input
          name="password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter Password..."
          className={Styles.inputContainer}
          type="password"
          required
        />
        {errors.password && (
          <span className={Styles.errorText}>{errors.password}</span>
        )}
        <span className={Styles.forgotPassword} onClick={onForgotPassword}>
          Forgot Password
        </span>
        {error !== "" && (
          <span className={Styles.errorText}>{error}</span>
        )}
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
