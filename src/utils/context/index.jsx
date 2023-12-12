import { useState, createContext } from "react"

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [replies, setReplies] = useState([]);
    const repliesId = replies.map((element => element.replyId));
  
    return (
      <SurveyContext.Provider value={{ replies, repliesId, setReplies }}>
        {children}
      </SurveyContext.Provider>
    ) 
  }