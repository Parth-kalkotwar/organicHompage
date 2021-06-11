import { makeStyles } from '@material-ui/core/styles';
import Card2 from '../Card';
import Img from './containers-with-products-table-with-copy-space_23-2148366089.png';
import Img1 from './eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766.png';
import Img2 from './potted-plant-near-cosmetics-bottles-jars_23-2147787938.png';


const useStyles = makeStyles((theme) => ({
    welcomeToNatureRoot: {
        margin:"14.5px 0px 10px 0px",
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
    },
    cardsDeck: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
}))

const ReadOurBlog = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.welcomeToNatureRoot}>
            <div className={classes.heading1}>Read Our Blog</div>
            <div className={classes.heading2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. </div>
            <div className = {classes.cardsDeck}>
                <Card2 img = {Img} />
                <Card2 img = {Img1} />
                <Card2 img = {Img2} />
            </div>
        </div>
        
     );
}
 
export default ReadOurBlog;