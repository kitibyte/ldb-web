import clsx from 'clsx';
import castArray from 'lodash/castArray';
import { Fragment } from 'react';
import { Service } from './services';
import StationLink from './station-link';

export default function RouteInfo(props: Service) {
  return (
    <p className={clsx(props.isCancelled && 'line-through opacity-50')}>
      <StationLink {...props.origin} />
      {castArray(props.destination).map((destination) => (
        <Fragment key={destination.crs}>
          {' '}
          to <StationLink {...destination} />
        </Fragment>
      ))}
      <br />
      <span className="font-light uppercase text-xs">{props.operator}</span>
    </p>
  );
}
