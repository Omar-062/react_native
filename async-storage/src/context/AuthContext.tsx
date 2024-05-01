import { createContext, useContext, useState } from "react";
import { getToken, removeToken, setToken } from "../storageData";
import { Alert } from "react-native";
import { User } from "../types";


type AuthContextType = {
  users: User[];
  userToken: string | null;
  signUp: (user: User) => Promise<void>;
  logIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  users: [],
  userToken: null,
  signUp: async (user: User) => {},
  logIn: async (user: User) => {},
  signOut: async () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [userToken, setUserToken] = useState<string | null>(null);

  const signUp = async (user: User) => {
    const existingUserByEmail = users.find((u) => u.email === user.email);

    if (existingUserByEmail) {
      Alert.alert("Error", "This user is already exist");
      return;
    }

    setUsers((prev) => [...prev, user]);
    await setToken();
    let token = await getToken();
    if (token) {
      setUserToken(token);
    }
  };

  const logIn = async (user: User) => {
    const existingUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (existingUser) {
      await setToken();
      let token = await getToken();
      if (token) {
        setUserToken(token);
      }
    }
  };

  const signOut = async () => {
    removeToken();
    let token = await getToken();
    setUserToken(token || null);
  };

  const contextValue = { users, userToken, logIn, signUp, signOut };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
