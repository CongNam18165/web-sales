import './styles.module.css'
import { Link } from "react-router-dom"
function Navbar(){
    return(
      <div>
        <ul className="flex">
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/news">News</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
      </ul>
      <p>Home</p>
      </div>
    )
}
export default Navbar