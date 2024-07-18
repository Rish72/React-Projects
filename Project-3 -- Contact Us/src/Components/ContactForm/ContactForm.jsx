import styles from "./ContactForm.module.css";
function ContactForm() {
  return (
    <section className={`${styles.form} container`}>
      {/* button Components */}
      <div className={styles.formDiv}>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea name="" id=""></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
      <img src="./public/images/contact.svg" alt="" />
    </section>
  );
}

export default ContactForm;
