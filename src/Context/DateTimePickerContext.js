import React from "react";
import { createContext } from "react";

export const DateTimePickerContext = createContext()

export function DateTimePickerProvider (props) { 

    const [dateValue, setDateValue] = React.useState(null);

    return(
        <DateTimePickerContext.Provider value={[dateValue, setDateValue]}>
            {props.children}
        </DateTimePickerContext.Provider>
    )
 }