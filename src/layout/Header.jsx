
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";

const Header = (props) => {
console.log(props);
    return (
        <>
            <header className="d-flex align-items-center px-5" style={{ height : '70px', backgroundColor : '#f2f2f2'}}>
                <div className="d-flex w-100">
                        <div className="col-md-6">
                            <GiHamburgerMenu onClick={()=>props.setToggle(!props.toggle)} style={{ width: '31px', height: '37px'}} />
                        </div>

                        <div className="col-md-6 text-end  ">
                            <div className="box ms-auto bg-primary text-light">   <BiSolidUser /></div>
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header