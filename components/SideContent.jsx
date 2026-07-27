import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const routes = ["Home", "About", "Milestones", "Projects", "Skills"]
const icons = [
  {name:  <AiFillGithub size={20} />, href: "a"},
  {name: <AiFillLinkedin size={20} />, href: "b"},
  {name:  <AiOutlineInstagram size={20}/>, href: "c"},
]
const SideContent = () => {
  return (
    <section>
      <div className='flex flex-row gap-3 text-muted'>
        {icons.map((icon, index)=>(
          <a key={index} href={icon.href} className="transition-colors hover:text-univ">
          {icon.name}
          </a>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        {routes.map((route, index)=>(
          <a key={route} className='flex items-baseline gap-3 font-sans text-2xl font-semibold tracking-[-0.03em] transition-colors hover:text-univ sm:text-3xl'>
             <span className="font-mono text-xs font-medium tracking-normal text-univ tabular-nums">{index + 1}.</span>
             <span>{route}</span>
          </a>
        ))}

      </div>


    </section>
  );
};

export default SideContent;
