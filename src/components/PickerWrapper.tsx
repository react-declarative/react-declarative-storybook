import React from 'react';

import { ModalProvider } from 'react-declarative';

interface IPickerWrapperProps {
  children: React.ReactChild;
}

export const PickerWrapper = ({
  children,
}: IPickerWrapperProps) => (
  <ModalProvider>
    {children}
  </ModalProvider>
);
