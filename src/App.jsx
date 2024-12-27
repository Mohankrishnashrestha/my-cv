import Header from "./Header";
import "./App.css";
import Description from "./Description";
import Name from "./Name";
function App() {
  // for head
  const intro = {
    header: "JAN KOWALSKI",
  };
  // for header
  const information = {
    heading_personal: "PERSONAL INFORMATION",
    name: "Jan Kowalski",
    address: "Birmingham,UK",
    phone: 9812345678,
    email: "someone123@gmail.com",
  };
  const education = {
    heading_education: "EDUCATION",
    course: "B.Sc.IT",
    college: "University of manchester, 2015",
  };
  const skills = {
    heading_skill: "SKILLS",
    skills1: "Server management",
    skills2: "Network Management",
    skills3: "Security and Firewall Management",
    skills4: "Troubleshooting",
    skills5: "Backup and Digaster Recovery",
    skills6: "Hardware Management",
    skills7: "Directory Management",
  };

  const technical = {
    heading: "Technical Proficience",
    tech1: "Windows Server Administrator",
    tech2: "Linux Administraiton",
    tech3: "Virtulization",
    tech4: "Cloud Computing",
  };
  // for description
  const work_experiance = {
    work_experiance: "Work Experiance",
    position: "IT administrator,IBM United Kingdom LTD,2023-present",
    exp1: "Assisted in troubleshooting hardware and software issues for internal employees and clients, resolving over 100 support tickets within the internship period.",
    exp2: "Collaborated with senior IT staff to upgrade network infrastructure, resulting in improved system speed and reliability by 15%.",
    exp3: "Supported the development of a cloud-based inventory management system for a client, gaining hands-on experience with AWS and Microsoft Azure.",
    exp4: "Conducted software testing and quality assurance for new internal tools, identifying bugs and helping the development team address them.",
    exp5: "Documented technical procedures and user guides for IT systems, contributing to the company's knowledge base for future reference.",
  };
  const add_exp ={
    add_exp:"ADITIONAL EXPERIANCE",
      ae1:"Problem-Solving",
      ae2:"Critical Thinking",
      ae3:"Effective Communication",
      ae4:"Collaboration Tools",
      ae5:"Security Awareness",
      ae6:"Technical Troubleshooting",
  };
  const course={
    course:"COURSES AND CERTIFICATE",
    CC1:"Cloud Computing and Virtualization",
    CC2:"Certificate Network Associate",
    CC3:"CompTIA network",

  };

  return (
    <div className="header_main">
      <div className="header">
        <div className="name">
          <Name intro={intro} />
        </div>
        <div className="body">
        
          <div className="intro">
            <div className="margin">
            <Header
              name={information}
              education={education}
              skills={skills}
              technical={technical}
            />
            </div>
          </div>
          <div className="description">
            <div className="margin">
            <Description work_experiance={work_experiance} add_exp={add_exp} course={course} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
