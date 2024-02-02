import { AppProps } from 'next/app';
import { BASE_URL } from 'src/api/utils/constants';
import { CustomErrorBoundary, CustomNProgress } from 'components';
import { GlobalStyle } from 'src/styles/global';
import { StyledThemeProvider } from 'src/definitions/styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  GlobalStateProvider,
  PageWithLayout,
  ShaApplicationProvider,
  StoredFilesProvider,
} from "@shesha/reactjs";
require("@shesha/reactjs/dist/styles.less");
require("src/styles/compiled.antd.variable.css");
require("src/styles/custom-n-progress.less");
require("src/styles/portal.styles.css");

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    setAppInsights();
  }, []);

  const setAppInsights = () => {
    // Register Application Insights
    if (process.browser && process.env.NODE_ENV === 'production') {
      import('utils/applicationInsights').then(({ initAppInsights }) => {
        initAppInsights();
      });
    }
  };

  // Use the layout defined at the page level, if available
  const getLayout = (Component as PageWithLayout<any>).getLayout ?? ((page) => page);

  return (
    <CustomErrorBoundary>
      <StyledThemeProvider>
        <GlobalStyle />
        <GlobalStateProvider>
          <ShaApplicationProvider
            backendUrl={BASE_URL}
            router={router as any}
            noAuth={router?.asPath?.includes('/no-auth')}
          >
            <CustomNProgress />
            <StoredFilesProvider baseUrl={BASE_URL} ownerId={''} ownerType={''}>
              {getLayout(<Component {...(router?.query || {})} {...pageProps} />)}
            </StoredFilesProvider>
          </ShaApplicationProvider>
        </GlobalStateProvider>
      </StyledThemeProvider>
    </CustomErrorBoundary>
  );
}

export default MyApp;