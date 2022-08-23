import React from "react";
import ContactItem from "./ContactItem";

function ContactList ({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                //digunakan fungsi map() untuk mengambil senarai number dan menggandakan nilai 
                contacts.map((contact) => (
                    //key harus disediakan untuk item di dalam list. Sebuah "key" adalah atribut string spesial perlu anda sertakan dalam pembuatan list element
                    <ContactItem 
                    key={contact.id}
                    id= {contact.id}
                    onDelete= {onDelete}
                     {...contact} />
                ))
            }
        </div>
    );
}
export default ContactList;