import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    console.log(gameResults);

    const winCount = gameResults.filter(n => n == true).length;
    console.log(winCount);
   
    const loseCount = gameResults.length - winCount;

    let myWinningPersentage = ((winCount / gameResults.length)*100).toFixed(2);
    myWinningPersentage = isNaN(myWinningPersentage) ? 0 : Number(myWinningPersentage);

    const rndm = Math.floor(Math.random()*5);
    let msg;
    if (rndm == 0) msg = "I’m not insane. My mother had me tested. —Sheldon Cooper, The Big Bang Theory";
    if (rndm == 1) msg = "Common sense is like deodorant. The people who need it most never use it. —Anonymous";
    if (rndm == 2) msg = "A day without sunshine is like, you know, night. —Steve Martin";
    if (rndm == 3) msg = "Life is pleasant. Death is peaceful. It's the transition that's troublesome.―Isaac Asimov";
    if (rndm == 4) msg = "Be yourself; everyone else is already taken. -Gilbert Perreira";


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

    
        <h3
        id="random"
        >{msg}</h3>
      
        {/* {
            gameResults.map(x => <div>{x ? "won" : "lost"}</div>)
        
        } */}


        </>
       
    );
};