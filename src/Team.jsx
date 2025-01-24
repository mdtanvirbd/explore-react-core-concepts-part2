import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)

    const playerAdd=()=>{
        const newTeam=team+1
        setTeam(newTeam);
    }
    const playerRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }

    const teamStyle={
        border:'2px solid purple',
        margin:'2px',
        borderRadius:'5px',
        padding:'5px'
    }
    return(
        <div style={teamStyle}>
            <h2>Team:{team}</h2>
            <button onClick={playerAdd}>AddPlayer</button>
            <button onClick={playerRemove}>RemovePlayer</button>

        </div>
    )
}
