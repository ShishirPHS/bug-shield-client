import Banner from "../../components/Banner/Banner";
import PopularServices from "../../components/PopularServices/PopularServices";
import TrustedPartner from "../../components/TrustedPartner/TrustedPartner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <WhoWeAre></WhoWeAre>
      <TrustedPartner></TrustedPartner>
    </div>
  );
};

export default Home;
