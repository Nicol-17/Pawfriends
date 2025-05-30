import type { Field } from "../../components/organisms/BaseForm/BaseForm";
import BaseForm from "../../components/organisms/BaseForm/BaseForm";
import Image from "../../components/atoms/Image/Image";
import Person1 from "../../assets/Testimonial/person1.jpg";
import Button from "../../components/atoms/Button/Button";
import Logo from "../../assets/logo.png";
import RamaSecondary from "../../assets/Rama-secondary.png";
import Rama from "../../assets/Rama.png";
import "./Dashboard.css";
import LanguageSwitcher from "../../components/atoms/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";


function Dashboard() {
  const { t } = useTranslation(['dashboard'])

  const fields: Field[] = [
    {
      name: "DogName",
      label: t('fields.name.label'),
      type: "text",
      placeholder: t('fields.name.placeholder')
    },
    {
      name: "Age",
      label: t('fields.Age.label'),
      type: "text",
      placeholder: t('fields.Age.placeholder')
    },
    {
      name: "Species",
      label:  t('fields.Species.label'),
      type: "select",
      options: [
        { label: t('fields.Species.options.dog'), value: "dog" },
        { label: t('fields.Species.options.cat'), value: "cat" },
        { label: t('fields.Species.options.bird'), value: "bird" },
        { label: t('fields.Species.options.fish'), value: "fish" },
      ],
    },
     {
      name: "Gender",
      label: t('fields.Gender.label'),
      type: "select",
      options: [  
        { label: t('fields.Gender.options.male'), value: "male" },
        { label: t('fields.Gender.options.female'), value: "female" },
      ],
    },
     {
      name: "Condition",
      label: t('fields.Condition.label'),
      type: "text",
      placeholder: t('fields.Condition.placeholder')
    }

  ];

  const handleDashboardSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted:", formData);
  }


  return (
    <section className="Dashboard-container">
      <LanguageSwitcher />
      <div className="logo">
        <Image src={Logo} alt="Logo" className="logo" aria-hidden="true" />
      </div>
        <Image src={Rama} alt="Rama" aria-hidden="true" className="rama" ></Image>

      <div className="profile-container">
        <h2>{t('title')}</h2>
        <h3>Liliana</h3>
        
        <Image src={Person1} alt="Person1" className="Person1" aria-hidden="true" />
        <Button type="link" destiny="#" className="Nav-links">{t('buttonEdit')}</Button>
        <Button type="link" destiny="/chat" className="Nav-links">{t('buttonChat')}</Button>
        <Image src={RamaSecondary} alt="Rama" aria-hidden="true" className="Rama-secondary"></Image>
      </div>


      <div className="form-container">
        <h2>{t('titleForm')}</h2>
        <BaseForm
          fields={fields}
          onSubmit={handleDashboardSubmit}
          buttonText={t('buttonForm')}
          className="style-dashboard"
        />
      </div>
    </section>
  );
}

export default Dashboard;