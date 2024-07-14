import React from "react";
import {SettingsContext} from "./SettingsContext";
import p from "../../../utility/p";

function Profile() {
    const settingsContextValue = React.useContext(SettingsContext);
    const theme = settingsContextValue.theme;
    const language = settingsContextValue.language;
    
    p("inside user setttings",theme,language)
  return (
    <>
    <div style={{ color: (theme === "light") ? "black" : "white" }}>
      Profile Page in {language}
    </div>
    <div>
        This is the constant area irrespective of theme and language.
        {theme}
        {language}
    </div>
    </>
    
  );
}

export default Profile;
