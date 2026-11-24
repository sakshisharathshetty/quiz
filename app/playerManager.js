import {database} from "./firebaseconfig.js"
import {ref, push, set, get} from "firebase/database"

// ADD a player
export async function createPlayerInDB(playerName, playerAge, jerseyName, cityName, teamName){
    const player={
        "playerName":playerName,
        "playerAge":playerAge,
        "jerseyName":jerseyName,
        "cityName":cityName,
        "teamName":teamName
    }
    try{
        const playerRef=push(ref(database,"players"))
        await set(playerRef, player)
        alert("Player added")
    }catch(error){
        alert(JSON.stringify(error))
    }
}

// GET all players
export async function getPlayersFromDB(){
    try{
        const snapshot=await get(ref(database,"players"))
        const data=snapshot.val() || {}
        return Object.keys(data).map((id)=>({id:id, ...data[id]}))
    }catch(error){
        alert(JSON.stringify(error))
        return []
    }
}