var FrontPageCopy = React.createClass({
  getInitialState: function() {
    if(window.location.hash) {
      var displayedCopy = window.location.hash.replace('#','');
    } else {
      var displayedCopy = 'default';
    }

    return {
      displayedCopy: displayedCopy
    };
  },

  openNavItem: function (itemText) {
    $('.content').removeClass('active');
    this.setState({ displayedCopy: itemText });
    Pjvw.Ga.sendPageView(itemText);
    window.location.hash = itemText;
    window.setTimeout(function() {
      $('.content').addClass('active');
    }, 200);
  },

  handleClick: function (e) {
    var navItemText = $(e.target).data('react-copy');
    if (navItemText) {
      this.openNavItem(navItemText)
    }
  },

  componentWillMount: function () {
    document.addEventListener('click', this.handleClick, false);
  },

  componentWillUnmount: function () {
    document.removeEventListener('click', this.handleClick, false);
  },

  render: function() {
    if(this.state.displayedCopy == 'about') {
      return(<About openNavItem={this.openNavItem}/>);
    } else if(this.state.displayedCopy == 'code') {
      return(<Code />);
    } else if(this.state.displayedCopy == 'k12') {
      return(<K12 />);
    } else if(this.state.displayedCopy == 'contact') {
      return(<ContactForm />);
    } else if(this.state.displayedCopy == 'resume') {
      return(<Resume />);
    } else {
      return(<Default />);
    }
  }
});

var Header = React.createClass({
  render: function() {
    return(
      <header>
          <noscript>
              <h1 class="logo">Peter van Wesep, Full Stack Engineer</h1>
          </noscript>
          <h1 class="logo"></h1>
          <a class="glyphicon-download-link" href='#'>
            <span class="glyphicon glyphicon-download" aria-hidden="true"></span>
          </a>
      </header>
    );
  }
});

var Default = React.createClass({
  render: function() {
    return(
      <section className="content">
        <p>Hi. My name is Peter. I'm a musician, cyclist and K-12 education activist.</p>
        <p>I also build websites.</p>
      </section>
    );
  }
});

var Resume = React.createClass({
  render: function() {
    return(
      <div className="resume content">
        <section className="work">
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
});

var About = React.createClass({
  openContactForm: function() {
    this.props.openNavItem('contact');
  },

  render: function() {
    return(
      <section className="content">
        <p>I am a web engineer happily located in Oakland, CA.</p>
        <p>I'm currently looking for full-time work and am also open to interesting consulting jobs.</p>
        <p>Please <a onClick={this.openContactForm}>get in touch</a> if you think I'd be a good fit for your project.</p>
      </section>
    );
  }
});

var Code = React.createClass({
  render: function() {
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
})

var K12 = React.createClass({
  render: function() {
    return(
      <section className='content'>
        <p>I've spent a large part of my life, in one form or another, pursuing my love of teaching.</p>
        <p>From giving piano lessons in high school, to pursuing a music education degree at Indiana University, to my work teaching after-school robotics with the Seattle YMCA, to my current role with <a href="http://tealsk12.org" target="_blank">TEALS</a> teaching 1st period computer science at Skyline High School in Oakland, I have always enjoyed interacting with and teaching kids.</p>
        <p>I am an advocate of the <a href="https://en.wikipedia.org/wiki/Small_schools_movement" target="_blank">small schools movement</a> and <a href="https://en.wikipedia.org/wiki/Project-based_learning" target="_blank">project-based</a> approaches to learning. I am an occasional critic of the Common Core State Standards, some aspects of charter schools (<a href="http://dianeravitch.net/2012/08/12/the-charter-school-threat/" target="_blank">mostly this one</a>) and any argument against increased funding for public education that ignores our country's unique and increasingly diverse ethnic, cultural and socioeconomic demographics.</p>
        <p>Mostly though, I just try to contribute in a way that seems helpful. I'll talk to teachers, administrators and students in an effort to figure out what that is.</p>
      </section>
    );
  }
});

ReactDOM.render(
  <FrontPageCopy />,
  document.getElementById('copy-container')
);
