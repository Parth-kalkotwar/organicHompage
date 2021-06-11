import { makeStyles } from '@material-ui/core/styles';
import Img1 from './Group 39.png';
import Img2 from './Group 55.png';
import Img3 from './Group 64.png';

const useStyles = makeStyles((theme) => ({
    deckMain: {
        // border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    deckText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "79px 0px 10px 0px",
        // border: "2px solid red"
    },
    deckHeading: {
        fontSize: "36px",
        margin: "0px 0px 19px 0px",
        color: "#374b5c"
    },
    deckText2: {
        fontSize: "16px",
        color: "374b5c",
        textAlign: "center",
        width: "568px",
        marginBottom: "62px"

    },
    cards: {
        // border: "2px solid red",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    pagination: {
        margin: "60px"
    },
    dot: {
        height: "10px",
        width: "10px",
        margin: "0 18px",
        backgroundColor: "#374b5c",
        borderRadius: "50%",
        display: "inline-block",
    },
    current: {
        backgroundColor: "#00bdb0",
    }
}))

const Deck2 = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.deckMain}>
            <div className = {classes.deckText}>
                <div className = {classes.deckHeading}>
                    Proudly Presented By
                </div>
                <div className = {classes.deckText2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className = {classes.cards}>
                <img src = {Img1} alt = "Card" />
                <img src = {Img3} alt = "Card" />
                <img src = {Img2} alt = "Card" />
                <img src = {Img3} alt = "Card" />
                <img src = {Img1} alt = "Card" />
            </div>

            <div className={classes.pagination}>
                <span className = {classes.dot}></span>
                <span className = {`${classes.dot} ${classes.current}`}></span>
                <span className = {classes.dot}></span>
                <span className = {classes.dot}></span>
            </div>
        </div>
     );
}
 
export default Deck2;