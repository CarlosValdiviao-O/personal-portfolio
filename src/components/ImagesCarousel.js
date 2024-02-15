import Slider from 'infinite-react-carousel';

const images = [ 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
]

const ImagesCarousel = () => {
    const settings = {
        arrowsScroll: 1,
        className: 'carousel',
        slidesToShow: 1,
        arrows: false, 
        autoplay: true,
    }

    return (
        <div >
            <Slider { ...settings}>
                {images.map(image => {
                        return(
                            <div key={images.indexOf(image)} className='tech'>
                                <img src={image} alt='tech-logo'></img>
                            </div>
                        )
                })}
            </Slider>
        </div>
    );
};

export default ImagesCarousel;