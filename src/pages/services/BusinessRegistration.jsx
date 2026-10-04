import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const BusinessRegistration = () => {
  const service = SERVICES.find(s => s.slug === 'business-registration');
  return <ServicePage service={service} />;
};

export default BusinessRegistration;
