import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  console.log(data);

  return data;
};

export default AppComponent;
