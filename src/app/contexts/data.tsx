import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Profile = {
  firstname: string;
  lastname: string;
  profilePhoto: string;
  enterprisename: string;
  enterpriselogo: string;
  enterpriseadress: string;
};

export type Project = {
    id: number;
    type: string;
    date: string;
    title: string;
    location: string;
    imageMiniature: string;
    imageBackground: string;
    video: string;
    pictures: Array<{ id: number, src: string }>;
    description: string;
};

export type Diplomas = {
  id: number;
  name: string;
  date: string;
  organism: string;
  logoOrganism: string;
  linkOrganism: string;
};

export type Services = {
  id: number;
  name: string;
  imageBackground: string;
  description: string;
  pictures: Array<{ id: number, image: string }>;
};

export type Data = {
  profile: Profile;
  projects: Project[];
  diplomas: Diplomas[];
  services: Services[];
  error: Error | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    profilePhoto: "",
    enterprisename: "",
    enterpriselogo: "",
    enterpriseadress: ""
  },
  projects: [],
  diplomas: [],
  services: [],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
