import { Wizard } from "react-use-wizard";
import LoginWizardLoginStep from "./LoginWizardLoginStep";
import LoginWizardRegisterStep from "./LoginWizardRegisterStep";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function LoginWizard() {
  const navigate = useNavigate();

  const HandleLogin = useCallback(() => {
    console.log("Login button clicked");
    // Placeholder for actual login logic

    //assume login goes smoothly

    //navigate to main game page
    navigate("/ReactTextRpg/Game");
  }, []);

  const HandleRegister = useCallback(() => {
    console.log("Register button clicked");
    // Placeholder for actual registration logic
  }, []);

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
