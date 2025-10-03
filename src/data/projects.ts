import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
	{
		title: "Desarrollo de la página web de la institucion 1123",
		techStack: "CPanel + CSS + HTML + Boostrap",
		description: "Para ampliar el alcance de información para una institución, se diseño una página web estática. - Estado: Culminado",
		ctaText: "View Repo →",
		ctaLink: "#",
		icon: N8nIcon
	},
	{
		title: "Configuración y modificación en el juego Mugen",
		techStack: "",
		description: "Mugen es un programa de pelea en la cual permite integrar nuevos elementos a gusto de la persona. Permitiendo una variedad ilimitada. - Estado: En desarrollo.",
		ctaText: "Get Source < / >",
		ctaLink: "#",
		icon: SupabaseIcon
	},
	{
		title: "Elaboración de un formulario con ubicación real para la gestion logistica de resiudos solidos",
		techStack: "Google forms - APIS - Google Colabs",
		description: "Para conocer los puntos criticos de basura por las calles, se diseño un formulario la cual los ciudadanos podra responder mostrando la ubicacion de la acumulacion de basura .",
		ctaText: "Live Demo →",
		ctaLink: "#",
		icon: PhoenixIcon
	},
	{
		title: "Product Analytics Pipeline",
		techStack: "Node.js • PostHog • PostgreSQL • ClickHouse",
		description: "Event ingestion, batching, and replay; user properties and cohorts; dashboards for funnels, retention, and feature adoption.",
		ctaText: "Read Case Study →",
		ctaLink: "#",
		icon: PosthogIcon
	},
	{
		title: "Data Ingestion & ETL",
		techStack: "Python • Airflow • PostgreSQL • S3",
		description: "Scheduled extract/transform/load with schema migrations, data quality checks, and partitioned tables for analytics.",
		ctaText: "View Repo →",
		ctaLink: "#",
		icon: PythonIcon
	},
	{
		title: "Design System",
		techStack: "React • TypeScript • Tailwind CSS • Storybook",
		description: "Accessible UI kit with tokens, theming, and testing. Published as a versioned package with changelogs and docs.",
		ctaText: "Docs →",
		ctaLink: "#",
		icon: TailwindIcon
	},
];
