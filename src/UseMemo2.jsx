import { useState } from "react"

export default function UseMemo2() {
    const [theme , setTheme] = useState(false);
    let [num , setNum] = useState(9);
    // use memo is used basically for extensive calculation to OPtimize Performance
    // Use Memo is an React Hook that memoizes a computed value to optimize Performance
    // suppose we have 2 things in same module 
    // one is an simple task like Toggle Theme
    // Another is HEavy Calculations 
    // so what we can do for this is we can use UseMEmo it takes One callback function as an argument and also dependencies
    // so it will only cahnge now when dependecies changes

    // it Avoids Unnecessary Computation in every render
    
    // IT can be used in Filtering , sorting , etc
    
    
    const handleTheme = () => {
            setTheme(!theme)
    }

    const handleCal =() => {
        for(num=0; num<num-1;num++){
            setNum(num+1*456767+876765734*766543+9087654321*987654321
                /98767543*876543
            )
        }
    }
    return (
        <>
            <button
                onClick={handleTheme}
            >{theme ? 'Dark':'Light'}</button>
            <button
                onClick={handleCal}
            >do heavy calculation   {num}
            </button>
        </>
    )
}