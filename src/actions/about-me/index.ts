import { imageBuilder, sanityClient } from '@/lib/sanity';
import { IEducation, IExperience } from '@/types';
import { getLocale } from '@/utils';

export async function fetchAboutMe() {
	const experienceQuery = `
		*[_type == "experience"] {
			company,
			"localization": localization[_key == $locale][0].value,
			startDate,
			endDate,
			"role": role[_key == $locale][0].value,
			"responsibilities": responsibilities[_key == $locale][0].value,
			"techs": techs[]-> { name, logo }
		} | order(startDate desc)
	`;
	const educationQuery = `
		*[_type == "education"] {
			"institution": institution[_key == $locale][0].value,
			"degree": degree[_key == $locale][0].value,
			startDate,
			endDate,
			"summary": summary[_key == $locale][0].value,
		} | order(startDate desc)
	`;

	const locale = getLocale();

	const experiences = await sanityClient.fetch<IExperience[]>(experienceQuery, {
		locale,
	});
	const educations = await sanityClient.fetch<IEducation[]>(educationQuery, {
		locale,
	});

	const result = {
		educations,
		experiences: experiences.map(exp => ({
			...exp,
			techs: exp.techs.map(tech => ({
				...tech,
				logo: imageBuilder.image(tech.logo).width(12).url(),
			})),
		})),
	};

	return result;
}
