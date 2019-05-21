import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Secret } from "src/app/core/models/secret.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SecretsService } from "src/app/services/secrets.service";
import { NewSecret } from "src/app/core/models/new_secret.model";

@Component({
  selector: "app-post-secret",
  templateUrl: "./post-secret.component.html",
  styleUrls: ["./post-secret.component.scss"]
})
export class PostSecretComponent implements OnInit {
  public form: FormGroup;
  public errors = {};
  public secret: Secret;
  public dialogHeader: string = "Post Secret";

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<PostSecretComponent>,
    private _secretsService: SecretsService
  ) {}

  ngOnInit() {
    this.initForm();
    this.initFormErrors();
  }

  public submitForm() {
    if (this.form.invalid) {
      return;
    }

    const newSecret: NewSecret = this.form.getRawValue();

    this._secretsService.post(newSecret).subscribe(response => {
      const res = response;
      if (res) {
        let date = new Date();
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();

        res["createdAt"] = `${day}-${month}-${year}`;

        this._dialogRef.close(res);
      }
    });
  }

  private initForm() {
    this.form = this._fb.group({
      name: ["", [Validators.required]],
      text: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(10)]
      ],
      allowExport: [true, []]
    });
  }

  private initFormErrors() {
    this.errors = {
      required: "This field is required",
      text: "Your password must contain 6-10 characters"
    };
  }
}
