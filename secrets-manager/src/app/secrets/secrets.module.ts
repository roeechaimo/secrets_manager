import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SecretsComponent } from "./secrets.component";
import { SecretsService } from "../services/secrets.service";
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [SecretsComponent, SecretComponent],
  imports: [CommonModule],
  providers: [SecretsService]
})
export class SecretsModule {}
