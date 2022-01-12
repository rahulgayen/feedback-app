For Styling Links
NavLink


for query paramenter
<Link to="/about/:name/:id/:address">Back to Home</Link>

in the component 
import useParams from "react-router-dom"
params = useParams()
let {name, id, address} = params


programmatic navigation

import { Navigate } from "react-router-dom"

(condition)?<Navigate to="/about" />:null

or 

import {useNavigate} from "react-router-dom"

navigate=useNavigate()
navigate("/about")

Nested Routes

declare in the parent component then /post/show will work
<Routes>
    <Route path="/show" element={component} />
</Routes>

and in App.js Route
<Route path="/post/*" element={component} />