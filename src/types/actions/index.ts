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
