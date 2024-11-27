import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@config': path.resolve(__dirname, './src/config/'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
});
