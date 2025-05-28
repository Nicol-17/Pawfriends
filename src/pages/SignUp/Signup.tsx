import { Link } from "react-router-dom";
import BaseForm from "../../components/organisms/BaseForm/BaseForm";
import type { Field } from "../../components/organisms/BaseForm/BaseForm";
import "../Login/Login.css"
function SignUp() {
  const fields: Field[] = [
    {
      name: "FullName",
      label: "Name",
      type: "text",
      placeholder: "Enter your Name"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your Email"

    },
    {
      name: "Phone",
      label: "Phone",
      type: "tel",
      placeholder: "Enter your Phone Number"
    },
    {
      name: "birthdate",
      label: "birthdate",
      type: "date",
      placeholder: "Enter your birthdate"
    },

    {
      name: "country",
      label: "Country",
      type: "select",
      options: [
        { label: "Argentina", value: "AR" },
        { label: "Canada", value: "CA" },
        { label: "Colombia", value: "CO" },

      ],
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password"
    },
  ];

  const handleSignUpSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted:", formData);
  }
    return (
      <section className="Login-container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="Form-container">
          <h3>SIGN UP</h3>
          <BaseForm fields={fields} onSubmit={handleSignUpSubmit} buttonText="Sign Up" className="style-login" />
          <Link to="/login" className="link">RETURN</Link>


        </div>
      </section>
    );
  }


export default SignUp;