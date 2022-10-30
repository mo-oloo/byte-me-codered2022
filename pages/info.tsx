import styles from '../styles/Home.module.css'


export default function Form() {
    return (
        <form action="/api/form" method="post" className={styles.form}>
            <label htmlFor="first" className={styles.input}>First Name:</label>
            <input type="text" id="first" name="first" required />
            <label htmlFor="last" className={styles.input}>Last Name:</label>
            <input type="text" id="last" name="last" required />
            <label htmlFor="major" className={styles.input}>Major:</label>
            <input type="text" id="major" name="major" required />
            <label htmlFor="year" className={styles.input}>Starting Year:</label>
            <input type="text" id="year" name="year" required />
            <label htmlFor="summer" className={styles.label}>What type of classes do you take?</label>
            <label htmlFor="summer">Summer</label>
            <input type="checkbox" id="semester" name="summer" className={styles.checkbox}></input>
            <label htmlFor="summer">Honors</label>
            <input type="checkbox" id="semester" name="honors" className={styles.checkbox}></input>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    )
}