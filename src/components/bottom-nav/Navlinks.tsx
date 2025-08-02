import { useState, type FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Navlinks:FC = () => {

  const [activeTab, setActiveTab] = useState<string>();

  interface NavLinkType {
    name: string;
    id: string;
  }
  
  const navLinks: NavLinkType[] = [
    { name: 'Kombo', id: 'kombo' },
    { name: 'Pitsa', id: 'pitsa' },
    { name: 'Gazaklar', id: 'gazaklar' },
    { name: 'Ichimliklar', id: 'ichimliklar' },
    { name: 'Salatlar', id: 'salatlar' },
    { name: 'Desertlar', id: 'desertlar' },
    { name: 'Souslar', id: 'souslar' }
  ];

 
  return (
    <div className="w-full flex flex-row justify-between items-center gap-2 mt-3">
      <div className="flex flex-row justify-start items-end gap-2">
        {navLinks.map((link: any) => (
          <ScrollLink
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-106}
            duration={500}
            onSetActive={() => setActiveTab(link.id)}
            className="px-3 py-1 bg-green-500/20 rounded-full cursor-pointer font-light"
            activeClass="bg-green-700 text-white"

          >
            {link.name}
          </ScrollLink>
        ))}

      </div>
    </div>
  )
}

export default Navlinks
