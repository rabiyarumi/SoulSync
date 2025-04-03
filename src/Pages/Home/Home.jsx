import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import MembershipPlan from "./MembershipPlan";
import PremiumBiodata from "./PremiumBiodata";
import SuccessMarried from "./SuccessMarried";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div className="">
        
        <Banner/>
        <PremiumBiodata/>
        <HowItWorks/>
        <WhyChooseUs />
        <MembershipPlan />
        <SuccessMarried/>
      </div>
    );
};

export default Home;