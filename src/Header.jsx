/* eslint-disable react/prop-types */
import "./header.css"
function Header(props) {
  const { heading_personal, name, address, phone, email } = props.name;
  const { heading_education, course, college } = props.education;
  const {
    heading_skill,
    skills1,
    skills2,
    skills3,
    skills4,
    skills5,
    skills6,
    skills7,
  } = props.skills;
  const { heading, tech1, tech2, tech3, tech4 } = props.technical;
  return (
    <>
      <div>
        <h4>{heading_personal}</h4>
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
        <h4>{heading_education}</h4>
        <div>
          {course}
          <br />
          {college}
        </div>
      </div>
      <div>
        <h4>{heading_skill}</h4>
        <div className="ul_li">
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
        <div></div>
      </div>
      <div>
        <h4>{heading}</h4>
        <div className="ul_li">
        <ul>
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
          <li>{tech4}</li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
