// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css';
// import { HomePage } from './components/HomePage';
// import FooterPart from './components/FooterPart';



// const inter = Inter({ subsets: ['latin'] })

// // export const metadata: Metadata = {
// //   title: 'Create Next App',
// //   description: 'Generated by create next app',
// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <div><HomePage/></div>
        
//         {children}</body>
//         <div><FooterPart/></div>
//     </html>
//   )
// }

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { HomePage } from './components/HomePage';
import FooterPart from './components/FooterPart';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  showHomePage=true,
  showFooter=true,
}: {
  children: React.ReactNode;
  showHomePage?: boolean;
  showFooter?: boolean;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  );
}
