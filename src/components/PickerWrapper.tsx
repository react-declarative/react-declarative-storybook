import React from 'react';

import { ModalProvider } from 'react-declarative';

interface IPickerWrapperProps {
  children: React.ReactNode;
}

export const PickerWrapper = ({
  children,
}: IPickerWrapperProps) => (
  <ModalProvider>
    {children}
  </ModalProvider>
);
