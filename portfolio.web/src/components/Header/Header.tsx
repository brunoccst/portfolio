import { useEffect, useState } from 'react';
import './Header.scss';
import Introduction from './Introduction';
import Main from './Main';

const Header = () => {
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 4000); // Match the timing with Introduction animations

    return () => clearTimeout(timer);
  }, []);

  return showIntroduction ? <Introduction /> : <Main />;
};

export default Header; 