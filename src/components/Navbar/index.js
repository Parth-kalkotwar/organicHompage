import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Img from './Group 220.png';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage:""
  },
  mainNavbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // border:"2px solid black",
    marginRight:"23px"
  },
  toolbar: {
    backgroundColor:'inherit',
    color:'black',
    shadows:'none',
    margin: "10px"
  },
  leftNavbar: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: "10px 10px 0.5px 144px"
  },
  title: {
    margin: "14px 23px 7px 23px",
    fontFamily: "LibreBaskerville",
    fontSize: "16px",
    lineHeight: "1.31",
    textAlign: "left",
    border: "3px solid transparent",
    color: "#374b5c",
    "&hover": {
      cursor: "pointer",
      color:"red"
    }
  },
  organic: {
    // border: "2px solid black",
    width: "148px",
    height:"56px",
    margin: "5px",
    fontFamily: "LibreBaskerville",
    fontSize: "42px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#374b5c",
  },
  logoImg: {
    //   border:"2px solid black"
  },
  selected: {
      
      borderBottom: "3px solid #00dbd0"
  },
  bordered: {
    padding: "12px 48px 13px 38px",
    borderRadius: "10px",
    border: "solid 3px #00dbd0"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  return (
        <div className={classes.mainNavbar}>
            <div className={classes.leftNavbar}>
                <img className={classes.logoImg} src={Img}></img>
                <div className={classes.organic}>
                    organic
                </div>
            </div>
            <div className={classes.right}>
                <Toolbar className={classes.toolbar}>
                    <Link href = "#" className={`${classes.title} ${classes.selected}`}>
                        Home
                    </Link>
                    <Link href="#" className={classes.title}>
                      Link
                    </Link>
                    <Link href="#" className={classes.title}>
                        Blog
                    </Link>
                    <Link href="#" className={classes.title}>
                        About Us
                    </Link>
                    <Link href="#" className={`${classes.title} ${classes.bordered}`}>
                        Contact
                    </Link>
                </Toolbar>
            </div>
        </div>
  );
}
