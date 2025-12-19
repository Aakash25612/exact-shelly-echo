import { Link } from "react-router-dom";

const compatibilityLogos = [
  { name: "Google Home", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Assistant_logo.png/600px-Google_Assistant_logo.png" },
  { name: "Amazon Alexa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Amazon_Alexa_App_Logo.png/600px-Amazon_Alexa_App_Logo.png" },
  { name: "Home Assistant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Home_Assistant_Logo.svg/600px-Home_Assistant_Logo.svg.png" },
  { name: "SmartThings", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/SmartThings_Logo.svg/600px-SmartThings_Logo.svg.png" },
  { name: "Apple HomeKit", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_HomeKit_logo.svg/600px-Apple_HomeKit_logo.svg.png" },
];

export function CompatibilitySection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full compatibility
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Easily connect your Shelly Gen3 and Gen4 devices to a wide range of platforms and protocols.
            Together with a voice assistant, you can command Shelly devices using just your voice!
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {compatibilityLogos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground text-center">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/compatibility"
            className="text-primary font-semibold hover:underline"
          >
            Learn more &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}