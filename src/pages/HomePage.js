import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';


function HomePage() {
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`HomePage ${theme}`}>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Lacus laoreet non curabitur gravida. Morbi tristique senectus et netus et malesuada fames. Sed ullamcorper morbi tincidunt ornare. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ut venenatis tellus in metus vulputate eu. Quis imperdiet massa tincidunt nunc pulvinar sapien. Ultricies integer quis auctor elit sed. Ac orci phasellus egestas tellus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Lacus sed viverra tellus in. Neque gravida in fermentum et sollicitudin ac.
      </p>
     
      
    </div>
  );
}

export default HomePage;
