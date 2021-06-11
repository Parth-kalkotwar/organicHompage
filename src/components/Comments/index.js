import { makeStyles } from '@material-ui/core/styles';
import Img1 from './Group 134.png';
import React from 'react';
import Img2 from './Group 86.png';
import Img3 from './woman-in-brown-jacket-and-black-shirt-3484683.webp';
import Rating from '@material-ui/lab/Rating';
import Img4 from './Group 114.png';
import { InputBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    pagination: {
        margin: "22px"
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
    },
    commentsRoot: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundImage: `url('${Img1}')`,
        backgroundPosition: "-1125px -300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        // backgroundColor: "black"
    },
    leftImg: {
        width: "352px",
        height: "1293px",
        objectFit: "cover",
        objectPosition: "100% 10px",
        // border: "5px solid black",
    },
    right: {
        margin: "50px 0 0px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url('${Img1}')`
    },
    commentImg: {
        width: "100px",
        height: "100px",
        margin: "30px 0px 18.5px 0px",
        borderRadius: "50%",
        objectFit: "cover",
        
    },
    commentName: {
        margin: "18.5px 0px 16px 0px",
        fontSize: "26px",
        color: "#374b5c",
        lineHeight: "1.35"
    },
    rating: {
        color: "#00bdb0"
    },
    comment: {
        // margin: "20px 32.3px 22px",
        width: "542px",
        fontSize: "16px",
        lineHeight: "2.5",
        textAlign: "center",
        color: "#374b5c",
    },
    subscribeButton: {
        backgroundColor: "#00bdb0",
        width: "167px",
        height: "60px",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "30px",
    } ,
    subscribe: {
        margin: "207px 0px 19px 0px",
        fontSize: "36px",
        color: "#374b5c"
    },
    subscribeText: {
        fontSize: "16px",
        maxWidth: "568px",
        textAlign: "center",
        marginBottom: "66px"
    },
    inputRoot: {
        display: "flex",

    },
    img4: {
        margin: "117.6px 0px 0px 0px"
    }
}))

const Comments = () => {
    const [value, setValue] = React.useState(2);
    const classes = useStyles()
    return ( 
        <div className={classes.commentsRoot} >
            <div className = {classes.right}>
                <img src = {Img2} alt = "Comment" />
                <img src = {Img3} className={classes.commentImg} />
                <div className = {classes.commentName}>
                    Jane Doe
                </div>
                <Rating
                    className = {classes.rating}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                <div className={classes.comment}>
                Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating. 
                    I’ve been roasting a lot of brussel sprouts and
                </div>
                <div className={classes.pagination}>
                    <span className = {classes.dot}></span>
                    <span className = {`${classes.dot} ${classes.current}`}></span>
                    <span className = {classes.dot}></span>
                    <span className = {classes.dot}></span>
                </div>
                <div className = {classes.subscribe}>
                    Subscribe to Our Newsletter
                </div>
                <div className={classes.subscribeText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className={classes.inputRoot}>
                    <InputBase style={{fontSize: "18px", color: "#374b5c", marginRight: "149px"}} placeholder="Enter your Email Address" />
                    <div className = {classes.button}>
                        <button className={classes.subscribeButton}>
                            Subscribe
                        </button>
                    </div>
                    
                </div>
                <div><img src={Img4} className = {classes.img4} /></div>
            </div>
            
        </div>
     );
}
 
export default Comments;