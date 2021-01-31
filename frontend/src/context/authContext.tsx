import React, { useState, useContext } from 'react';

type useProvideAuthType = {
  auth: boolean | undefined;
  setAuth: (value: boolean) => void;
};

const useProvideAuth = (): useProvideAuthType => {
  const [auth, setAuth] = useState<boolean | undefined>();

  return { auth, setAuth };
};

const AuthContext = React.createContext<Partial<useProvideAuthType>>({
  auth: undefined,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
