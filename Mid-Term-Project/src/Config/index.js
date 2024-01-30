import { Route , Routes } from "react-router-dom";
import DashBoard from '../Component/Views/Dashboard/index'
import DetailScreen from "../DetailScreen/screens/BackToTop/index";

function Router(){
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DashBoard/>}/>
                <Route path="/DetailScreen/:adId" element={<DetailScreen/>}/>
            </Route>
        </Routes>
    )
}

export default Router;