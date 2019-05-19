import { Component, OnInit, Input } from "@angular/core";
import { Secret } from "src/app/core/models/secret.model";
import { SecretsService } from "src/app/services/secrets.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-secret",
  templateUrl: "./secret.component.html",
  styleUrls: ["./secret.component.scss"]
})
export class SecretComponent implements OnInit {
  // TODO - type Secret
  public secret: any;

  constructor(
    private _secretsService: SecretsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSecret();
  }

  private getSecret() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this._secretsService.get(id).subscribe(response => {
        const res = response;
        this.secret = res;
        console.log(res);
      });
    });
  }
}
