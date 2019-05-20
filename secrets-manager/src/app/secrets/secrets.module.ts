import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { SecretsComponent } from "./secrets.component";
import { SecretComponent } from "./secret/secret.component";
import { SecretsService } from "../services/secrets.service";
import { PostSecretComponent } from "./post-secret/post-secret.component";

@NgModule({
  declarations: [SecretsComponent, SecretComponent, PostSecretComponent],
  imports: [CommonModule, SharedModule],
  providers: [SecretsService],
  entryComponents: [PostSecretComponent]
})
export class SecretsModule {}
