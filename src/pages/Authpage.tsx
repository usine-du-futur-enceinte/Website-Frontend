import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import { colors } from "../assets/colors";
import React from "react";
import { login, register } from "../services";

const style: {
  container: CSSProperties;
  header: CSSProperties;
  button: CSSProperties;
  contentContainer: CSSProperties;
  switchModeSpan: CSSProperties;
} = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    height: "10vh",
  },
  button: {
    backgroundColor: colors.dark,
    width: "200px",
    height: "50px",
    marginTop: "20px",
    marginRight: "20px",
    textTransform: "none",
    marginBottom: "40px",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    width: "70vh",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  switchModeSpan: {
    color: colors.info,
    cursor: "pointer",
    textDecoration: "underline",
  },
};

function Authpage() {
  const [signUpMode, setSignUpMode] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    register(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div style={style.container}>
      <div style={style.header}>
        <Button variant="contained" style={style.button}>
          <Link to="/" style={{ color: "white" }}>
            Accueil
          </Link>
        </Button>
      </div>
      <div style={style.contentContainer}>
        {signUpMode ? (
          <>
            <h1>Inscription</h1>
            <p style={{ marginBottom: "40px" }}>
              Créez un compte pour accéder à votre espace
            </p>
            <TextField
              value={email}
              onChange={handleEmailChange}
              style={{ marginBottom: "40px" }}
              fullWidth
              required
              id="standard-required"
              label="Email"
              variant="standard"
              placeholder="johndoe@gmail.com"
            />
            <TextField
              value={password}
              onChange={handlePasswordChange}
              style={{ marginBottom: "40px" }}
              fullWidth
              required
              id="standard-required"
              label="Mot de passe"
              placeholder="********"
              variant="standard"
            />
            <TextField
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ marginBottom: "40px" }}
              fullWidth
              required
              id="standard-required"
              label="Confirmer mot de passe"
              placeholder="********"
              variant="standard"
            />
            <Button
              onClick={handleSignUp}
              variant="contained"
              style={style.button}
            >
              Inscription
            </Button>
            <p>
              Vous avez déjà un compte ?{" "}
              <span
                style={style.switchModeSpan}
                onClick={() => setSignUpMode(false)}
              >
                Connexion
              </span>
            </p>
          </>
        ) : (
          <>
            <h1>Connexion</h1>
            <p style={{ marginBottom: "40px" }}>
              Connectez-vous pour accéder à votre espace
            </p>
            <TextField
              value={email}
              onChange={handleEmailChange}
              style={{ marginBottom: "40px" }}
              fullWidth
              required
              id="standard-required"
              label="Email"
              variant="standard"
              placeholder="johndoe@gmail.com"
            />
            <TextField
              value={password}
              onChange={handlePasswordChange}
              style={{ marginBottom: "40px" }}
              fullWidth
              required
              id="standard-required"
              label="Mot de passe"
              placeholder="********"
              variant="standard"
            />
            <Button
              onClick={handleLogin}
              variant="contained"
              style={style.button}
            >
              Connexion
            </Button>
            <p>
              Vous n'avez pas de compte ?{" "}
              <span
                style={style.switchModeSpan}
                onClick={() => setSignUpMode(true)}
              >
                Créer un compte
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Authpage;
