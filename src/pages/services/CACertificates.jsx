import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const CACertificates = () => {
  const service = SERVICES.find(s => s.slug === 'ca-certificates');
  return <ServicePage service={service} />;
};

export default CACertificates;
