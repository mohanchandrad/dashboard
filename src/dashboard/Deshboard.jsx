import { useState } from "react"
import Header from "../layout/Header"
import Saidbar from "../layout/Saidbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employer from "../pages/Employer"
// import PrivateRoute from "../privateRoute/privateRoute"

const Deshboard = () => {

    const [toggle, setToggle] = useState(false)


    console.log(toggle);
    return (

        <>
                <div className="container-fliude">
                    <Header setToggle={setToggle} toggle={toggle} />
                    <div className="d-flex gap-0">
                        <Saidbar toggle={toggle} />
                        <div className={`${toggle === true && 'col-12'}`}>

                            <Routes>
                                <Route path="/desh/employ" element={<Employer />} />
                            </Routes>

                            {/* <PrivateRoute /> */}
                            khjjjk
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Deshboard