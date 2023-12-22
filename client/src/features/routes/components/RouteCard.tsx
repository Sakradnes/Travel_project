import React, { useMemo } from 'react';
import type { Route } from '../type';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Map from './Map';
import StarRating from './Rating';

function RouteCard(): JSX.Element {
  const routes = useSelector((store: RootState) => store.routes.routes);

  const { id } = useParams();

  const middleRating = (): number => {
    const sum = route.Ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return Math.round(sum / route.Ratings.length);
  };

  const route = useMemo((): Route | undefined => {
    return routes.find((t) => t.id === Number(id));
  }, [id, routes]);
  console.log(route);

  return (
    <div>
      <div>
        <h1>{route?.name}</h1>
      </div>
      <p>{route?.description}</p>
      <StarRating rating={middleRating()} />
      <div>
        <Map route={route} />
      </div>
    </div>
  );
}

export default RouteCard;

// import React, { useMemo } from 'react';
// import type { Route } from '../type';
// import { Link, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// import Map from './Map';

// function RouteCard({ route }: { route: Route }): JSX.Element {
//   console.log(route);

//   const middleRating = (): number => {
//     const sum = route.Ratings.reduce((acc, rating) => acc + rating.rating, 0);
//     return Math.round(sum / route.Ratings.length);
//   };

//   return (
//     <div key={route.id}>
//       <img
//         src={route.img}
//         alt="..."
//         className="rounded-full mx-auto mb-2"
//         style={{ width: '300px', height: '300px', objectFit: 'cover' }}
//       />

//       <Link to={`/routes/${route.id}`}>
//         <h2 className="text-xl font-bold mb-2">{route.name}</h2>
//       </Link>
//       <p>{route.description}</p>

//     </div>
//     <h1>sdsdsdsds</h1>
//   );
// }

// export default RouteCard;
