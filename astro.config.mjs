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
				'Scaffold a Flutter app from a YAML config. Add features with one command, keep router and DI in sync, and migrate your stack safely.',
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
					label: 'Commands',
					items: [
						{ label: 'Overview', slug: 'cli/overview' },
						{ label: 'init', slug: 'cli/init' },
						{ label: 'feature', slug: 'cli/feature' },
						{ label: 'test', slug: 'cli/test' },
						{ label: 'remove & rename', slug: 'cli/remove' },
						{ label: 'sync', slug: 'cli/sync' },
						{ label: 'upgrade', slug: 'cli/upgrade' },
						{ label: 'migrate', slug: 'cli/migrate' },
						{ label: 'doctor & presets', slug: 'cli/doctor' },
						{ label: 'make & bricks', slug: 'cli/make' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'How it works', slug: 'guides/how-it-works' },
						{ label: 'Your code stays safe', slug: 'guides/smart-merge' },
						{ label: 'Examples', slug: 'guides/examples' },
						{ label: 'Best practices', slug: 'guides/best-practices' },
						{ label: 'Migration', slug: 'guides/migration' },
						{ label: 'FAQ', slug: 'guides/faq' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: 'Stack options',
					collapsed: true,
					items: [
						{ label: 'Architecture', slug: 'architecture/overview' },
						{ label: 'State management', slug: 'state-management/overview' },
						{ label: 'Routing', slug: 'routing/overview' },
						{ label: 'Dependency injection', slug: 'dependency-injection/overview' },
						{ label: 'Networking', slug: 'networking/overview' },
						{ label: 'Storage', slug: 'storage/overview' },
					],
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{ label: 'stackchain.yaml', slug: 'reference/stackchain-yaml' },
						{ label: 'CLI', slug: 'reference/cli' },
						{ label: 'Presets', slug: 'reference/presets' },
						{ label: 'API', slug: 'reference/api' },
					],
				},
				{
					label: 'Project',
					collapsed: true,
					items: [
						{ label: 'Roadmap', slug: 'project/roadmap' },
						{ label: 'Contributing', slug: 'project/contributing' },
						{ label: 'Changelog', slug: 'project/changelog' },
					],
				},
			],
		}),
	],
});
