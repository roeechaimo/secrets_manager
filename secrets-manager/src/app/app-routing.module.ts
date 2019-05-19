import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecretsComponent } from "./secrets/secrets.component";
import { SecretComponent } from "./secrets/secret/secret.component";

const routes: Routes = [
  { path: "", redirectTo: "/secrets", pathMatch: "full" },
  { path: "secrets", component: SecretsComponent },
  { path: "secret/:id", component: SecretComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
