import Image from './../icons/test.jpg';

function About() {
    return (
      <div className="about">
        <div className="background">
            <div className='content'>
              <div className='photo-background'>
                <div className="photo">
                    <img src={Image} alt='pic'></img>
                    <h2 className="name">J Carlos Valdivia</h2>
                </div>
                <div className="triangle phone"></div>
              </div>
              <div className='text-container'>
                <h2>About me</h2>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, ligula et maximus tristique, neque leo consequat lacus, at gravida urna est nec nunc. Proin porttitor nulla ac lobortis auctor. Etiam egestas, tellus a ullamcorper hendrerit, metus augue luctus lectus, eget dictum elit ligula in urna. Aliquam et lorem vitae tellus faucibus commodo. Nullam gravida felis dui, quis interdum est aliquam consectetur. Ut volutpat, neque id aliquam interdum, sem sem tincidunt quam, eget maximus elit lacus et purus. Duis non tellus eu velit cursus commodo vehicula nec ipsum. Maecenas malesuada, nibh quis aliquam interdum, turpis nulla tincidunt magna, sed vulputate erat nisi ut felis.</p>
                <div className="icons"></div>
              </div>        
            </div>
            <div className="triangle"></div>
        </div>
      </div>
    );
  }
  
  export default About;