const path = require("path");
// если возникают ошибки с подчеркиванием - это специфика настройки Stylelint
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx)$/],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join("./styles/", "styles")],
  },
};
