import './globals.css';
import type { Metadata } from 'next';
import * as React from 'react';
import {
  ContentContainer,
  Footer,
  Header,
  NextJsCustomConfig,
} from '@/components';
import StyledComponentsRegistry from "@/lib/registry";
import Head from "next/head";
import {DefaultLayout} from "@/layout/DefaultLayout";

export const metadata: Metadata = {
  title: 'MyZEISS',
  description: 'MyZEISS Demo',
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/etc.clientlibs/zeiss-aem-app/jupiter/clientlibs/jupiter-components.app/resources/assets/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/etc.clientlibs/zeiss-aem-app/jupiter/clientlibs/jupiter-components.app/resources/assets/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/etc.clientlibs/zeiss-aem-app/jupiter/clientlibs/jupiter-components.app/resources/assets/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/etc.clientlibs/zeiss-aem-app/jupiter/clientlibs/jupiter-components.app/resources/assets/favicons/site.webmanifest"/>
        <link rel="mask-icon" href="/etc.clientlibs/zeiss-aem-app/jupiter/clientlibs/jupiter-components.app/resources/assets/favicons/safari-pinned-tab.svg" color="#0f2db3"/>
        <link rel="stylesheet" href="https://assets.zeiss.com/fonts/fonts.css" />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <NextJsCustomConfig>
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </NextJsCustomConfig>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
