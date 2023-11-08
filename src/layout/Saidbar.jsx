
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const Saidbar = (props) => {


    return (
        <>
            <div className={`saidbar position-${props.toggle ? 'fixed' : 'relative'} col-md-2`} style={{ minHeight: '91vh',  transform: props.toggle ? 'translate(-100%)' : 'translate(0%)', transition : '300ms ese in out', backgroundColor : '#f2f2f2' }}>
                <ul className="mt-4">
                    <li><span><BiSolidDashboard /> </span>Deshboard</li>
                    <li><span><BiSolidUser /> </span>User</li>
                    <li><span><AiTwotoneSetting /> </span>Setting</li>
                </ul>
            </div>
        </>
    )
}
export default Saidbar