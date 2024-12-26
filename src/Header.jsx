/* eslint-disable react/prop-types */

function Header(props) {
  const { name, address, phone, email } = props.name;
  const { course, college } = props.education;
  const { skills1, skills2, skills3, skills4, skills5, skills6, skills7 } =
    props.skills;
  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <h4>PERSONAL DETAIL</h4>
        <div>
          <b>Name:</b>
          <br />
          {name}
          <br />
          <b>Address:</b>
          <br />
          {address}
          <br />
          <b>Phone Number:</b>
          <br />
          {phone}
          <br />
          <b>Email:</b>
          <br />
          {email}
          <br />
        </div>
      </div>
      <div>
        <h4>EDUCATION</h4>
        <div>
          {course}
          <br />
          {college}
        </div>
      </div>
      <div>
        <h4>SKILLS</h4>
        <div>
          <ul>
            <li> {skills1}</li>
            <li> {skills2}</li>
            <li> {skills3}</li>
            <li> {skills4}</li>
            <li> {skills5}</li>
            <li> {skills6}</li>
            <li> {skills7}</li>
          </ul>
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
}

export default Header;
