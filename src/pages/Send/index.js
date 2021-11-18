import React from 'react';
import SendForm from '../../components/send-form';
import { AppProvider } from '../../contexts/app.provider';

const Send = () => (
  <section className="section">
    <AppProvider>
      <SendForm />
    </AppProvider>
  </section>
);

export default Send;
