import { createContext, useState } from "react";


export const DarkLightMode = createContext()

export const DarkLightModeProvider = ({children}) =>{
     const [mode, setMode] = useState('light')
     if(mode === 'light'){
        //  document.body.style.background =  'linear-gradient(#fbc2eb, #a6c1ee)'
        document.body.style.backgroundImage = `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIaOMSHic__HeSaFoTizqHwtXYcPEQYXt4A&s"})`
        document.body.style.backgroundSize = 'contain'
        // document.body.style.position = 'center'  
        document.body.style.color = 'black'
        

     }else{
         document.body.style.background =  'rgb(0 10 30)'  
     }

     const handleToggleMode = () =>{
        if(mode === 'light'){
            setMode('dark')
            document.body.style.color = 'white'
        }
        else{
            setMode('light')
            document.body.style.color = 'black'

        }
     }
    return <DarkLightMode.Provider value={{mode, handleToggleMode}} > {children} </DarkLightMode.Provider>
}
