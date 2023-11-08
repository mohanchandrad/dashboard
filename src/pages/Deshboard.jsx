import { useState } from "react"
import Header from "../layout/Header"
import Saidbar from "../layout/Saidbar"

const Deshboard = () => {

    const [toggle, setToggle] = useState(false)


    console.log(toggle);
    return (
        <>
            <div className="container-fliude">
                <Header setToggle={setToggle} toggle={toggle}  />
                <div className="d-flex gap-0">
                    <Saidbar toggle={toggle} />
                    <div className={`${toggle === true && 'col-12'}`}>
                        <h1>Deshboard</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Deshboard