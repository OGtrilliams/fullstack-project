import { useContext, useState } from "react";
import { landingPageStyles } from "../assets/dummystyle";
import { LayoutTemplate, Menu, X } from "lucide-react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={landingPageStyles.container}>
      {/* header */}
      <div className={landingPageStyles.headerContainer}>
        <div className={landingPageStyles.logoContainer}>
          <div className={landingPageStyles.logoIcon}>
            <LayoutTemplate className={landingPageStyles.logoIconInner} />
          </div>
          <span className={landingPageStyles.logoText}>ResumeXpert</span>
        </div>

        {/* mobile menu button */}
        <button
          className={landingPageStyles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={landingPageStyles.mobileMenuIcon} />
          ) : (
            <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
          )}
        </button>
        {/* desktop navigation */}
        <div className="hidden md:flex items-center">{user}</div>
      </div>
    </div>
  );
};

export default LandingPage;
