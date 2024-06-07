
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../components/format/api'


const RumahContext = createContext()

// buat provider
const RumahProvider = ({children}) => {
    const [rumah, setRumah] = useState([]);
   

    useEffect(() => {
        axios.get(API_KEY + "itemsCardRumah")
        .then((response) => {
            setRumah(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, []);

    return (
        <RumahContext.Provider value={{rumah}}>
            {children}
        </RumahContext.Provider>
    )

}

export {RumahProvider, RumahContext}
