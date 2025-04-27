export class Skill {
  id?: number;
  title?: string;
  description?: string;
  createAt?: string;
  createBy?: number;
  updateAt?: string;
  updatedBy?: number;
  isActive?: boolean;
}
export class SkillMatching {
  id?: number;
  idPoste?: string;
  idResume?: string;
  idSkill?: Skill;
  createAt?: Date;
  updateAt?: Date;
  createBy?: number;
  updatedBy?: number;
  isActive?: boolean;}