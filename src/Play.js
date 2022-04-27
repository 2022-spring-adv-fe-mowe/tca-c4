import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Play = ({addNewGameResult}) => {

    const nav = useNavigate();

    const won = () => {
        addNewGameResult(true);
        nav(-1);
    }

    const lost = () => {
        addNewGameResult(false);
        nav(-1)
    }

    return (
        <>
        <h1>&#128308; Connect 4 &#128993;</h1>
        <br/>
        <h2>Play!</h2>
        <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick={won}
        >I WON</Button>
        
        <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick={lost}
        >I LOST</Button>

        <h1
        id="tokens"
        >
        &#128993;    
        &#128308;     
        <br/>
        &#128308; 
        &#128993;
        </h1>
    

        </>

    );
};
