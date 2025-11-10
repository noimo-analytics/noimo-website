import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import work from '../images/work.jpg'
import about from '../images/about.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Noimo ApS is a technology company specialised in data analytics and data engineering solutions.
            Take a look at our <a href="#work">work</a>.
          </p>
          <p>
            Noimo through innovative software development helps clients with data at scale through
            cloud native technologies and applied machine learning.
          </p>
          <p>
            <b>Features:</b>
            <ul>
                <li>Cloud native platform development</li>
                <li>Data engineering for data intense applications</li>
                <li>Data science consulting and development</li>
                <li>Data Analytics and applied ML</li>
                <li>Microservices and application lifecycle</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={work} alt="" />
          </span>
          <p>
          At Noimo, we've had the privilege of providing advanced analytics services to clients across several key sectors, including pharmaceutical, financial services, and biotech.
          This diverse experience allows us to distinguish ourselves by offering comprehensive, end-to-end solutions, covering the entire spectrum from robust infrastructure design to   
          cutting-edge Machine Learning and Agentic AI implementations. We specialize in building the foundational data architectures necessary to support advanced analytics, 
          and we possess the expertise to develop and deploy sophisticated ML models and intelligent agent-based systems. Whether it's designing scalable cloud environments, implementing efficient data pipelines, 
          or creating AI-driven applications, Noimo provides a holistic approach to transform your data into actionable insights and intelligent automation.
          </p>
          <p>
          <b>Repositories showcase our work:</b>
            <ul>
                <li><a href="https://github.com/DimitrisDallas/Kubernetes" target="_blank" rel="noopener noreferrer">Kubernetes</a>: Demonstrates experience with container orchestration and cloud-native technologies</li>
                <li><a href="https://github.com/noimo-analytics/deep-research" target="_blank" rel="noopener noreferrer">Deep Research</a>: Showcases our exploration and experimentation in deep learning and AI</li>
                <li><a href="https://github.com/noimo-analytics/personal-assistant" target="_blank" rel="noopener noreferrer">Personal Assistant</a>: Highlights our capabilities in developing agentic AI and intelligent automation solutions</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
            We are a team of dedicated software engineers and data scientists passionate about building intelligent solutions. 
            At Noimo, we specialize in leveraging the latest advancements in AI, particularly Agentic AI, to create robust, scalable, and commercially-driven systems. 
            We thrive on tackling complex data engineering challenges, always with a focus on delivering tangible value to our clients.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact"
                method="post"
                data-netlify="true"
            >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dimitris-dallas-36595657/" className="icon fa-linkedin">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/noimo-analytics"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
