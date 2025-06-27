import { Wizard } from "react-use-wizard";
import LoginWizardLoginStep from "./LoginWizardLoginStep";
import LoginWizardRegisterStep from "./LoginWizardRegisterStep";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginData, RegisterData } from "./LoginWizardInterfaces";
import { API_BASE_URL } from "../../config/api";

function LoginWizard() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
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
          throw new Error("Login failed");
        }

        const result = await response.json();
        console.log("Login successful:", result);
        navigate("/ReactTextRpg/Game");
      } catch (error) {
        setError("Login failed. Please check your credentials and try again.");
        console.error("Login error:", error);
        // Handle login error (e.g., show an error message to the user)
      }
    },
    [navigate]
  );

  const HandleRegister = useCallback(
    async (registerData: RegisterData) => {
      console.log("Register button clicked");

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });

        if (!response.ok) {
          throw new Error("Registration failed");
        }

        const result = await response.json();
        console.log("Registration successful:", result);
        // Reset the form to the login page or show a success message, whatever needs to be done here
      } catch (error) {
        setError("Registration failed. Please try again.");
      }
      // Placeholder for actual registration logic
    },
    [navigate]
  );

  const HandleForgotPassword = useCallback(() => {
    console.log("Forgot Password button clicked");
    // Placeholder for actual forgot password logic
  }, []);

  return (
    <>
      <Wizard>
        <LoginWizardLoginStep
          onLogin={HandleLogin}
          onForgotPassword={HandleForgotPassword}
        />
        <LoginWizardRegisterStep onRegister={HandleRegister} />
      </Wizard>
    </>
  );
}

export default LoginWizard;
