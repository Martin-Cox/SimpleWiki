const path = require("path");

module.exports = {
	context: path.resolve(__dirname, "./src/server"),
	devtool: "cheap-module-source-map",
	entry: {
		client: "./components/example.ts",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "./src/server/*"),
				use: [{
					loader: "babel-loader",
					options: {
						"presets": ["@babel/preset-env", "@babel/preset-react"]
					}
				}]
			}, {
				enforce: "pre",
				test: /\.ts(x)?$/,
				include: path.resolve(__dirname, "./src/server/*"),
				use: [{
					loader: "source-map-loader"
				}]
			}
		]
	},
	output: {
		filename: "server.js",
		path: path.resolve(__dirname, "build")
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	target: "node"
};