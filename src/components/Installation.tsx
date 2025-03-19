import { CircleCheck, Download, FolderPlus, Play, Settings } from 'lucide-react';
import { IMAGES } from '../assets';
import ImageComponent from './ImageComponent';

const steps = [
  {
    icon: <Download size={28} />,
    title: "Download the Plugin",
    description: "Grab the latest version of TitaniumSecurity from the Modrinth page. Ensure the plugin version matches your server version for compatibility.",
    action: {
      text: "Download Now",
      url: "https://modrinth.com/plugin/titaniumsecurity"
    }
  },
  {
    icon: <FolderPlus size={28} />,
    title: "Add to Your Server",
    description: "Place the downloaded JAR file into your server's plugins directory."
  },
  {
    icon: <Settings size={28} />,
    title: "Configure the Plugin",
    description: "Start your Minecraft server, and TitaniumSecurity will auto-generate its configuration files."
  },
  {
    icon: <CircleCheck size={28} />,
    title: "Verify Installation",
    description: "Enter the /plugins command in your server console or in-game. Look for TitaniumSecurity in green text. If it appears, the plugin is installed successfully."
  },
  {
    icon: <Play size={28} />,
    title: "Test the Features",
    description: "Join your server and use /register <password> followed by /login <password> to experience TitaniumSecurity in action."
  }
];

const InstallationStep = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-green-500">
        <span className="text-green-400">{step.icon}</span>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className="mr-2 text-green-400">{index + 1}.</span> 
          {step.title}
        </h3>
        <p className="text-gray-300 mb-3">{step.description}</p>
        {step.action && (
          <a 
            href={step.action.url} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center text-green-400 hover:text-green-300"
          >
            {step.action.text} →
          </a>
        )}
      </div>
    </div>
  );
};

const Installation = () => {
  return (
    <section id="installation" className="py-20 relative">
      {/* Minecraft-themed cobblestone background */}
      <div className="absolute inset-0 bg-gray-800">
        <ImageComponent 
          src={IMAGES.COBBLESTONE}
          alt="Cobblestone background"
          style={{
            backgroundSize: '128px',
            backgroundRepeat: 'repeat',
            opacity: 0.07
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Installation Guide</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get Started with TitaniumSecurity in Just a Few Steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <InstallationStep key={index} step={step} index={index} />
          ))}
          
          <div className="bg-gray-700 p-6 rounded-lg mt-8 relative overflow-hidden">
            {/* Overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <ImageComponent 
                src={IMAGES.GRASS_SIDE}
                alt="Grass block pattern"
                style={{
                  backgroundSize: '64px',
                  backgroundRepeat: 'repeat',
                }}
              />
            </div>
            <p className="text-gray-200 font-medium text-center relative z-10">
              With just a few steps, you'll secure your server and ensure a safe gaming environment for everyone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
