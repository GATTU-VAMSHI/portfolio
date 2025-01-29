import  { useState } from 'react'; // Import your styles (if any)

const Qualifications = () => {
  // State to manage active tab (Education, etc.)
  const [activeTab, setActiveTab] = useState('Education');

  // Qualifications data
  const qualifications = {
    Education: [
      {
        title: 'BTech Artificial Intelligence & Data Science',
        institution: 'Dhanalakshmi Srinivasan University',
        date: '2022 - 2026',
      },
      {
        title: 'Senior Secondary School',
        institution: 'Shivani Junior College',
        date: '2020 - 2022',
      },
      {
        title: 'Secondary School',
        institution: 'M.G.M High School',
        date: '2019 - 2020',
      },
    ],
    // You can add more categories like 'Certifications' or 'Courses' here if needed
  };

  return (
    <div>
      <h1 className="heading">Qualifications</h1>
      <main id="home">
        <div className="qualifications">
          <div className="tabs">
            {/* Tab buttons */}
            <button
              className={`tab ${activeTab === 'Education' ? 'active' : ''}`}
              onClick={() => setActiveTab('Education')}
            >
              Education
            </button>
            {/* You can add more tabs here for other categories */}
          </div>

          <div className="timeline">
            {/* Timeline items based on active tab */}
            {qualifications[activeTab]?.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <p className="date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Qualifications;
