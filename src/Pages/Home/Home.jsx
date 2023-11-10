import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category";
import Features from "./Features/Features";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Features></Features>
        </div>
    );
};

export default Home;