import { Wizard } from "react-use-wizard";
import LoginWizardLoginStep from "./LoginWizardLoginStep";
import LoginWizardRegisterStep from "./LoginWizardRegisterStep";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginData, RegisterData } from "./LoginWizardInterfaces";
import { API_BASE_URL } from "../../config/api";
import Styles from './Styling/LoginWizardStyles.module.css'

function LoginWizard() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const loginErrorMessage = "Login failed. Please check your credentials and try again.";
  const registerErrorMessage = "Registration failed. Please try again.";

  const HandleLogin = useCallback(
    async (loginData: LoginData) => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        if (!response.ok) {
          setError(loginErrorMessage);
          throw new Error("Login failed");
        }

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Login failed");
        }
        navigate("/ReactTextRpg/Game");
      } catch (error) {
        setError(loginErrorMessage);
        console.error("Login error:", error);
        // Handle login error (e.g., show an error message to the user)
      }
    },
    [navigate]
  );

  const HandleRegister = useCallback(
    async (registerData: RegisterData) => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });

        if (!response.ok) {
          setError(registerErrorMessage);
          throw new Error("Registration failed");
        }

        const result = await response.json();
        if (!result.success) {
          setError(registerErrorMessage);
          throw new Error(result.message || "Registration failed");
        }
        // Reset the form to the login page or show a success message, whatever needs to be done here
      } catch (error) {
        setError(registerErrorMessage);
      }
      // Placeholder for actual registration logic
    },
    [navigate]
  );

  const HandleForgotPassword = useCallback(() => {
    console.log("Forgot password button clicked");
    // Placeholder for actual forgot password logic
  }, []);

  return (
    <>
      <Wizard>
        <LoginWizardLoginStep
          onLogin={HandleLogin}
          onForgotPassword={HandleForgotPassword}
          error={error}
        />
        <LoginWizardRegisterStep onRegister={HandleRegister} error={error}/>
      </Wizard>  
    </>
  );
}

export default LoginWizard;
