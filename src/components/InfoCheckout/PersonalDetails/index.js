import clsx from "clsx";
import styles from "./styles.module.scss"

export default function PersonalDetails(){
    return(
        <div>
                    <h2><span>1</span> Personal Details</h2>
                    <div className={clsx(styles.signIn)}>
                        <p>Sign in with</p>
                        <div><i class="fa-brands fa-facebook"></i><p>Facebook</p></div>
                        <div><i class="fa-brands fa-google"></i><p>Google</p></div>
                        <div><i class="fa-regular fa-envelope"></i><p>Continue With Email</p></div>
                    </div>
                    <div className={clsx(styles.infoUser)}>
                        <div className={clsx(styles.dataInfo)}>
                            <div>
                                <label for="firstName">First Name</label>
                                <input id="firstName" type="text" />
                            </div>
                            <div>
                                <label for="lastName">Last Name</label>
                                <input id="lastName" type="text" />
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input id="password" type="password" />
                            </div>
                        </div>
                        <div className={clsx(styles.dataInfo)}>
                            <div>
                                <label for="email">Email Address</label>
                                <input id="email" type="text" />
                            </div>
                            <div>
                                <label for="phone">Phone Number</label>
                                <input id="phone" type="text" />
                            </div>
                            <div>
                                <label for="confirm">Confirm Password</label>
                                <input id="confirm" type="password" />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
    )
}