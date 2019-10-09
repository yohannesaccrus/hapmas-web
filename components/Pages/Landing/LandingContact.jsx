import { Form } from "reactstrap";
import {
  CustomButton,
  CustomInput
} from "../../CustomComponents/CustomComponents";
const LandingContact = () => (
  <div className="layout__container">
    <div className="landingContact">
      <p className="main">Let's Have a Coffee</p>
      <p className="sub">and Enhance your Business</p>
      <p className="info">
        Fill Out this simple form. Our team will contact you promptly <br /> to
        discuss the next steps.
      </p>
      <Form className="landingContact__form">
        <div className="landingContact__inputs">
          <CustomInput
            inputType="text"
            placeholder="Your Name"
            inputId="guestName"
            required={true}
            className="landingContact__input"
          />
          <CustomInput
            inputType="email"
            placeholder="Email"
            inputId="guestEmail"
            required={true}
            className="landingContact__input"
          />
          <CustomInput
            inputType="text"
            placeholder="Company"
            inputId="guestCompany"
            required={true}
            className="landingContact__input"
          />
        </div>
        <div className="landingContact__textarea">
          <CustomInput
            inputType="textarea"
            placeholder="Write a Message"
            inputId="guestMessage"
            required={true}
            className="landingContact__input"
            rows={5}
          />
        </div>
        <CustomButton btnText="Send" className="landingContact__btn" btnColor="green" btnType="submit"/>
      </Form>
    </div>
  </div>
);

export default LandingContact;
