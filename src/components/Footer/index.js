import { makeStyles } from '@material-ui/core/styles';
import Img from './Group 225.png';
import Img1 from './Group 229.png';
import Fb from './Group 99.png';
import Insta from './Group 100.png';
import linkedIn from './Group 105.png';



const useStyles = makeStyles((theme) => ({
    footerRoot: {
        backgroundImage: `url('${Img1}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    organic: {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    logo: {
        width: "100%",
    },
    logoText: {
        fontSize: "14px",
        textAlign: "left",
        maxWidth: "319px",
        color:"#fff",
        margin: "30px 146.6px 32px 0px"
    },
    copyright: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "flex-start",
        width: "100%"
    },
    blueLine: {
        border: "2px solid #00bdb0",
        width: "77px"
    },
    blueLine2: {
        border: "2px solid #00bdb0",
        marginTop: "11px",
        width: "54px"
    },
    copyrightText: {
        color: "#fff",
        marginTop:"10.7px"
    },
    information: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        // marginTop:"39.1px",
        color: "#fff",
        width: "20%"
        // width: "433.1px"
    },
    informationHeading: {
        fontSize: "16px",
        fontWeight: "bold",
        textAlign:"left",
        marginBottom: "1px",
        color: "#fff"
    },
    infoText: {
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
        width: "100%",
        margin: "17px 0"
    },
    gridBox: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    aboutUs: {
        width: "100%",
        marginBottom: "16px",
        fontSize: "14px",
        textAlign: "left"
    },
    footerDivision: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        margin: "100px 0 50px 0",
        width: "100%",

    },
    logos: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px"
    },
    socialLogo: {
        margin: "0px 10px"
    },
}))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className = {classes.footerRoot}>
            <div className = {classes.footerDivision}>
                <div className = {classes.organic}>
                    <div className = {classes.logo}>
                        <img src = {Img} className = {classes.imgLogo} />
                    </div>
                    <div className = {classes.logoText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor 
                    </div>
                    <div className = {classes.copyright}>
                        <div className = {classes.blueLine}></div>
                        <div className = {classes.copyrightText}>
                            © Copyright 2020 Nature
                        </div>
                    </div>
                </div>
            
            <div className = {classes.information}>
                <div className = {classes.informationHeading}>
                    Information
                </div>
                <div className = {classes.blueLine2}>
                </div>
                <div className = {classes.infoText}>
                    <div className = {classes.gridBox}>
                        <div className = {classes.aboutUs}>
                            About Us
                        </div>
                        <div className = {classes.aboutUs}>
                            About Us
                        </div>
                    </div>
                    <div className = {classes.gridBox}>
                        <div className = {classes.aboutUs}>
                        Products
                        </div>
                        <div className = {classes.aboutUs}>
                        Products
                        </div>
                    </div>
                    <div className = {classes.aboutUs}>
                        Contact Us
                    </div>
                    <div className = {classes.aboutUs}>
                        Terms of Service
                    </div>
                </div>
            </div>
            <div className = {classes.followUs}>
                <div className = {classes.informationHeading}>
                    Follow Us
                </div>
                <div className = {classes.blueLine2}></div>
                <div className = {classes.logos}>
                    <img src = {Fb} className = {classes.socialLogo} style = {{marginLeft: "0px"}}></img>
                    <img src = {linkedIn} className = {classes.socialLogo}></img>
                    <img src = {Insta} className = {classes.socialLogo}></img>
                    <img src = {Fb} className = {classes.socialLogo}></img>
                </div>
            </div>
            </div>
        </div>
        
     );
}
 
export default Footer;