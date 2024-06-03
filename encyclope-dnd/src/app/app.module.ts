import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SignupComponent } from './signup/signin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { HttpClientModule } from '@angular/common/http';
import { AlignmentsComponent } from './alignments/alignments.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { DamageTypesComponent } from './damage-types/damage-types.component';
import { MagicSchoolsComponent } from './magic-schools/magic-schools.component';
import { RulesComponent } from './rules/rules.component';
import { WeaponPropertiesComponent } from './weapon-properties/weapon-properties.component';
import { SkillsComponent } from './skills/skills.component';
import { RacesComponent } from './races/races.component';
import { MonstersComponent } from './monsters/monsters.component';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AbilityScoresComponent,
    AlignmentsComponent,
    ConditionsComponent,
    DamageTypesComponent,
    MagicSchoolsComponent,
    RulesComponent,
    WeaponPropertiesComponent,
    SkillsComponent,
    RacesComponent,
    MonstersComponent,
    HomeComponent,
    SpellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"encyclope-dnd","appId":"1:654533146199:web:e913120cbc99430e2cd512","storageBucket":"encyclope-dnd.appspot.com","apiKey":"AIzaSyBwY2Ap9o7vqxnAmnCqEcCI_H431D3_UWQ","authDomain":"encyclope-dnd.firebaseapp.com","messagingSenderId":"654533146199"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
