export interface IAdmin {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: 'superadmin' | 'admin' | 'moderator';
  profile: {
    name: string;
    image?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
