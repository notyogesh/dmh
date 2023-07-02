import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ title, description, name, type, children, url, keywords }) => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        {/* Standard metadata tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {children}
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://dmhgroup.com.sg/logo.png" />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* End Twitter tags */}
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
