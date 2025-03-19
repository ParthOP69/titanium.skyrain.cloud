import { Clock, Code, EyeOff, Layers, Lock, MessageSquare, UserCheck } from 'lucide-react';
import { IMAGES } from '../assets';
import ImageComponent from './ImageComponent';

const features = [
  {
    icon: <UserCheck size={28} />,
    title: "Ultimate Player Authentication",
    description: "Enhance server security with secure registration and login commands, ensuring only trusted players can access your server."
  },
  {
    icon: <Lock size={28} />,
    title: "Smart Movement and Interaction Restriction",
    description: "Automatically restrict movement, inventory interactions, and damage for unauthenticated players until they log in."
  },
  {
    icon: <EyeOff size={28} />,
    title: "Blindness Effect for Unauthenticated Players",
    description: "Unauthenticated players experience a temporary blindness effect, reinforcing the need to log in or register."
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Secure Command Privacy",
    description: "Sensitive commands like /login and /register are intercepted and processed without being logged in the console, ensuring privacy."
  },
  {
    icon: <Clock size={28} />,
    title: "Dynamic Session Management",
    description: "Seamless session tracking with automatic removal of restrictions upon successful login."
  },
  {
    icon: <Layers size={28} />,
    title: "Periodic Action Bar Alerts",
    description: "Notify players with periodic action bar messages, reminding them to log in or register."
  },
  {
    icon: <Code size={28} />,
    title: "Developer-Friendly API",
    description: "Extend and customize server functionalities with our robust, developer-focused API."
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-700 relative overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <ImageComponent 
          src={IMAGES.EMERALD_ORE}
          alt="Emerald ore pattern"
          style={{
            backgroundSize: '48px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="text-green-400 mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Animated background - minecraft stone pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <ImageComponent 
          src={IMAGES.STONE_PATTERN}
          alt="Stone pattern background"
          style={{
            backgroundSize: '200px',
            backgroundRepeat: 'repeat',
            opacity: 0.07,
          }}
        />
      </div>
      
      {/* Moving blocks animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-16 h-16 opacity-8 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${IMAGES.DIAMOND_ORE})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1})`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Essential Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your Minecraft server security with these powerful features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>

      {/* Add the keyframes for the floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.1;
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 0.05;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;

