import "../styling/Layout.css"
import "../styling/Components.css"
import PageContainer from "../styling/PageContainer.tsx"
import { contacts } from "../consts/Contacts.tsx"

type ContactMethod = {
    method: string;
    name: string;
    icon: string;
    link: string;
}

function ContactMethods({ contacts } : { contacts: Array<ContactMethod> }) {
    return (
        <div className="grid grid-auto-medium">
            {contacts.map((contact) => (
                <div key={contact.name} className="card max-w-75">
                    <img src={contact.icon} alt={contact.name} className="card-img" />
                    <div>
                        <h3 className="title">{contact.method}</h3>
                        <p className="text">
                            <a href={contact.link}>{contact.name}</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Contact() {
    return (
        <PageContainer>
            <h1 className="text-6xl text-center mb-4">Get in Touch</h1>
            <p className="text-xl text-left">
                E4C are always looking for sponsors and collaborators. Reach out to us
                through the channels below or explore our sponsor partnerships.
            </p>
                <ContactMethods contacts={contacts}/>
        </PageContainer>
    );
}
