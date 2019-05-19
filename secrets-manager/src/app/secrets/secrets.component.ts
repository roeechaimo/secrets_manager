import { Component, OnInit } from "@angular/core";
import { SecretsService } from "../services/secrets.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-secrets",
  templateUrl: "./secrets.component.html",
  styleUrls: ["./secrets.component.scss"]
})
export class SecretsComponent implements OnInit {
  // TODO - type secret
  public secrets: any;

  constructor(
    private _secretsService: SecretsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getSecrets();
  }

  private getSecrets() {
    this._secretsService.get().subscribe(response => {
      const res = response;
      this.secrets = res;
    });
  }

  public getSecret(id) {
    this._router.navigate(["/secret", id]);
  }

  // TODO - get secret data from an add secret page
  public post() {
    const secret = {
      name: "Some password",
      allowExport: true,
      text: "somepassword123"
    };

    this._secretsService.post(secret).subscribe(response => {
      const res = response;
      if (res) {
        let date = new Date();
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();

        res["createdAt"] = `${day}-${month}-${year}`;
        this.secrets.push(res);
      }

      console.log(res);
    });
  }
}
