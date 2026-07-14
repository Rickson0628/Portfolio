import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const routes = ["Home", "About", "Milestones", "Projects", "Skills"]
const icons = [
  {name:  <AiFillGithub size={20} color="#014D4E" />, href: "a"},
  {name: <AiFillLinkedin size={20} color= "#014D4E" />, href: "b"},
  {name:  <AiOutlineInstagram size={20} color="#014D4E"/>, href: "c"},
]
const SideContent = () => {
  return (
    <section>
      <div className='flex flex-row'>
        {icons.map((icon)=>(
          <a key={icon.name} href={icon.href}>
          {icon.name}
          </a>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        {routes.map((route, index)=>(
          <a key={route} className='text-xl font-bold'>
             {index + 1} {". "} {route}         
          </a>
        ))}

      </div>


    </section>
  );
};

export default SideContent;