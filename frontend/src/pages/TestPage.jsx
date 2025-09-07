import { useState } from "react";
import {
  AdditionalInfoForm,
  CertificationInfoForm,
  ContactInfoForm,
  EducationDetailsForm,
  ProfileInfoForm,
  ProjectDetailForm,
  SkillsInfoForm,
  WorkExperienceForm,
} from "../components/Forms";
import ThemeSelector from "../components/ThemeSelector";
import { DUMMY_RESUME_DATA } from "../utils/data";

const TestPage = () => {
  const [tabValue, setActiveTab] = useState("profile");
  const [resumeData, setResumeData] = useState(DUMMY_RESUME_DATA);
  return (
    <>
      TestPage
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        tenetur maiores iste dolore debitis? Quisquam?
      </h1>
      <AdditionalInfoForm />
      <ContactInfoForm />
      <CertificationInfoForm />
      <EducationDetailsForm />
      <ProfileInfoForm />
      <ProjectDetailForm />
      <SkillsInfoForm />
      <WorkExperienceForm />
      <ThemeSelector
        resumeData={resumeData}
        setActiveTab={setActiveTab}
        tabValue={tabValue}
      />
    </>
  );
};

export default TestPage;
