import React, { useEffect, useState } from 'react';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';
import { Location } from '../../location/type/locationtype';
import { Route, Way } from '../type';
import WayPage from '../../event/components/WayPage';

export default function Maps({ route }: { route: Route | undefined }): JSX.Element {
  const { locations, isLocation } = useSelector((store: RootState) => store.location);
  const [way, setWay] = useState<number>();
  const [modal, setModal] = useState(false);

  const allCoordinates: [number, number][] = [];
  if (route) {
    route.Ways.forEach((rout: Way) => {
      if (rout) {
        const latitude = Number(rout.coordinateLatitude);
        const longitude = Number(rout.coordinateLongitude);
        allCoordinates.push([latitude, longitude]);
      }
    });
  }

  const fn = (e) => {
    if (e.target.classList.contains('some')) {
      setWay(e.target.dataset.id);
      setModal(true);
    }
  };

  useEffect(() => {
    document.querySelector('.map').addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, []);

  let currentLocation: Location | undefined;
  if (locations) {
    currentLocation = locations.find((location) => location.id === isLocation);
  }

  return (
    <div className="map">
      <YMaps query={{ apikey: '262f8a0d-625c-44ca-8f5d-933bcac6799b' }}>
        <div className="container">
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
                  iconContent: `<p>${index + 1}</p>`,
                  balloonContentBody: `
                    <div>
                      <img src=${route?.Ways[index].path}/>
                      <p>${route?.Ways[index].name}</p>
                      <button data-id=${route?.Ways[index].id} class='some' type='button'>Подробнее</button>
                    </div>
                  `,
                }}
              ></Placemark>
            ))}
          </Map>
        </div>
      </YMaps>
      <div>{modal ? <WayPage way={way} setModal={setModal} /> : ''}</div>
    </div>
  );
}
