import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signin.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { AlignmentsComponent } from './alignments/alignments.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { DamageTypesComponent } from './damage-types/damage-types.component';
import { MagicSchoolsComponent } from './magic-schools/magic-schools.component';
import { RulesComponent } from './rules/rules.component';
import { WeaponPropertiesComponent } from './weapon-properties/weapon-properties.component';
import { SkillsComponent } from './skills/skills.component';
import { MonstersComponent } from './monsters/monsters.component';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "rules/ability_scores", component: AbilityScoresComponent },
  { path: "rules/alignments", component: AlignmentsComponent },
  { path: "rules/conditions", component: ConditionsComponent },
  { path: "rules/damage-types", component: DamageTypesComponent },
  { path: "rules/magic-schools", component: MagicSchoolsComponent },
  { path: "rules/rules", component: RulesComponent },
  { path: "rules/weapon-properties", component: WeaponPropertiesComponent },
  { path: "rules/skills", component: SkillsComponent },
  { path: "monsters", component: MonstersComponent },
  { path: "spells", component: SpellsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
