import { AboutSection } from '@/app/[locale]/_/components/sections/about-section';
import { BlogSection } from '@/app/[locale]/_/components/sections/blog-section';
import { EducationSection } from '@/app/[locale]/_/components/sections/education-section';
import { ExperienceSection } from '@/app/[locale]/_/components/sections/experience-section';
import { HeroSection } from '@/app/[locale]/_/components/sections/hero-section';
import { ProjectsSection } from '@/app/[locale]/_/components/sections/projects-section';
import { TechStackSection } from '@/app/[locale]/_/components/sections/tech-stack-section';

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TechStackSection />
			<ExperienceSection />
			<ProjectsSection />
			<EducationSection />
			<BlogSection />
		</>
	);
}
