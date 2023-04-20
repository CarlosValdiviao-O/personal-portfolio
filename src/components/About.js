import Image from './../icons/test.jpg';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="background">
          <div className='content'>
            <div className='photo-background'>
              <div className="photo">
                  <img src={Image} alt='pic'></img>
                  <h2 className="name font-effect-emboss">J Carlos Valdivia</h2>
              </div>
              <div className="triangle phone"></div>
            </div>
            <div className='text-container'>
              <h2 className="font-effect-shadow-multiple">{t('about_header')}</h2>
              <p className='text'>{t('about_text')}</p>
            </div>        
          </div>
          <div className="triangle"></div>
      </div>
    </div>
  );
}

export default About;