import './globals.css';
import type { Metadata } from 'next';
import * as React from 'react';
import {
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
