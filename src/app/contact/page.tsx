import React from 'react';
import styles from "./contact.module.css";
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We love to hear
                        <span> from you </span>
                    </h2>
                    <ContactForm />
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0540839968467!2d74.28788617610752!3d31.467698374238218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903aeafae476b%3A0x23d345ead26d963!2sDev%20Blends!5e0!3m2!1sen!2s!4v1694441122275!5m2!1sen!2s"
                width={100} height={450} style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
};

export default Contact;