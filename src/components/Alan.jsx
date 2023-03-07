import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../utils';

import { ColorModeContext } from '../utils/ToggleColorMode';

function useAlan() {
  const { setMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: '488275bd1dc2d377e01d39e24159690e2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode }) => {
        if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          navigate('/');
        }
      },
    });
  }, []);
}

export default useAlan;
