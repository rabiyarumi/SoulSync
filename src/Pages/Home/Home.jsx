import Banner from "./Banner";
import FAQ from "./FAQ";
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
        <FAQ />
      </div>
    );
};

export default Home;