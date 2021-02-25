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
              <h1 className="logo">Pete van Wesep, Engineering Manager</h1>
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
        <p>I am a web engineer happily located in Seattle, WA.  I like to build software, enable high performance teams and workshop dad jokes with my family.</p>
        <p>We are <a href='https://jobs.lever.co/forge'>actively hiring</a> for our brand new Seattle office.</p>
        <p>Please <a onClick={this.openContactForm}>get in touch</a> if you're interested in applying or just getting in touch.</p>
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
          <h1>Engineering Manager at <a href="https://www.forgeglobal.com">Forge</a> (2020 - TBD)</h1>
          <ul>
            <li>Individual contributor.</li>
            <li>Coach direct reports on their personal and professional goals.</li>
            <li>Navigate the cultural side effects of merging with our biggest competitor's technology team.</li>
          </ul>
          <h1>Lead Engineer/Engineering Manager at <a href="https://www.sharespost.com">Sharespost</a> (2018 - 2020)</h1>
          <ul>
            <li>Led teams of 4-5 engineers responsible for improving the liquidity options available to employees and other shareholders of private market companies</li>
            <li>Coordinate architecture and development work of a high-volume secondary market trading platform</li>
          </ul>
          <h1>Senior Software Engineer at <a href="https://www.brightbytes.net">BrightBytes</a> (2015 - 2018)</h1>
          <ul>
            <li>Developed and maintained multiple RoR platforms/APIs and JS apps (Angular/React) while employing agile best practices</li>
            <li>Dockerized Rails/Elixir applications to simplify bootstrapping and allow for deployment to managed AWS infrastructure</li>
            <li>Responsible for interviewing new engineering candidates and making hiring decisions</li>
            <li>Led development of availability critical, cross-platform Elixir application</li>
            <li>Performed scheduled deployments of Elixir/RoR apps to managed infrastructure (Heroku, Convox)</li>
            <li>Refactored legacy code to remove unexpected side effects, inject dependencies and otherwise improve overall code quality</li>
            <li>Communicated frequently and effectively in a cross-functional team environment</li>
          </ul>
          <h1>Senior Software Engineer at <a href="https://www.tanga.com">Tanga.com</a> (2013 - 2015)</h1>
          <ul>
            <li>Implemented interactive customer service form in AngularJS/React capable of loading dynamic content through an internal API</li>
            <li>Wrote a large portion of non-trivial database queries/functions in SQL to avoid eager loading and other adverse side effects of using ActiveRecord</li>
            <li>Packaged distinct units of business logic into separate gems/services to aid testing and simplify development</li>
            <li>Member of scrum team committed to daily stand-ups, weekly planning/retrospectives and 100% paired code</li>
          </ul>
          <h1>Software Engineer at <a href="http://upwork.com/">Upwork (formerly oDesk)</a> (2011 - 2013)</h1>
          <ul>
            <li>Designed and deployed a RESTful ecommerce API using Node.js/Express/Q</li>
            <li>Led initiatives in all levels of the development cycle from monitoring/provisioning EC2 servers, to optimizing SQL/ActiveRecord queries, to implementing views using Bootstrap and Haml/Erb</li>
            <li>Wrote a mix of JS/CoffeeScript using jQuery, Backbone.js</li>
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
