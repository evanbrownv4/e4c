import "./ContactUs.css";
import emailIcon from "./assets/email_icon.png";
import instagramIcon from "./assets/instagram_logo.jpeg";
import linkedinIcon from "./assets/linkedin_logo.png";
import edf from "./assets/edf_logo.jpeg";
import plp_labs from "./assets/plp_labs_logo.png";
import siemens from "./assets/siemen_logo.webp";

const contacts = [
  {
    method: "Email",
    name: "engineering4change.ed@gmail.com",
    icon: emailIcon,
    link: "mailto:engineering4change.ed@gmail.com",
  },
  {
    method: "Instagram",
    name: "@eoee4c",
    icon: instagramIcon,
    link: "https://instagram.com/uoee4c",
  },
  {
    method: "LinkedIn",
    name: "Engineering For Change - University of Edinburgh",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/company/engineering-for-change-university-of-edinburgh/",
  },
];

const previous_sponsors = [
    {
        name: "EDF",
        logo: edf
    }
]

const current_sponsors = [
    {
        name: "PLP Labs",
        logo: plp_labs
    },
    {
        name: "Siemens",
        logo: siemens
    }
]

function ContactMethods(props: {
  contacts: Array<{
    method: string;
    name: string;
    icon: string;
    link: string;
  }>;
}) {
  return (
    <div className="contact_methods">
      {props.contacts.map((contact) => (
        <div key={contact.name} className="contact_card">
          <img
            src={contact.icon}
            alt={contact.name}
            className="contact_icon"
          />
          <div>
            <h3 className="contact_method">{contact.method}</h3>
            <p className="contact_name">
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
    <div className="contactus_page">
      <h2 className="contactus_title">Get in Touch</h2>
      <p className="contactus_intro">
        E4C are always looking for sponsors and collaborators. Reach out to us
        through the channels below or explore our sponsor partnerships.
      </p>

      <div className="contactus_container">
        {/* Left column: Contact methods */}
        <ContactMethods contacts={contacts} />

        {/* Right column: Sponsors */}
        <div className="sponsors">
          <h2>Current Sponsors</h2>
          <div className="sponsor_list">
            {current_sponsors.map((sponsor) => (
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor_logo" />
            ))}
          </div>

          <h2>Previous Sponsors</h2>
          <div className="sponsor_list">
            {previous_sponsors.map((sponsor) => (
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor_logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
