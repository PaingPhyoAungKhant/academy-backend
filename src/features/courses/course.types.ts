export interface IContent {
  content_title: string;
  content_order: number;
}

export interface IModule {
  module_tittle: string;
  module_description?: string;
  module_order: number;
  contents: IContent[];
}

export interface IMode {
  type: 'online' | 'on-campus';
  details: {
    platform?: string;
    location?: string;
    timetable: string;
  };
}

export interface ICourse extends Document {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  description: string;
  image: string;
  categories: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  modes: IMode[];
  instructor: string;
  duration: number;
  enrollment_count: number;
  ratings: number;
  overview: string;
  learnings: string[];
  modules: IModule[];
  reviews: string[];
}
