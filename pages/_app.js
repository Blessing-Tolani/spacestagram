import "@styles/globals.css";
import Loading from "@components/loading";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const Layout = ({ children }) =>
    Component.Layout ? (
      <Component.Layout>{children}</Component.Layout>
    ) : (
      <>{children}</>
    );

  return (
    <Layout>
      {loading == false ? <Component {...pageProps} /> : <Loading />}
    </Layout>
  );
}

export default App;
