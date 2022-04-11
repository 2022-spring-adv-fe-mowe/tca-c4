import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    return (
        <>
        <h2>Home</h2>
        <h3>Total game played: {gameResults.length} </h3>
        <Button
            onClick = {()=>nav("/play")}

        >Play</Button>
      
        {
            gameResults.map(x => <div>{x ? "won" : "lost"}</div>)
        }
       
        </>
       
    );
};