const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
	config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config); // change importing css to less
	config = rewireLess.withLoaderOptions({
		modifyVars: {
			'@primary-color': '#776CF1',
			'@body-background': '#FCFCFC',
			'@text-color-secondary': '#354168',
			'@warning-color': '#F7354D',
			'@info-color': '#00BBFE',
			'@success-color ': '#16E581',
			'@error-color': '#F7354D',
			'@normal-color': '#D8DDEB',
			'@text-color': '#8891A5',
			'@menu-bg': '#FAFAFC',
			'@layout-sider-background': '#FAFAFC',
			'@font-family':
				'"Poppins","Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-seri'
		},
		javascriptEnabled: true
	})(config, env);
	return config;
};
