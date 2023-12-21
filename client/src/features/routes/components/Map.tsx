import React, { useState } from 'react';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';
import { Location } from '../../location/type/locationtype';
import { Route, Way } from '../type';

export default function Maps({ route }: { route: Route | undefined }): JSX.Element {
  const { locations, isLocation } = useSelector((store: RootState) => store.location);
  const [way, setWay] = useState<Way>();
  console.log(way);

  const allCoordinates: [number, number][] = [];
  if (route) {
    console.log(route);

    route.Ways.forEach((rout: Way) => {
      console.log(rout);

      if (rout) {
        const latitude = Number(rout.coordinateLatitude);
        const longitude = Number(rout.coordinateLongitude);
        allCoordinates.push([latitude, longitude]);
        console.log(allCoordinates);
      }
    });
  }

  let currentLocation: Location | undefined;
  if (locations) {
    currentLocation = locations.find((location) => location.id === isLocation);
  }

  return (
    <div className="map">
      <YMaps query={{ apikey: '262f8a0d-625c-44ca-8f5d-933bcac6799b' }}>
        <div>
          <Map
            defaultState={{
              center: [currentLocation?.coordinateLatitude, currentLocation?.coordinateLongitude],
              zoom: 12,
            }}
            width="1000px"
            height="400px"
          >
            <ZoomControl options={{}} />

            {allCoordinates.map((coord, index) => (
              <Placemark
                modules={['geoObject.addon.balloon']}
                key={+index}
                geometry={coord}
                properties={{
                  balloonContentBody: `
                  <div>
                  <img src=${route?.Ways[index].path}/>
                  <p>${route?.Ways[index].name}</p>
                   <button type='button' onClick={setWay(${route?.Ways[index]})}}>Подробнее</button>
                   </div>
                
            `,
                }}
              />
            ))}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}
