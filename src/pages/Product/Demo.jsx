import { Helmet } from "react-helmet";

const Demo = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Demo</title>
        <meta
          name="description"
          content="Request a demo to experience RouteCaster's AI-driven route optimisation in action."
        />
        <meta property="og:title" content="RouteCaster | Demo" />
        <meta
          property="og:description"
          content="Request a demo to experience RouteCaster's AI-driven route optimisation in action."
        />
        <meta property="og:url" content="https://www.routecaster.com/demo" />
        <link rel="canonical" href="https://www.routecaster.com/demo" />
        <meta name="twitter:title" content="RouteCaster | Demo" />
        <meta
          name="twitter:description"
          content="Request a demo to experience RouteCaster's AI-driven route optimisation in action."
        />
      </Helmet>
      <div>
        <h1>Demo - Coming Soon</h1>
      </div>
    </>
  );
};

export default Demo;
