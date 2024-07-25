import React from "react";
import UserSettings from "./UserSettings";
import Profile from "./Profile";
import {SettingsProvider} from "./SettingsContext.jsx";
import { useParams } from "react-router-dom";


function Q2_3() {
  //const [theme, setTheme] = React.useState("light");
  //const [language, setLanguage] = React.useState("English");
  const {q2_3} = useParams();

  return (
    <div>
        <h1> checking if working or not</h1>
    <SettingsProvider>
      <UserSettings/>
      <Profile/>
      </SettingsProvider>
    </div>
  );
}

export default Q2_3;
