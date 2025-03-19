import { Bug, CircleHelp, Lightbulb, MessageCircle } from 'lucide-react';
import { IMAGES } from '../assets';
import ImageComponent from './ImageComponent';

const Support = () => {
  return (
    <section id="support" className="py-20 relative">
      {/* End Stone background pattern */}
      <div className="absolute inset-0 bg-gray-800">
        <ImageComponent 
          src={IMAGES.END_STONE}
          alt="End stone background"
          style={{
            backgroundSize: '128px',
            backgroundRepeat: 'repeat',
            opacity: 0.05
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encountered a problem or have suggestions? We're here to assist you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden relative">
          {/* Netherrack pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <ImageComponent 
              src={IMAGES.NETHERRACK}
              alt="Netherrack background"
              style={{
                backgroundSize: '128px',
                backgroundRepeat: 'repeat',
              }}
            />
          </div>
          
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-green-500 mb-4 md:mb-0 md:mr-6">
                <MessageCircle className="text-green-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Discord Support</h3>
                <p className="text-gray-300">
                  Contact me on Discord at <span className="bg-gray-800 px-2 py-1 rounded font-mono">@iitian_69</span>
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-8">
                  <ImageComponent 
                    src={IMAGES.DIRT_PATTERN}
                    alt="Dirt pattern background"
                    style={{
                      backgroundSize: '64px',
                      backgroundRepeat: 'repeat',
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <Bug className="text-green-400 mb-4" size={24} />
                  <h4 className="font-bold mb-2">Report Issues</h4>
                  <p className="text-gray-300 text-sm">Found a bug? Let us know so we can fix it quickly.</p>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-8">
                  <ImageComponent 
                    src={IMAGES.DIRT_PATTERN}
                    alt="Dirt pattern background"
                    style={{
                      backgroundSize: '64px',
                      backgroundRepeat: 'repeat',
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <Lightbulb className="text-green-400 mb-4" size={24} />
                  <h4 className="font-bold mb-2">Suggestions</h4>
                  <p className="text-gray-300 text-sm">Share your ideas for new features or improvements.</p>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-8">
                  <ImageComponent 
                    src={IMAGES.DIRT_PATTERN}
                    alt="Dirt pattern background"
                    style={{
                      backgroundSize: '64px',
                      backgroundRepeat: 'repeat',
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <CircleHelp className="text-green-400 mb-4" size={24} />
                  <h4 className="font-bold mb-2">General Help</h4>
                  <p className="text-gray-300 text-sm">Need assistance with setup or configuration? Just ask!</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300">
                Feel free to share any issues, suggestions, or feedback to help us improve TitaniumSecurity and make your Minecraft experience even better!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
