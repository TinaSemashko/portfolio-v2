interface Experience {
  dateEx: string;
  post: string;
  nameOrg: string;
  exp: string;
}

interface Education {
  dataEd: string;
  nameEd: string;
  nameOrg: string;
}

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i + 1);

export const arrayExperiences: Experience[] = range(7).map(n => ({
  dateEx: `experience.dataEx${n}`,
  post: `experience.post${n}`,
  nameOrg: `experience.nameOrg${n}`,
  exp: `experience.exp${n}`,
}));

export const arrayEducations: Education[] = range(4).map(n => ({
  dataEd: `education.dataEd${n}`,
  nameEd: `education.nameEd${n}`,
  nameOrg: `education.nameOrg${n}`,
}));

export const arrayCompetences: string[] = range(16).map(n => `competence${n}`);

export const arrayResume: string[] = range(6).map(n => `resume${n}`);

export const arrayCourses: string[] = range(3).map(n => `cours${n}`);
