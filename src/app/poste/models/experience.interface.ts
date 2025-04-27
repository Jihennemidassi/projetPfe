export class Experience {
    id?: number;
    title?: string;
    description?: string;
    createAt?: string;
    createBy?: number;
    updateAt?: string;
    updatedBy?: number;
    isActive?: boolean;
  }
  export class ExperienceMatching {
    id?: number;
    idPoste?: string;
    idResume?: string;
    idExperience?: Experience;
    createAt?: Date;
    updateAt?: Date;
    createBy?: number;
    updatedBy?: number;
    isActive?: boolean;}