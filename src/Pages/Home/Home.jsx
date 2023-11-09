import Banner from "../../components/Banner/Banner";
import PopularServices from "../../components/PopularServices/PopularServices";
import QuestionAndAnswer from "../../components/QuestionAndAnswer/QuestionAndAnswer";
import TrustedPartner from "../../components/TrustedPartner/TrustedPartner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <WhoWeAre></WhoWeAre>
      <TrustedPartner></TrustedPartner>
      <QuestionAndAnswer></QuestionAndAnswer>
    </div>
  );
};

export default Home;
