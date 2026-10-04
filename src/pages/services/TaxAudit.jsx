import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const TaxAudit = () => {
  const service = SERVICES.find(s => s.slug === 'tax-audit');
  return <ServicePage service={service} />;
};

export default TaxAudit;
