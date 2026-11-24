"use client"
import {useState, useEffect} from "react"
import {createPlayerInDB, getPlayersFromDB} from "../playerManager"

export default function PlayersPage(){
    const [playerName,setPlayerName]=useState("")
    const [playerAge,setPlayerAge]=useState("")
    const [jerseyName,setJerseyName]=useState("")
    const [cityName,setCityName]=useState("")
    const [teamName,setTeamName]=useState("")
    const [players,setPlayers]=useState([])

    async function loadPlayers(){
        const list=await getPlayersFromDB()
        setPlayers(list)
    }

    useEffect(()=>{
        loadPlayers()
    },[])

    async function addPlayer(){
        if(!playerName || !playerAge || !jerseyName || !cityName || !teamName){
            alert("Please fill all fields")
            return
        }
        await createPlayerInDB(playerName, playerAge, jerseyName, cityName, teamName)
        setPlayerName("")
        setPlayerAge("")
        setJerseyName("")
        setCityName("")
        setTeamName("")
        loadPlayers()
    }

    return(
        <div style={{padding:20}}>
            <h1>Cricket Players</h1>

            <input placeholder="Player Name" value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/><br/>
            <input placeholder="Player Age" type="number" value={playerAge} onChange={(e)=>setPlayerAge(e.target.value)}/><br/>
            <input placeholder="Jersey Name" value={jerseyName} onChange={(e)=>setJerseyName(e.target.value)}/><br/>
            <input placeholder="City Name" value={cityName} onChange={(e)=>setCityName(e.target.value)}/><br/>
            <input placeholder="Team Name" value={teamName} onChange={(e)=>setTeamName(e.target.value)}/><br/>
            <button onClick={addPlayer}>Add Player</button>

            <h2>All Players</h2>
            {players.map((p)=>(
                <div key={p.id}>
                    {p.playerName} | {p.playerAge} | {p.jerseyName} | {p.cityName} | {p.teamName}
                </div>
            ))}
        </div>
    )
}