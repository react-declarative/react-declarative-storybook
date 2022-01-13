import React from 'react';

import { ModalProvider } from 'react-declarative';

interface IComponentWrapperrProps {
  children: React.ReactNode;
}

export const ComponentWrapper = ({
  children,
}: IComponentWrapperrProps) => (
  <ModalProvider>
    {children}
  </ModalProvider>
);
