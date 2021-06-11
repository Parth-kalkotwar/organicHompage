
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar'
import Hero from '../Hero'
import WelcomeToNature from '../WelcomeToNature'
import CardsDeck from '../CardsDeck';
import Deck2 from "../Deck2";
import Comments from '../Comments';
import ReadOurBlog from '../ReadOurBlog';
import Footer from '../Footer';


const useStyles = makeStyles((theme) => ({
    rectangle1: {
        backgroundImage: "linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0))"
    }
}))
const Homepage = () => {
    const classes = useStyles();
    return ( 
        <div>
            <div className={classes.rectangle1}>
                <Navbar />
                <Hero />
            </div>
            <WelcomeToNature />
            <CardsDeck />
            <Deck2 />
            <Comments />
            <ReadOurBlog />
            <Footer />
        </div>
     );
}
 
export default Homepage;