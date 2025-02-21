'use client';

import { createConfig, GlobalConfigContext } from '@zeiss/beyond-online-react';
import { NextLinkComponent } from '@/components/NextLinkComponent';

export const NextJsCustomConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const config = createConfig({
    global: {
      linkComponent: NextLinkComponent,
    },
  });

  return (
    <GlobalConfigContext.Provider value={config}>
      {children}
    </GlobalConfigContext.Provider>
  );
};
