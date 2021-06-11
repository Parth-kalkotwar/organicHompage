import { makeStyles } from '@material-ui/core/styles';
import Card from "../Cards";


const useStyles = makeStyles((theme) => ({
    cardsDeckMain: {
        // border: "2px solid black",
        margin: "82.1px 139px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
}))

const CardsDeck = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.cardsDeckMain}>
            <Card />
            <Card cardType = {true} />
            <Card />
            <Card />
        </div>
     );
}
 
export default CardsDeck;