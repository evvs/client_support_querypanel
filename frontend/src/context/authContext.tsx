import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

type useProvideAuthType = {
  auth: boolean;
  setAuth: (value: boolean) => void;
};

const useProvideAuth = (): useProvideAuthType => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const checkToken = async (token: string) => {
      try {
        setAuth(true);
        await axios.get('/auth/validatetoken', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        setAuth(false);
        localStorage.removeItem('token');
      }
    };
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      checkToken(storageToken);
    }
  }, []);

  return { auth, setAuth };
};

const AuthContext = React.createContext<useProvideAuthType>({
  auth: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth() {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
