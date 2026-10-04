import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const GSTServices = () => {
  const service = SERVICES.find(s => s.slug === 'gst-services');
  return <ServicePage service={service} />;
};

export default GSTServices;
