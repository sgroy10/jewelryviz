export type ProjectStatus = 'pending' | 'active' | 'completed' | 'in_review' | 'approved' | 'revision';
export type ProjectCategory = 'designer' | 'cad_developer' | 'projects' | 'meetings' | 'others';

export interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: Date;
}

export interface FileSet {
  id: string;
  projectId: string;
  designImageUrl: string;
  stlFileUrl: string;
  renderUrl?: string;
  status: ProjectStatus;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  category: ProjectCategory;
  clientId: string;
  assignedTo: string;
  status: ProjectStatus;
  fileSets: FileSet[];
  deliveryDate: Date;
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface ProjectWithFileSets extends Project {
  fileSets: FileSet[];
}