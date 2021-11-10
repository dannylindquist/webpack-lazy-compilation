// development config
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const StatoscopeWebpackPlugin = require("@statoscope/webpack-plugin").default;

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    main: "./index.tsx", // the entry point of our app
    vendors: ["react", "react-dom", "react-refresh/runtime"],
  },
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin(),
    //   new StatoscopeWebpackPlugin({
    //     saveReportTo: "stats/report.html",
    //     saveStatsTo: "stats/stats.json",
    //     open: "file",
    //     watchMode: true,
    //     statsOptions: {
    //       /* any webpack stats options */
    //       all: false, // disable all the stats
    //       hash: true, // add compilation hash
    //       entrypoints: true, // add entrypoints stats
    //       chunks: true, // add chunks stats
    //       chunkModules: true, // add modules stats
    //       reasons: true, // add modules reasons stats

    //       assets: true, // add assets stats
    //       chunkOrigins: true, // add chunks origins stats (to find out which modules require a chunk)
    //       version: true, // add webpack version
    //       builtAt: true, // add build at time
    //       timings: true, // add timing information
    //       performance: true, // add info about oversized assets
    //       source: true, // add module sources (uses to find modules duplicates)
    //     },
    //   }),
  ],
  // stats: {
  //   all: false, // disable all the stats
  //   hash: true, // add compilation hash
  //   entrypoints: true, // add entrypoints stats
  //   chunks: true, // add chunks stats
  //   chunkModules: true, // add modules stats
  //   reasons: true, // add modules reasons stats

  //   assets: true, // add assets stats
  //   chunkOrigins: true, // add chunks origins stats (to find out which modules require a chunk)
  //   version: true, // add webpack version
  //   builtAt: true, // add build at time
  //   timings: true, // add timing information
  //   performance: true, // add info about oversized assets
  //   source: true, // add module sources (uses to find modules duplicates)
  // },
});
