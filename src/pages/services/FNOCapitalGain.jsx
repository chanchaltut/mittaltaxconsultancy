import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const FNOCapitalGain = () => {
  const service = SERVICES.find(s => s.slug === 'fno-capital-gain');
  return <ServicePage service={service} />;
};

export default FNOCapitalGain;
