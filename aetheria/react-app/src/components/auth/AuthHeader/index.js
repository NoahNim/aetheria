import styles from "./AuthHeader.module.css";
const AuthHeader = () => {
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.logo}>Aetheria</div>
		</div>
	);
};

export default AuthHeader;