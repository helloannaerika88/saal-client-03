import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';


function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='pb-44px'>
    <section>
    <div className={`HomePage ${theme} flex pt-36`}>
    <div className='w-1/2'>
    <h1 className="text-6xl font-weight-700 pt-12">be <span className='text-primary'>inspired </span> </h1>

      <p className='px-10 pt-10 text-3xl'>
      capture. write. post. 
      <br/>
      and be <span className='italic'>inspired </span> 
      <br/>
      by your surroundings!
      </p>
    </div>

    <div className='w-1/2 px-8'>
    <img src="/hero-1.jpg" alt="hero"/>
    </div>
    </div>
    </section>

    <section>
    <div className={`HomePage ${theme} flex pt-36`}>

    <div className='w-1/2 px-8'>
    <img src="/landing-2.jpg" alt="hero" className='h-full'/>
    </div>

    <div className='w-1/2'>
    {/* <h1 className="text-6xl font-weight-700 pt-12">be <span className='text-primary'>inspired </span> </h1> */}

      <p className='px-10 pt-24 text-2xl'>
      Have you ever admired a beautiful room <br/>
and asking where people buy
<br/> these cute little things.

      </p>
    </div>

    </div>
    </section>

    <section>
    <div className={`HomePage ${theme} flex pt-36 pb-24`}>

    <div className='w-1/2'>
    {/* <h1 className="text-6xl font-weight-700 pt-12">be <span className='text-primary'>inspired </span> </h1> */}

      <p className='px-10 pt-16 text-2xl'>
      With <span className='text-primary'>micasa </span>,<br/>
       you can share your pretty little things
       <br/>
and get inspiration from other people too.


      </p>
    </div>

    <div className='w-1/2 px-8'>
    <img src="/landing-3.png" alt="hero"/>
    </div>

    </div>
    </section>
   
     
    </div>
    
  );
}

export default HomePage;
