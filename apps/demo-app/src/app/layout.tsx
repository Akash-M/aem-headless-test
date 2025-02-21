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
  title: 'Beyond Online NextJS',
  description: 'Beyond Online NextJS example app',
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
