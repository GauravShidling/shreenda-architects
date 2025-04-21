import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, buttonText, buttonLink, imageSrc }) => {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt="Architectural background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">{subtitle}</p>
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="btn btn-primary">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero; 