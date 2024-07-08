import React from "react";
import {SettingsContext} from "./SettingsContext";
import p from "../../../utility/p";

function UserSettings() {
    const settingsContextValue = React.useContext(SettingsContext);
    const theme = settingsContextValue.theme;
    const language = settingsContextValue.language;
    const setTheme = settingsContextValue.setTheme;
    const setLanguage = settingsContextValue.setLanguage;
    p("inside user setttings",theme,language)
  return (
    <div>
      <button className="border border-red-300 m-4 bg-red-300" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <button
      className="border border-blue-300 m-4 bg-blue-300"
        onClick={() =>
          setLanguage(language === "English" ? "Spanish" : "English")
        }
      >
        Toggle Language
      </button>
    </div>
  );
}

export default UserSettings;
