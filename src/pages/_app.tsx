import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { KanbanProvider } from '../context/KanbanContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KanbanProvider>
      <Component {...pageProps} />
    </KanbanProvider>
  );
}
