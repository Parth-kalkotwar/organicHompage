import { makeStyles } from '@material-ui/core/styles';
import Img from './Group 205.png';
import Img2 from './Group 207.png';

const useStyles = makeStyles((theme) => ({
    
}))

export 

function Card(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <>
            {props.cardType && <img src = {Img} alt = "Card" />}
            {props.cardType == null && <img src = {Img2} alt = "Card" /> }
        </>
    );
  }

// const Card = (cardType) => {
//     const classes = useStyles();
//     console.log(props.cardtype)
//     return ( 
//         
//      );
// }
 
export default Card;