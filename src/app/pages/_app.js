import Layout from '../layout';
import '../globals.css';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  );
}

export default MyApp;
