import React, { Component } from "react";
import { Form, Alert } from "reactstrap";
import {
  CustomButton,
  CustomInput
} from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import api from "../../../configs/api";

class LandingContact extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    message: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(api);
  };

  sendContact = async data => {
    try {
      const { name, email, company, message } = this.state;
      const response = await axios({
        method: "POST",
        url: `${api}/contactus`,
        data: {
          firstName: name,
          lastName: name + "last",
          company: company,
          subject: "kerjoan",
          content: message,
          email: email
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error, error.response);
    }
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, company, message } = this.state;
    if (name && email && company && message) {
      this.sendContact();
      this.setState({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } else {
      return alert("all fields required");
    }
  };

  render() {
    const { name, email, company, message } = this.state;
    return (
      <div className="layout__container">
        <div className="landingContact">
          <Translate
            component="p"
            className="main"
            content="landingContact.head"
          />
          <Translate
            component="p"
            className="sub"
            content="landingContact.sub"
          />
          <Translate
            component="p"
            className="info"
            content="landingContact.info"
          />
          <Form className="landingContact__form" onSubmit={this.submitHandler}>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1}
              delay={200}
              className="landingContact__inputs"
            >
              <CustomInput
                inputType="text"
                placeholder="Name"
                inputId="name"
                required={true}
                className="landingContact__input"
                onChange={this.changeHandler}
                value={name}
              />
              <CustomInput
                inputType="email"
                placeholder="Email"
                inputId="email"
                required={true}
                className="landingContact__input"
                onChange={this.changeHandler}
                value={email}
              />
              <CustomInput
                inputType="text"
                placeholder="Company"
                inputId="company"
                required={true}
                className="landingContact__input"
                onChange={this.changeHandler}
                value={company}
              />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1}
              delay={300}
              className="landingContact__textarea"
            >
              <CustomInput
                inputType="textarea"
                placeholder="Write a Message"
                inputId="message"
                required={true}
                className="landingContact__input"
                rows={5}
                onChange={this.changeHandler}
                value={message}
              />
              </ScrollAnimation>
            <CustomButton
              btnText={<Translate content="landingContact.contactBtn" />}
              // btnText="Kirim"
              className="landingContact__btn"
              btnColor="green"
              btnType="submit"
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default LandingContact;
