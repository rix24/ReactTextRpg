import FadeInText from "../commonComponents/FadeInText";
import LoginWizard from "../components/LoginWizard/LoginWizard";

function LoginPage() {
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
        <FadeInText delay={1000} lineDelay={1000} gradual={true}>
          {`I have no idea if I'll actually see this through but it would be nice to have 
            some kind of portfoli project that I can use to try and get a job in the future.
            Might as well try and do it with a fantasy story, since I've been playing D&D for a while now.
            In the meantime here's a fade in text component`}
        </FadeInText>
      </div>
      <LoginWizard />
    </div>
  );
}

export default LoginPage;
