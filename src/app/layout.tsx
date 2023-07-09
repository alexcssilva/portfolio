'use client'

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={theme}>
        <title>Alex | Developer</title>
        <GlobalStyles />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
