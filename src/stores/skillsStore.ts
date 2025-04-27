import { ISkill } from '../interfaces/ISkill';
import { SkillsService } from '../services/skillsService';

export class SkillsStore {
    private skillsService = new SkillsService();
    public availableSkills: ISkill[] = [];

    async loadSkills(): Promise<void> {
        try {
            this.availableSkills = await this.skillsService.getSkills();
        } catch (error) {
            console.error('Error loading skills:', error);
            this.availableSkills = [];
        }
    }
}
