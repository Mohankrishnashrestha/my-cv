/* eslint-disable react/prop-types */

function Header(props) {
    const {name, address, phone, email }=props.name;
    const{}
  return (
    <>
    <div>
        <h1>{name}</h1>
    </div>

    <div>
    <h2>PERSONAL DETAIL</h2>
    <div>
        <b>Name:</b><br/>{name}<br/>
        <b>Address:</b><br/>{address}<br/>
        <b>Phone Number:</b><br/>{phone}<br/>
        <b>Email:</b><br/>{email}<br/>
    </div>
    </div>
    <div>
        <h2>
            EDUCATION
        </h2>
        <div>

        </div>
    </div>
    </>
  )
}

export default Header