import Header from "./Header"

function App() {
 const information={
  name : "Mohan Krisha Shrestha",
  address:"Bhakunde,Kavre",
  phone:9812345678,
  email:"shresthamohan828@gmail.com",
 }
 const education={
  cousre:"B.Sc.CSIT",
  collge:"Nist",
 }

  return (
    <div>
      <Header name={information} education={education}/>
    </div>
    

  )
}

export default App