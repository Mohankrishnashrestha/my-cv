import Header from "./Header";
import "./App.css"
function App() {
  const information = {
    name: "Jan Kowalski",
    address: "Birmingham,UK",
    phone: 9812345678,
    email: "someone123@gmail.com",
  };
  const education = {
    course: "B.Sc.IT",
    college: "University of manchester, 2015",
  };
  const skills = {
    skills1: "Server management",
    skills2: "Network Management",
    skills3: "Security and Firewall Management",
    skills4: "Troubleshooting",
    skills5: "Backup and Digaster Recovery",
    skills6: "Hardware Management",
    skills7: "Directory Management",
  };

  const technical={
    

  }
  return (
    <div className="header_main">
    <div>
      <Header name={information} education={education} skills={skills} technical={technical} />
    </div>
    </div>
  );
}

export default App;
