module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          src: "./src"
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    ],
    "react-native-reanimated/plugin"
  ]
}
