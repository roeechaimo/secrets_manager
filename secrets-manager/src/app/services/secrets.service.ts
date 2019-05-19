import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewSecret } from "../core/models/new_secret.model";

const BASE_URL =
  "https://my-json-server.typicode.com/roeechaimo/fake_db/secrets";

@Injectable()
export class SecretsService {
  constructor(private _http: HttpClient) {}

  public get(id: String = null) {
    if (id) {
      return this._http.get(`${BASE_URL}/${id}`);
    }

    return this._http.get(BASE_URL);
  }

  public post(secret: NewSecret) {
    return this._http.post(BASE_URL, secret);
  }
}
