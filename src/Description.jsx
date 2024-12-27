/* eslint-disable react/prop-types */
import "./description.css"
function Description(props) {
    const { work_experiance, position, exp1, exp2, exp3, exp4, exp5 } =
      props.work_experiance;
      const{add_exp, ae1, ae2, ae3, ae4, ae5, ae6}=props.add_exp;
      const{course, CC1, CC2, CC3}=props.course
  return (
    <>
    <div>
        <h4>{work_experiance}</h4>
            <b>{position}</b>
            <div className="ul_li">
                <ul>
                    <li>{exp1}</li>
                    <li>{exp2}</li>
                    <li>{exp3}</li>
                    <li>{exp4}</li>
                    <li>{exp5}</li>
                </ul>
            </div>
            <hr/>
            <div>
                <h4>{add_exp}</h4>
                <div className="ul_li">
                <ul>
                    <li>{ae1}</li>
                    <li>{ae2}</li>
                    <li>{ae3}</li>
                    <li>{ae4}</li>
                    <li>{ae5}</li>
                    <li>{ae6}</li>
                </ul>
                </div>
            </div>
            <hr/>
            
    </div>
    <div>
        <h4>{course}</h4>
        <div className="ul_li">
        <ul>
            <li>{CC1}</li>
            <li>{CC2}</li>
            <li>{CC3}</li>
        </ul>
        </div>

    </div>

    </>
  )
}

export default Description