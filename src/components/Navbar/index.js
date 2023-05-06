import clsx from 'clsx'
import { Link } from "react-router-dom"
import styles from './styles.module.scss'
import logo from '../../assets/images/logo-dep.png'
function Navbar() {
  return (
      <div className={ clsx(styles.container, "flex")}>
        <ul className={clsx(styles.listPage, 'flex')}>
          <img className = {clsx(styles.img)} src={logo} alt='Anh minh hoa' />
        <li >
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/news">News</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
      </ul>
      <ul className= {clsx(styles.listTools, "flex")}>
        <li>
        <i class="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
        <i class="fa-solid fa-gear"></i>
        </li>
        <li>
          <button>Buy Now</button>
        </li>
      </ul>
      </div >
    )
}
export default Navbar