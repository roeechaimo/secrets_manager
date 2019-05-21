import { Component, OnInit } from "@angular/core";
import { SecretsService } from "../services/secrets.service";
import { Router } from "@angular/router";
import { Secret } from "../core/models/secret.model";
import { PostSecretComponent } from "./post-secret/post-secret.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-secrets",
  templateUrl: "./secrets.component.html",
  styleUrls: ["./secrets.component.scss"]
})
export class SecretsComponent implements OnInit {
  public secrets: Secret[];
  public dataSource: Secret[];
  public displayedColumns: String[] = ["id", "name", "createdAt"];

  constructor(
    private _secretsService: SecretsService,
    private _router: Router,
    private _postSecretDialog: MatDialog
  ) {}

  ngOnInit() {
    // TODO - create guard
    this.getSecrets();
  }

  private getSecrets() {
    this._secretsService.get().subscribe((response: Secret[]) => {
      this.secrets = response;
      this.dataSource = this.secrets;
    });
  }

  public getSecret(secret: Secret) {
    this._router.navigate(["/secret", secret.id]);
  }

  public openPostDialog() {
    const dialogRef = this._postSecretDialog.open(PostSecretComponent);
    dialogRef.afterClosed().subscribe((secret: Secret) => {
      if (secret) {
        this.secrets.push(secret);
        this.dataSource = [...this.secrets];
      }
    });
  }
}
