var ContactForm = React.createClass({
  getInitialState: function () {
    return {
      showSuccess: false,
      showFailure: false,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  setcontactForm: function(key, value) {
    this.state.contactForm[key] = value;
  },

  setAlert: function(status) {
    _this = this;
    console.log(status);
    if (status === 'success') {
      this.setState({showSuccess: true});
      window.setTimeout(function() {
        _this.setState({showSuccess: false});
      }, 3500);
    } else {
      this.setState({showFailure: true});
      window.setTimeout(function() {
        _this.setState({showFailure: false});
      }, 3500);
    }
  },

  render: function() {
    return(
      <div>
        <section className="content">
          { this.state.showSuccess ? <AlertSuccess /> : null }
          { this.state.showFailure ? <AlertFailure /> : null }
          <div className="container">
            <div className="row">
              <ContactFormName setcontactForm={this.setcontactForm} />
            </div>
            <div className="row">
              <ContactFormEmail setcontactForm={this.setcontactForm}  />
            </div>
            <div className="row">
              <ContactFormMessage setcontactForm={this.setcontactForm} />
            </div>
            <div className="hidden"><input id="nickname" name="nickname" hint='Leave this field blank!'/></div>
            <div className="row">
              <ContactFormSubmit setAlert={this.setAlert} contactForm={this.state.contactForm}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

var AlertSuccess = React.createClass({
  render: function() {
    return(
      <div class="alert alert-success" role="alert">
        <strong>Thanks!</strong> I'll get back to you as soon as I can.
      </div>
    );
  }
});

var AlertFailure = React.createClass({
  render: function() {
    return(
      <div class="alert alert-danger" role="alert">
        <strong>Hm...</strong>Your message wasn't sent. Maybe try me on <a href="https://www.linkedin.com/in/peter-van-wesep-1b6a7a10" class="alert-link">LinkedIn</a>?
      </div>
    );
  }
});

var ContactFormName = React.createClass({
  handleChange: function(e) {
    this.props.setcontactForm('name', e.target.value);
  },

  render: function() {
    return(
      <div className="form-group">
        <label className="col-sm-2 control-label">Name</label>
        <div className="col-sm-10">
          <input onChange={this.handleChange} type="text" className="form-control" id="name" name="name" placeholder="First & Last Name" required='true'/>
        </div>
      </div>
    );
  }
});

var ContactFormEmail = React.createClass({
  handleChange: function(e) {
    this.props.setcontactForm('email', e.target.value);
  },

  render: function() {
    return(
      <div className="form-group">
        <label className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" placeholder="example@domain.com" required/>
        </div>
      </div>
    );
  }
});

var ContactFormMessage = React.createClass({
  handleChange: function(e) {
    this.props.setcontactForm('message', e.target.value);
  },

  render: function() {
    return(
      <div className="form-group">
        <label className="col-sm-2 control-label">Message</label>
        <div className="col-sm-10">
          <textarea onChange={this.handleChange} className="form-control" rows="4" required name="message"></textarea>
        </div>
      </div>
    );
  }
});

var ContactFormSubmit = React.createClass({
  submit: function() {
    _this = this;
    $.post(
      '/contact_forms',
      { contact_form: this.props.contactForm },
      function(response, status) {
        _this.props.setAlert(status);
      }
    );
  },

  render: function() {
    return(
      <div className="form-group">
        <div className="submit col-sm-offset-9 col-sm-2 pull-left">
          <input onClick={this.submit} id="submit" name="submit" type="submit" value="Get in touch!" className="btn btn-primary"/>
        </div>
      </div>
    );
  }
});
