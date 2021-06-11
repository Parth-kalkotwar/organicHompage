import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: "2px solid black",
        margin: "80px 26.5px 0px 26.5px",
        width: "278px",
    },
    cardImg: {
        width: "278px",
        height: "195px",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px"
    },
    cardHeading: {
        fontSize: "18px",
        lineHeight: "1.33",
        textAlign: "center",
        color: "#00dbd0",
        margin: "18px 0px 9px 0"
    },
    cardInfo: {
        fontSize: "14px",
        color: "#374b5c",
        textAlign: "center",
        marginBottom: "11px",

    },
    readMore: {
        fontSize: "14px",
        color: "#374b5c",
        textAlign: "center",
    },
    underlineBlue: {
        margin: "10.5px 0px 97.5px 0px",
        border: "2px solid #00bdb0",
        width: "36px"
    }
}))


const Card2 = (props) => {
    const classes = useStyles();
    return ( 
        <div className={classes.cardMain}>
            <img src = {props.img} className={classes.cardImg} />
            <div className = {classes.cardHeading}>
                Blog Post One
            </div>
            <div className = {classes.cardInfo}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                do eiusmod.
            </div>
            <div className = {classes.readMore}>
                Read More
            </div>
            <div className = {classes.underlineBlue}></div>
        </div>
     );
}
 
export default Card2;