import type { Field } from "../../components/organisms/BaseForm/BaseForm";
import BaseForm from "../../components/organisms/BaseForm/BaseForm";
import Image from "../../components/atoms/Image/Image";
import Person1 from "../../assets/Testimonial/person1.jpg";
import Button from "../../components/atoms/Button/Button";
import Logo from "../../assets/logo.png";
import RamaSecondary from "../../assets/Rama-secondary.png";
import Rama from "../../assets/Rama.png";
import "./Dashboard.css";

function Dashboard() {

  const fields: Field[] = [
    {
      name: "DogName",
      label: "DogName",
      type: "text",
      placeholder: "Enter your Dog Name"
    },
    {
      name: "Age",
      label: "Age",
      type: "text",
      placeholder: "Enter your age"
    },
    {
      name: "Species",
      label: "Species",
      type: "select",
      options: [
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
        { label: "Bird", value: "bird" },
        { label: "Fish", value: "fish" },
      ],
    },
     {
      name: "Gender",
      label: "Gender",
      type: "select",
      options: [  
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
     {
      name: "Condition",
      label: "Current illness or condition",
      type: "text",
      placeholder: "Enter your Condition"
    }

  ];

  const handleDashboardSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted:", formData);
  }


  return (
    <section className="Dashboard-container">
      <div className="logo">
        <Image src={Logo} alt="Logo" className="logo" aria-hidden="true" />
      </div>
        <Image src={Rama} alt="Rama" aria-hidden="true" className="rama" ></Image>

      <div className="profile-container">
        <h2>Profile</h2>
        <h3>Liliana</h3>
        <Image src={Person1} alt="Person1" className="Person1" aria-hidden="true" />
        <Button type="link" destiny="#" className="Nav-links">EDIT PROFILE</Button>
        <Button type="link" destiny="/chat" className="Nav-links">CHAT</Button>
        <Image src={RamaSecondary} alt="Rama" aria-hidden="true" className="Rama-secondary"></Image>
      </div>


      <div className="form-container">
        <BaseForm
          fields={fields}
          onSubmit={handleDashboardSubmit}
          buttonText="Add pet"
          className="style-dashboard"
        />
      </div>
    </section>
  );
}

export default Dashboard;