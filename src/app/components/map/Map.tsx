import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useData } from '../../contexts/data';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapKit/>;
  
  function MapKit(){
    const center = useMemo(() => ({ lat: 49.625889086, lng: 1.175869516 }), []);
    const data = useData();
    
  return (
      <GoogleMap zoom={9} center={center} mapContainerClassName="w-[40vw] sm:w-[70vw] max-w-[500px] h-[450px] rounded-xl sm:mx-auto left-[20vh] top-[10vh] md:top-[14vh] sm:top-[70vh] sm:left-[0vh]" options={{ disableDefaultUI: true }}>
          {data.profile.enterpriselogo&&<Marker position={center} icon={{url: data.profile.enterpriselogo, scaledSize: new window.google.maps.Size(80, 80),}}/>}
      </GoogleMap>
    );
  }
}