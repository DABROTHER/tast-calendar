'use client';
import 'assets/css/main.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import NoFirstRender from 'design-systems/Atoms/NoFirstRender';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          name='viewport'
        />
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta content='default' name='apple-mobile-web-app-status-bar-style' />
        <meta content='yes' name='mobile-web-app-capable' />
        <meta content='website' name='og:type' property='og:type' />
        <meta content='summary_large_image' name='twitter:card' />
        <link href='https://fonts.googleapis.com' rel='preconnect' />
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <ThemeProvider attribute='class'>
            <NoFirstRender>
              <div className='m-0 min-h-screen bg-[#fff] p-0 text-center'>
                <div className=''>{children}</div>
              </div>
            </NoFirstRender>
        </ThemeProvider>
      </body>
    </html>
  );
}
