import ImagesCarousel from "./ImagesCarousel";
import Email from '../icons/email.svg';
import Phone from '../icons/phone.svg';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <div className="left">
        <h2 className="font-effect-outline">{t('contact_header')}</h2>
        <p>{t('contact_text')}</p>
        <p className="address">La Paz, Bolivia</p>
        <p className="phone"><img src={Phone} alt='phone-icon'></img>+591 78827527</p>
        <p className="mail"><img src={Email} alt='mail-icon'></img>carlosvaldivia390@gmail.com</p>
      </div>
      <div className="right">
        <div className="circle">
          <ImagesCarousel />
        </div>
      </div>
    </div>
  );
}

export default Contact;