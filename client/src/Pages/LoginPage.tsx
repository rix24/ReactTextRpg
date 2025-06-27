import { useNavigate } from "react-router-dom";
import FadeInText from "../commonComponents/FadeInText/FadeInText";
import LoginWizard from "../components/LoginWizard/LoginWizard";

function LoginPage() {
  //temp routing
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 style={{ fontFamily: "Garamond, serif" }}>Welcome to Briarbank</h1>
      <div style={{ marginBottom: "50px" }}>
        <FadeInText delay={1000} paragraphDelay={1000} gradual={true}>
          {`I have no idea if I'll actually see this through but it would be nice to have 
            some kind of portfoli project that I can use to try and get a job in the future.
            Might as well try and do it with a fantasy story, since I've been playing D&D for a while now.
            In the meantime here's a fade in text component`}
        </FadeInText>
      </div>
      <LoginWizard />
      {/* Temporary login skip button */}
      <span style={{ paddingBottom: '10px', paddingTop: '10px' }}>Temp login skip button</span>
      <button onClick={() => {navigate("/ReactTextRpg/Game")}}>Skip Login</button>
    </div>
  );
}

export default LoginPage;
