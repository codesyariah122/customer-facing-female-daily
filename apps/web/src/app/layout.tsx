/* eslint-disable @next/next/no-head-element */
import '@styles/globals.sass';
import '@styles/icon.sass';
// include styles from the ui package
// import "ui/styles.css";
import { ReactQueryWrapper } from '@components/app/commons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
