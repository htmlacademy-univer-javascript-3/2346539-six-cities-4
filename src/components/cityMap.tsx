import {Icon, Marker, layerGroup} from 'leaflet';
import { Offers } from '../types/offer';
import { City } from '../types/city';

import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from './hooks/useMap';
import { URL_MARKER_DEFAULT } from './constants/all-constants';


type CityMapProp = {
  city: City;
  points: Offers;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function CityMap({city, points}: CityMapProp): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.map((e) => e.city.point)
        .forEach((point) => {
          const marker = new Marker({
            lat: point.latitude,
            lng: point.longitude,
          });
          marker.setIcon(defaultCustomIcon).addTo(markerLayer);
        });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default CityMap;
