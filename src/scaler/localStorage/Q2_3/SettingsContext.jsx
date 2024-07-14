import React from "react";
import p from "../../../utility/p";

export const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
    const [themeState,setThemeState] = React.useState("light") // light
    const [languageState,setLanguageState] = React.useState("English") // English

    const handleTheme =() => {
        if(themeState === "light"){
            p("changing from light to dark")
            setThemeState("dark") 
        }
        else{
            p("changing from dark to light")
            setThemeState("light") 
        }
        
        };
    const handleLanguage =() => {
        if(languageState === "English"){
            p("changing from Eng to Spanish")
            setLanguageState("Spanish")
        }
        else{
            p("changing from Spanish to English")
            setLanguageState("English")
        }
        
        };

  // Write your code here
  return (<SettingsContext.Provider value={{theme:themeState,language:languageState,setTheme:handleTheme,setLanguage:handleLanguage}}>
    
    {children}
  </SettingsContext.Provider>)
};

//export default SettingsProvider;
