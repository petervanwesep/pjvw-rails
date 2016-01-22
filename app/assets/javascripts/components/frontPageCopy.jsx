open


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
    } else {
      return(<Default />);
    }
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

var About = React.createClass({
  openContactForm: function() {
    console.log(this.props);
    this.props.openNavItem('contact');
  },

  render: function() {
    return(
      <section className="content">
        <p>I am a web engineer happily located in Oakland, CA.</p>
        <p>I'm currently looking for full-time work and am also open to interesting consulting jobs.</p>
        <p>Please <a onClick={this.openContactForm}>get in touch</a> you think I'd be a good fit for your project.</p>
      </section>
    );
  }
});

var Code = React.createClass({
  render: function() {
    return(
      <section className="content">
        <p>Unlike most professions, coding lets me create digital worlds out of a few hundred lines of text. Unfortunately, it also lets me create entire worlds of pain in even fewer.</p>
        <p>I've adopted a few guidelines that help me stay (for the most part) in the former camp:</p>
        <ol>
          <li>Code should be well-tested and easy to maintain. While acquiring technical debt may be necessary for rapid developement, it should be paid off as soon as possible.</li>
          <li>Release cycles should be kept short, thus providing the team with a clear focus and giving stakeholders an immediate opportunity for feedback.</li>
          <li>Teams should be small and tightly knit. Code should be paired on whenever possible. One phrase that has stuck with me is to consider "people as your product". Without highly collaborative teams who are passionate about their product, it is impossible to achieve the best results.</li>
          <li>And finally, ideas that do not lead to the best results should be abandoned for better ideas. It may sound obvious, but bad results are settled for often enough that it bears articulating.</li>
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
        <p>From giving piano lessons in high school, to pursuing a music education degree at Indiana University, to my work teaching after-school robotics with the Seattle YMCA, to my current role with <a href="http://tealsk12.org">TEALS</a> teaching 1st period computer science at Skyline High School in Oakland, I have always found joy interacting with and teaching kids.</p>
        <p>I am an advocate of the <a href="https://en.wikipedia.org/wiki/Small_schools_movement">small schools movement</a> and <a href="https://en.wikipedia.org/wiki/Project-based_learning">project-based</a> approaches to learning. I am an occasional critic of the Common Core State Standards, some aspects of charter schools (<a href="http://dianeravitch.net/2012/08/12/the-charter-school-threat/">mostly this one</a>) and any argument against increased funding for public education that ignores our country's unique and increasingly diverse ethnic, cultural and socioeconomic demographics.</p>
        <p>Mostly though, I just try to contribute in a way that seems helpful. I'll talk to teachers, administrators and students in an effort to figure out what that is.</p>
      </section>
    );
  }
});

ReactDOM.render(
  <FrontPageCopy />,
  document.getElementById('copy-container')
);
