import styles from "./styles.module.scss"
import logo from "../../assets/images/logo-dep.png"
import appstore from "../../assets/images/appstore.png"
import ggplay from "../../assets/images/ggplay.png"
import clsx from "clsx"
function Footer() {
    return (
        <>
        <hr/>
            <div className = {clsx(styles.footer)}>
                <div className={clsx(styles.boxFooter1)}>
                    <img className = {clsx(styles.imglogo)} src={logo} alt="anh minh hoa" />
                    <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
                    <div>
                        <h2>Community</h2>
                        <p>Documentation</p>
                        <p>Changelog</p>
                        <p>Contributing</p>
                    </div>
                    <div>
                        <h2>Let’s stay in touch</h2>
                        <p>Ubscribe to our newsletter to receive latest articles to your inbox weekly.</p>
                        <div className={styles.boxEmail}>
                            <input className= {styles.input} placeholder="Email address" />
                            <button className={styles.Subcribe}>Subcribe</button>
                        </div>
                    </div>

                </div>
                <div className={clsx(styles.boxFooter2)}>
                    <div>
                        <h2>Social</h2>
                        <ul className={clsx(styles.listSocial)}>
                            <li><i class="fa-brands fa-square-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Apps</h2>
                        <div className={clsx(styles.social)}>
                            <img className={clsx(styles.imgAppstore)} src={appstore} alt="anh minh" />
                            <img className = {clsx(styles.imgGgplay)} src={ggplay} alt="anh minh hoa" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer