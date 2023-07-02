import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ title, description, name, type, children }) => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        {/* Standard metadata tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {children}
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
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
