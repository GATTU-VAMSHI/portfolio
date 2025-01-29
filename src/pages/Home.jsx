
import profile from '../assets/1699768892715.jpg'; 
import resume from '../assets/vamshi-resume.pdf'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="content">
          <h1>
            Hi, I&apos;m <br />
            <span>Gattu Vamshi</span>
          </h1>
          <h2>I am a Web Developer</h2>
          <p>
            Hello! 👋 I&apos;m a 21-year-old engineering student specializing in Artificial Intelligence. A self-motivated learner and open-source advocate, I thrive on exploring cutting-edge technologies and creating innovative projects. 
            With expertise in full-stack web development, I bring ideas to life using tools like HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Flask, and Django. My goal is to blend creativity and technical skills 
            to deliver impactful solutions and continuously grow in the tech world.
          </p>
          <a
            href={resume}
            className="btn"
            download="Vamshi-Resume.pdf"
          >
            Resume <i className="fa-regular fa-circle-down"></i>
          </a>
        </div>

        <svg
          className="home_blob"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="clipPath0">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </clipPath>
          <g clipPath="url(#clipPath0)">
            <rect width="200" height="187" fill="lightblue" />
            <image
              className="home_blob-img"
              href={profile}
              x="-20"
              y="-1"
              width="300"
              height="190"
              preserveAspectRatio="xMidYMid slice"
              alt="Profile"
            />
          </g>
        </svg>
      </section>
    </div>
  );
};

export default Home;
