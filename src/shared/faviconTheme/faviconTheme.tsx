import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const getFaviconPath = (isDarkMode = false): string => `/favicon-${isDarkMode ? 'light' : 'dark'}.png`;

const FaviconTheme: React.FC = () => {
  const [faviconHref, setFaviconHref] = useState<string>('/favicon-dark.png');

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    setFaviconHref(getFaviconPath(matcher.matches));
    matcher.addEventListener('change', () => setFaviconHref(getFaviconPath(matcher.matches)));
  }, [faviconHref]);
  return (
    <Helmet>
      <link rel="icon" href={faviconHref} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-${faviconHref.includes('light') ? 'dark' : 'light'}-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-${faviconHref.includes('light') ? 'dark' : 'light'}-16x16.png`}
      />
    </Helmet>
  );
};
export default FaviconTheme;
