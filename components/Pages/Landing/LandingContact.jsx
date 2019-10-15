import { Form } from "reactstrap";
import {
  CustomButton,
  CustomInput
} from "../../CustomComponents/CustomComponents";
import Translate from 'react-translate-component'

const LandingContact = () => (
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
      <Form className="landingContact__form">
        <div className="landingContact__inputs">
          
          <CustomInput
            inputType="text"
            placeholder="Name"
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
        <CustomButton btnText={<Translate content="landingContact.contactBtn" />} className="landingContact__btn" btnColor="green" btnType="submit"/>
      </Form>
    </div>
  </div>
);

export default LandingContact;
