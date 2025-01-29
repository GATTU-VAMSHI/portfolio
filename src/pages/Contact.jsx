

const Contact = () => {
  const contactDetails = [
    {
      iconClass: 'fa-solid fa-envelope',
      title: 'Email',
      link: 'mailto:gattuvamshi17@gmail.com',
      linkText: 'gattuvamshi17@gmail.com',
    },
    {
      iconClass: 'fa-solid fa-phone',
      title: 'Phone',
      link: 'tel:+917815867795',
      linkText: '+917815867795',
    },
    {
      iconClass: 'fa-brands fa-linkedin',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gattu-vamshi-25058b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      linkText: 'Visit profile',
    },
    {
      iconClass: 'fa-brands fa-github',
      title: 'GitHub',
      link: 'https://github.com/GATTU-VAMSHI',
      linkText: 'Visit Repo',
    },
  ];

  return (
    <div>
      <h1 className="heading">Contact</h1>
      <p className="head-p">Want to connect? My inbox is always open!</p>
      <main id="home">
        <div className="contact-container">
          <div className="contact-options">
            {contactDetails.map((contact, index) => (
              <div className="contact-item" key={index}>
                <i className={`${contact.iconClass} icon`}></i>
                <h3>{contact.title}</h3>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
