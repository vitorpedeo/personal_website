export type IExperience = {
	company: string;
	localization: string;
	startDate: string;
	endDate: string | null;
	role: string;
	responsibilities: string[];
	techs: {
		name: string;
		logo: string;
	}[];
};

export type IEducation = {
	institution: string;
	degree: string;
	startDate: string;
	endDate: string | null;
	summary: string;
};

export type IProject = {
	title: string;
	description: string;
	image: string;
	repoLink: string;
	liveLink: string;
	techs: {
		name: string;
		color: string;
	}[];
};

export type IBlogPost = {
	title: string;
	slug: string;
	publishedAt: string;
	image: string;
	excerpt: string;
	content: any;
	tags: string[];
	readingTime: number;
};
