import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Img from './Group 220.png';
import Img2 from './Group 195.png';

const useStyles = makeStyles((theme) => ({
    heroRoot: {
        margin: "200px 156px 104px 139px",
        fontFamily: "LibreBaskerville",
        // border: "2px solid red",
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    heroButton: {
        margin: "35px",
        padding: "14px 64px 14px 68px",
        bordeRadius: "10px",
        backgroundColor: "#00dbd0",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff",
        "&:hover": {
        color: '#00dbd0',
        backgroundColor:'#ffffff',
        border: "2px solid #00dbd0"
    }
},
    leftHero1: {
        fontSize: "36px",
        color: "#374b5c",
    },
    leftHero2: {
        color: "#374b5c",
        fontSize: "56px",
        fontWeight: "bold",
        fontFamily: "LibreBaskerville"
    },
    leftHero3: {
        fontSize: "20px",
        color: "#374b5c",
        width: "389px",
        height: "54px",
        lineHeight: "1.35",
        margin: "35px 0px"
    },
    heroRight: {
        margin:"0px 50px",
        // border: "2px solid red",
        display: "flex",
        position: "relative"
    },
    heroImg1: {
        height: "200px",
        width: "220px",
        margin: "55px",
        border: "5px solid 00dbd0",
        // margin: "55px"
    },
    heroLogo: {
        width: "350px",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        // // padding: "64.5px 65.3px 65px 66px",
        margin: "60px 0px",
        border: "solid 3px #00dbd0",
    },
    heroLogo2: {
        position: "absolute",
        top: "55px",
        right:"190px"
    }
}))
const Hero = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.heroRoot}>
            <div className={classes.leftHero}>
                <div className={classes.leftHero1}>
                    Healthy Life With
                </div> 
                <div className={classes.leftHero2}>
                    Nature Organic
                </div> 
                <div className={classes.leftHero3}>
                    Vegetables are the edible parts of a plant that is used in cooking or can be eaten now
                </div> 
                <Button className={classes.heroButton}>
                    Explore Now
                </Button>
            </div>
            <div className={classes.heroRight}>
                <div className={classes.heroLogo2}>
                    <img src = {Img2} className={classes.heroImg2} />
                </div>
                <div className={classes.heroLogo}>
                    <img src = {Img} className={classes.heroImg1} />
                </div>
                
                {/* <div className={classes.heroLogo2}>
                    <img src = {Img2} className={classes.heroImg2} />
                </div> */}
            </div>
        </div>
     );
}
 
export default Hero;