import "bootstrap/dist/css/bootstrap.css";
import { buildClient } from "../api/buildClient";

const AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

AppComponent.getInitialProps = async (appContext) => {
  console.log("AppComponent.getInitialProps", appContext);
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default AppComponent;
