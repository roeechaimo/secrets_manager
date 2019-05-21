import { Component, OnInit, Input } from "@angular/core";
import { SecretsService } from "src/app/services/secrets.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Secret } from "src/app/core/models/secret.model";

@Component({
  selector: "app-secret",
  templateUrl: "./secret.component.html",
  styleUrls: ["./secret.component.scss"]
})
export class SecretComponent implements OnInit {
  public secret: Secret;
  public errorMessage: String =
    "There are no secret details because this is a fake server";

  constructor(
    private _secretsService: SecretsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getSecret();
  }

  public goBack() {
    this._router.navigate([""]);
  }

  private getSecret() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this._secretsService.get(id).subscribe((response: Secret) => {
        this.secret = response;
      });
    });
  }
}
