// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/** GitHub Pages project site: site = origin, base = /repo */
const site = process.env.SITE_URL ?? 'https://suhailthakrani.github.io';
const base = process.env.BASE_PATH ?? '/stackchain-docs';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'stackchain',
			description:
				'Flutter scaffolding from a simple config. Use presets, add full features, keep router and DI in sync, migrate safely, and run quality checks on every generate.',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/logo-mark.svg',
				alt: 'stackchain',
				replacesTitle: false,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/suhailthakrani/stackchain',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/suhailthakrani/stackchain-docs/edit/main/',
			},
			lastUpdated: true,
			pagination: true,
			tableOfContents: false,
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: `${site}${base}/og-image.svg`,
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#0F1419',
					},
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick start', slug: 'getting-started/quick-start' },
						{ label: 'Configuration', slug: 'getting-started/configuration' },
					],
				},
				{
					label: 'CLI',
					items: [
						{ label: 'Commands overview', slug: 'cli/overview' },
						{ label: 'init', slug: 'cli/init' },
						{ label: 'feature / add', slug: 'cli/feature' },
						{ label: 'remove', slug: 'cli/remove' },
						{ label: 'rename', slug: 'cli/rename' },
						{ label: 'sync', slug: 'cli/sync' },
						{ label: 'upgrade', slug: 'cli/upgrade' },
						{ label: 'migrate', slug: 'cli/migrate' },
						{ label: 'doctor', slug: 'cli/doctor' },
						{ label: 'presets', slug: 'cli/presets' },
						{ label: 'make', slug: 'cli/make' },
						{ label: 'list & new', slug: 'cli/bricks' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Feature First', slug: 'architecture/feature-first' },
						{ label: 'Clean Architecture', slug: 'architecture/clean' },
						{ label: 'MVVM', slug: 'architecture/mvvm' },
						{ label: 'MVC', slug: 'architecture/mvc' },
					],
				},
				{
					label: 'State management',
					items: [
						{ label: 'Overview', slug: 'state-management/overview' },
						{ label: 'Bloc', slug: 'state-management/bloc' },
						{ label: 'Cubit', slug: 'state-management/cubit' },
						{ label: 'Riverpod', slug: 'state-management/riverpod' },
						{ label: 'Provider', slug: 'state-management/provider' },
						{ label: 'GetX', slug: 'state-management/getx' },
						{ label: 'RxDart', slug: 'state-management/rxdart' },
					],
				},
				{
					label: 'Routing',
					items: [
						{ label: 'Overview', slug: 'routing/overview' },
						{ label: 'GoRouter', slug: 'routing/go-router' },
						{ label: 'AutoRoute', slug: 'routing/auto-route' },
						{ label: 'Navigator', slug: 'routing/navigator' },
						{ label: 'GetX Routing', slug: 'routing/getx' },
					],
				},
				{
					label: 'Dependency injection',
					items: [
						{ label: 'Overview', slug: 'dependency-injection/overview' },
						{ label: 'GetIt', slug: 'dependency-injection/get-it' },
						{ label: 'Injectable', slug: 'dependency-injection/injectable' },
						{ label: 'GetX DI', slug: 'dependency-injection/getx' },
					],
				},
				{
					label: 'Networking',
					items: [
						{ label: 'Overview', slug: 'networking/overview' },
						{ label: 'Dio', slug: 'networking/dio' },
						{ label: 'HTTP', slug: 'networking/http' },
					],
				},
				{
					label: 'Storage',
					items: [
						{ label: 'Overview', slug: 'storage/overview' },
						{ label: 'SharedPreferences', slug: 'storage/shared-preferences' },
						{ label: 'Secure Storage', slug: 'storage/secure-storage' },
						{ label: 'Hive', slug: 'storage/hive' },
					],
				},
				{
					label: 'Generators',
					items: [
						{ label: 'Overview', slug: 'generators/overview' },
						{ label: 'Feature generator', slug: 'generators/feature' },
						{ label: 'Page generator', slug: 'generators/page' },
						{ label: 'Widget generator', slug: 'generators/widget' },
						{ label: 'Service generator', slug: 'generators/service' },
						{ label: 'Custom bricks', slug: 'generators/bricks' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'How it works', slug: 'guides/how-it-works' },
						{ label: 'Smart merge & regeneration', slug: 'guides/smart-merge' },
						{ label: 'Examples', slug: 'guides/examples' },
						{ label: 'Best practices', slug: 'guides/best-practices' },
						{ label: 'Migration guide', slug: 'guides/migration' },
						{ label: 'FAQ', slug: 'guides/faq' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: 'Project',
					items: [
						{ label: 'Roadmap', slug: 'project/roadmap' },
						{ label: 'Contributing', slug: 'project/contributing' },
						{ label: 'Changelog', slug: 'project/changelog' },
					],
				},
				{
					label: 'Reference',
					collapsed: false,
					items: [
						{ label: 'API reference', slug: 'reference/api' },
						{ label: 'stackchain.yaml', slug: 'reference/stackchain-yaml' },
						{ label: 'CLI reference', slug: 'reference/cli' },
						{ label: 'Presets', slug: 'reference/presets' },
					],
				},
			],
		}),
	],
});
