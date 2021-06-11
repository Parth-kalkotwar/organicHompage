import { makeStyles } from '@material-ui/core/styles';
import Img from './Group 114.png';


const useStyles = makeStyles((theme) => ({
    welcomeToNatureRoot: {
        margin:"180px 0px 10px 0px",
        // border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    heading1: {
        margin: "14.5px 62px 19px 13px",
        fontFamily: "LibreBaskerville",
        fontSize: "36px",
        lineHeight: "1.33",
        color: "#374b5c",
    },
    heading2: {
        width:"568px",
        textAlign: "center",
        fontFamily: "LibreBaskerville",
        fontSize: "16px",
        lineHeight: "1.31",
        color: "#374b5c",
    }
}))

const WelcomeToNature = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.welcomeToNatureRoot}>
            <div><img src={Img} /></div>
            <div className={classes.heading1}>Welcome to Nature</div>
            <div className={classes.heading2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. </div>
        </div>
        
     );
}
 
export default WelcomeToNature;