import {Icon, Marker, layerGroup} from 'leaflet';
import { Offers } from '../types/offer';
import { City } from '../types/city';

import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from './hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from './constants/all-constants';
import { useAppSelector } from './hooks';

type CityMapProp = {
  city: City;
  points: Offers;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function CityMap({city, points}: CityMapProp): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectedMarker = useAppSelector((state) => state.selectedMarker);

  useEffect(() => {
    if (map) {
      map.setView([city.point.latitude, city.point.longitude], city.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.point.latitude,
          lng: point.city.point.longitude,
        });

        marker
          .setIcon(
            selectedMarker !== null && point.id === selectedMarker.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

        marker.on('mouseover', () => {
          marker.setIcon(currentCustomIcon);
        });

        marker.on('mouseout', () => {
          if (selectedMarker === null || point.id !== selectedMarker.id) {
            marker.setIcon(defaultCustomIcon);
          }
        });
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedMarker]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default CityMap;
