import { useEffect, useState } from "react"

function Clock (){
    //Initialisation de l'état local
    const [date, setDate] = useState(new Date())

    //fonction appeller automatiquement au montage du composant
    useEffect(() => {
        //fonction appeler toutes les 1000ms 
        const interval = setInterval(()=> {
            setDate(new Date())
        }, 1000)
        //fonction appeller automatiquement au démontage du composant
        return () => {
            clearInterval(interval)
        }
    }, [])

    //affichage du composant
    return (
        <h1>{date.toLocaleTimeString()}</h1>

    )
}

export default Clock  