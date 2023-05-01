import Document, { DocumentContext } from 'next/document'\nimport { ServerStyleSheet } from 'styled-components'\n\nexport default class MyDocument extends Document {\n  static async getInitialProps(ctx: DocumentContext) {\n    const sheet = new ServerStyleSheet()\n    const originalRenderPage = ctx.renderPage\n\n    try {\n      ctx.renderPage = () =>\n        originalRenderPage({\n          enhanceApp: (App) => (props) =>\n            sheet.collectStyles(<App {...props} />),\n        })\n\n      const initialProps = await Document.getInitialProps(ctx)\n      return {\n        ...initialProps,\n        styles: [initialProps.styles, sheet.getStyleElement()],\n      }\n    } finally {\n      sheet.seal()\n    }\n  }\n}\n