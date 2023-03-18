import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const DarkToggle = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(!theme)}
      className="p-4 text-white rounded-full w-12 h-12 flex justify-center items-center"
    >
      {!theme ? <BsMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default DarkToggle;
