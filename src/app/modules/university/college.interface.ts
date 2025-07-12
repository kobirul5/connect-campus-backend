export interface CollegeEvent {
  name: string;
  date: string;
}

export interface CollegeResearch {
  title: string;
  year: number;
}


export interface ICollege {
  name: string;
  image: string;
  admissionDates: string;
  events: CollegeEvent[];
  researchHistory: CollegeResearch[];
  sports: string[];
  rating: number;
  description: string;
}
