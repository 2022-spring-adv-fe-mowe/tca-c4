import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    console.log(gameResults);

    const winCount = gameResults.filter(n => n == true).length;
    console.log(winCount);
   
    const loseCount = gameResults.length - winCount

    const myWinningPersentage = ((winCount / gameResults.length)*100).toFixed(2) 

    return (
        <>
        <h2>Home</h2>
        <h3>Total game played: {gameResults.length} </h3>
        <h3>Won game total: {winCount}</h3>
        <h3>Lost game total: {loseCount}</h3>
        <h3>My Winning Persentage: {myWinningPersentage}%</h3>
        <Button
            onClick = {()=>nav("/play")}

        >Play</Button>
      
        {/* {
            gameResults.map(x => <div>{x ? "won" : "lost"}</div>)
        
        } */}


        </>
       
    );
};