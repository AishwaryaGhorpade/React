//3 steps for context

{/* 1) create ContextA  (created belloew in this file)
2) provide a context value (given in App.jsx)
3) consume the context value (in ContextC.jsx) */}

import React from "react";
 
const UserContext=React.createContext("Riya")   //default value:Riya. its is optional
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer
export {UserProvider,UserConsumer}