class FrontPageCopy extends React.Component {
  constructor(props) {
    super(props);

    if(window.location.hash) {
      var displayedCopy = window.location.hash.replace('#','');
    } else {
      var displayedCopy = 'default';
    }

    this.state = { displayedCopy: displayedCopy };
    this.openNavItem = this.openNavItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openNavItem(itemText) {
    $('.content').removeClass('active');
    this.setState({ displayedCopy: itemText });
    Pjvw.Ga.sendPageView(itemText);
    window.location.hash = itemText;
    window.setTimeout(function() {
      $('.content').addClass('active');
    }, 200);
  }

  handleClick(e) {
    var navItemText = $(e.target).data('react-copy');
    if (navItemText) {
      this.openNavItem(navItemText)
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  render() {
    if(this.state.displayedCopy == 'code') {
      return(<Code />);
    } else if(this.state.displayedCopy == 'contact') {
      return(<ContactForm />);
    } else if(this.state.displayedCopy == 'resume') {
      return(<Resume />);
    } else if(this.state.displayedCopy == 'me') {
      return(<About />);
    } else {
      return(<About />);
    }
  }
}

class Header extends React.Component {
  render() {
    return(
      <header>
          <noscript>
              <h1 className="logo">Pete van Wesep, Engineering Leader</h1>
          </noscript>
          <h1 className="logo"></h1>
          <a className="glyphicon-download-link" href='#'>
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span>
          </a>
      </header>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.openContactForm = this.openContactForm.bind(this);
  }

  openContactForm() {
    this.props.openNavItem('contact');
  }

  render() {
    return(
      <section className="content">
        <p>Hands-on engineering leader with a proven record of elevating business value through software. Happily located in Seattle, WA 🌦️ ⛰️ 🌊</p>
        <p>Do you have an exciting project or idea? <a onClick={this.openContactForm}>Let's talk</a>!</p>
      </section>
    );
  }
}

class Resume extends React.Component {
  render() {
    return(
      <div className="resume content">
        <a href="resume.pdf" target="_blank"><i className="fas fa-print"></i></a>
        <section className="work">
          <h1>Director of Engineering at <a href="https://www.forgeglobal.com">Forge</a> (2018 - Present)</h1>
          <ul>
            <li>Manage multiple full-stack teams focused on providing services related to customer identity verification, risk management and user access controls</li>
            <li>Developed a C#-based customer identity aggregation service for KYC checks on ECS, utilizing tools like Harbor, Istio, Jaeger, and Dapr to ensure robust and efficient operations.</li>
            <li>Spearheaded design of an IDP-agnostic, policy-as-code user access management service</li>
            <li>Effectively managed my team through two major transitions - the 2020 merger of Sharespost and Forge Global and Forge’s 2021 debut as a public company. Adapted team workflows to meet the needs and compliance requirements of a publicly traded entity.</li>
            <li>Directed the rapid prototyping of Forge’s initial data product offering, Forge Intelligence. Applied sprint forecasting and in-depth retrospective analysis to ensure productivity and alignment with business goals.</li>
          </ul>
          <h1>Senior Software Engineer at <a href="https://www.brightbytes.net">BrightBytes</a> (2015 - 2018)</h1>
          <ul>
            <li>Led development and maintenance of multiple RoR platforms/APIs and Angular/React applications, championing agile methodologies to enhance team efficiency and product quality.</li>
            <li>Pioneered the dockerization of Rails/Elixir applications, streamlining the bootstrapping process and facilitating seamless deployment to AWS, thereby enhancing operational efficiency and scalability.</li>
            <li>Owned the development of a high-availability Elixir application leveraged by multiple platform services</li>
          </ul>
          <h1>Senior Software Engineer at <a href="https://www.tanga.com">Tanga.com</a> (2013 - 2015)</h1>
          <ul>
            <li>Contributed to e-commerce site built using AngularJS/Ruby on Rails. Development team embraced continuous integration/deployment, TDD, and striving for 100% paired code.</li>
          </ul>
          <h1>Software Engineer at <a href="http://upwork.com/">Upwork (formerly oDesk)</a> (2011 - 2013)</h1>
          <ul>
            <li>Built and maintained an e-commerce API using NodeJS, Express and Q promises library</li>
          </ul>
          <h1>Software Consultant (2009 - 2011)</h1>
          <ul>
            <li>Developed tool to allow non-technical users to flag meaningful sections of a document and automatically generate code to extract data from similarly formatted documents</li>
            <li>Deployed a Facebook application using Facebook’s PHP and JavaScript SDKs which provides users with an alternative interface for posting to pages they are fans of</li>
          </ul>
          </section>
        <section className="education">
          <h1>education</h1>
          <h1><p>University of Washington (Seattle, WA)</p></h1>
          <p>Bachelor of Science</p>
          <p>Major: Computer Science</p>
          <p>Graduated 2009</p>
        </section>
        <section className="research">
          <h1>publication</h1>
          <h1><p><a href="http://www.usenix.org/events/nsdi10/tech/full_papers/katz-bassett.pdf">Reverse Traceroute</a></p></h1>
          <p>Katz-Bassett, H. V. Madhyastha, V. Kumar Adhikari, C. Scott, J. Sherry, P. van Wesep, T. Anderson, A. Krishnamurthy</p>
          <p>USENIX Symposium on Networked Systems Design & Implementation</p>
          <p>April 28-30, 2010</p>
          <p>San Jose, CA</p>
          <p>Awarded Best Paper</p>
        </section>
      </div>
    );
  }
}

class Code extends React.Component {
  render() {
    return(
      <section className="content">
        <p>My experience writing code has led me to some preferred development practices:</p>
        <ol>
          <li>Feature development should be test-driven and new code should be written in small, easily testable units. Shortcuts which add technical debt should be avoided, with rare exceptions.</li>
          <li>Release cycles should be kept short, thus providing the team with a clear focus and giving stakeholders an immediate opportunity for feedback.</li>
          <li>All aspects of the development cycle which can be automated should be automated (eg. continuous testing/integration, code generators for any common implementation patterns). This avoids human error and allows developers to spend their time solving new problems.</li>
          <li>Teams should be kept small and tightly knit. Pairing on code whenever possible leads to higher code quality and increased communication among team members. A passionate, highly communicative development team achieves the best results.</li>
          <li>Any ideas that lead to suboptimal results should be deprecated in favor of better ideas.</li>
        </ol>
      </section>
    );
  }
}

ReactDOM.render(
  <FrontPageCopy />,
  document.getElementById('copy-container')
);
