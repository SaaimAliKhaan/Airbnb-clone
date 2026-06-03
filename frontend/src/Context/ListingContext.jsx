import React, { createContext } from 'react'


export const listingDataContext = createContext()
function ListingContext({ children }) {
    //ab hum title,description vagaira ko usestate bana ke form ki madad se data ko update karenge
    let[title,setTitle]=useState("")
    let[description,setDescription]=useState("")
    let[frontendImage1,setFrontendImage1]=useState(null)
    let[frontendImage2,setFrontendImage2]=useState(null)
    let[frontendImage3,setFrontendImage3]=useState(null)
    let[backendImage1,setBackendImage1]=useState(null) //ye backend image hum backend pe bhejenge aur frontend me hum iska url leke usko display karenge
    let[backendImage2,setBackendImage2]=useState(null)
    let[backendImage3,setBackendImage3]=useState(null)
    let[rent,setRent]=useState("")
    let[city,setCity]=useState("")
    let[landmark,setLandmark]=useState("")
    let[category,setCategory]=useState("")

    let value={

    }
    return (
        <div>
            <listingDataContext.Provider value={value}>
                {children}
            </listingDataContext.Provider>
        </div>

    )
}

export default ListingContext