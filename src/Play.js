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
        <h2>Play</h2>
        <Button
            onClick={won}
        >I WON</Button>
        
        <Button
            onClick={lost}
        >I LOST</Button>
        </>

    );
};
