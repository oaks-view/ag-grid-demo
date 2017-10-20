import { ApplicationUser } from '../models/applicationUser';
import { Tribe } from '../models/tribe';
import { Sex } from '../models/sex';

export class DataService {
    getApplicationUsers(): ApplicationUser[] {
        return [
            new ApplicationUser('Moses Igbuku', 27, Tribe.isoko, Sex.male),
            new ApplicationUser('Cynthia Nkeaka', 22, Tribe.igbo, Sex.female),
            new ApplicationUser('Emeka Keneth', 29, Tribe.igbo, Sex.male),
            new ApplicationUser('Victor Ogudu', 25, Tribe.urhobo, Sex.male),
            new ApplicationUser('Rose James', 23, Tribe.isoko, Sex.female),
            new ApplicationUser('Maro Jake', 26, Tribe.isoko, Sex.male),
            new ApplicationUser('Philip Saul', 30, Tribe.yoruba, Sex.male),
            new ApplicationUser('Rose James', 23, Tribe.isoko, Sex.female),
            new ApplicationUser('Kenneth Charle', 34, Tribe.hausa, Sex.male),
            new ApplicationUser('Ruth Bennard', 22, Tribe.igbo, Sex.female),
            new ApplicationUser('Cynthia Rock', 18, Tribe.yoruba, Sex.female)
          ];
    }
}