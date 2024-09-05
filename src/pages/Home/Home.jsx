import AboutSec from "../../components/AboutSec/AboutSec";
import Banner from "../../components/Banner/Banner";
import Buy from "../../components/Buy/Buy";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import Join from "../../components/Join/Join";
import MarqLogo from "../../components/MarqLogo/MarqLogo";
import Roadmap from "../../components/Roadmap/Roadmap";
import Token from "../../components/Token/Token";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MarqLogo></MarqLogo>
            <AboutSec></AboutSec>
            <Token></Token>
            <Buy></Buy>
            <Roadmap></Roadmap>
            <Join></Join>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;