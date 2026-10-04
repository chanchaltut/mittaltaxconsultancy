import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const LoanDocumentation = () => {
  const service = SERVICES.find(s => s.slug === 'loan-documentation');
  return <ServicePage service={service} />;
};

export default LoanDocumentation;
