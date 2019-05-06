import Document, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

import Hotjar from "./components/hotjar";
import GoogleAnalytics from "./components/google-analytics";
import { styletron } from "../src/services/styletron";

class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage(App => localProps => (
      <StyletronProvider value={styletron}>
        <App {...localProps} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={JSON.stringify(sheet)}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <Hotjar />
        <GoogleAnalytics />
      </html>
    );
  }
}

export default MyDocument;
