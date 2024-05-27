import { Icon, Marker, layerGroup } from 'leaflet';
import { City } from '../types/city';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from './hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './constants/all-constants';
import { useAppSelector } from './hooks';
import { Offer } from '../types/offer';

type CityMapProp = {
  city: City;
  points: Offer[];
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

function CityMap({ city, points }: CityMapProp): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectedMarker = useAppSelector((state) => state.selectedMarker);

  useEffect(() => {
    if (map) {
      // Центрируем карту на выбранном месте, если оно задано
      if (!selectedMarker) {
        map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      }
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const { latitude, longitude } = point.location;
        const marker = new Marker([latitude, longitude]);

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
        markerLayer.clearLayers();
      };
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map, points, selectedMarker]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default CityMap;
