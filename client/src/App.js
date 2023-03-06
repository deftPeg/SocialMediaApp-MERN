import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  // get theme mode from our state
  const mode = useSelector((state) => state.mode);
  // set up theme mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // see if token exists for authorization
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      {/* pass colour theme */}
      <ThemeProvider theme={theme}>
        {/* basic css reset in mui */}
          <CssBaseline />

        <Routes>
           <Route 
              path="/" element={<LoginPage />} 
            />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
        </Routes>
        
        </ThemeProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;
