import { Link } from "react-router-dom";

const useCases = [
  {
    id: 1,
    title: "Smart Lighting",
    description: "Automate your lights for convenience, ambiance, and energy savings",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=820&h=600&fit=crop",
    icon: "https://us.shelly.com/cdn/shop/files/Smart_Lighting.svg?v=1728217926&width=50",
    link: "/solutions/lighting",
  },
  {
    id: 2,
    title: "Smart Covers & Blinds",
    description: "Automate your curtains, blinds, roller shutters, and awnings for comfort and energy savings",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=820&h=600&fit=crop",
    icon: "https://us.shelly.com/cdn/shop/files/Covers-Blinds.svg?v=1728218022&width=80",
    link: "/solutions/covers",
  },
  {
    id: 3,
    title: "Smart Heating & Climate control",
    description: "Automate your heating and cooling systems to know what you're spending, Control the temperature remotely, set schedules, and optimize energy use",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=820&h=600&fit=crop",
    icon: "https://us.shelly.com/cdn/shop/files/Smart_Heating_Climate_Control_HVAC.svg?v=1728217926&width=50",
    link: "/solutions/climate",
  },
  {
    id: 4,
    title: "Smart Safety & Security",
    description: "Keep your home safe with smart sensors and monitor it from anywhere",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=820&h=600&fit=crop",
    icon: "https://us.shelly.com/cdn/shop/files/Smart_Safety_Security.svg?v=1728217926&width=48",
    link: "/solutions/security",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.id}
              to={useCase.link}
              className="group relative rounded-2xl overflow-hidden h-[300px] md:h-[350px]"
            >
              {/* Background Image */}
              <img
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img src={useCase.icon} alt="" className="w-10 h-10 brightness-0 invert" />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-md">
                  {useCase.description}
                </p>
                <span className="text-primary font-semibold text-sm group-hover:underline">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}