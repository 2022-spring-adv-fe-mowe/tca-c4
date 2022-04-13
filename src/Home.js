import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
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
        <h1>&#128308; Connect 4 &#128993;</h1>
        <br/>
        <h2>Home</h2>
        <h3>Total game played: {gameResults.length} </h3>
        <h3>Won game total: {winCount}</h3>
        <h3>Lost game total: {loseCount}</h3>
        <h3>My Winning Persentage: {myWinningPersentage}%</h3>
        <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick = {()=>nav("/play")}

        >Play</Button>
      
        {/* {
            gameResults.map(x => <div>{x ? "won" : "lost"}</div>)
        
        } */}


        </>
       
    );
};