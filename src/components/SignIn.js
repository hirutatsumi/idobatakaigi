import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/"
        target="_blank"
        rel="noopener"
      >
        つたみ
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ setName }) {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(event) => setString(event.target.value)}
              onKeyDown={(e) => {
                if (isComposed) return;

                if (e.key === "Enter") {
                  setName(e.target.value);
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={() => {
                setName(string);
              }}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
