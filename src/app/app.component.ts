import { Component } from "@angular/core"
import * as gnomesData from "./data.json"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-gnomes"
  gnomes = gnomesData["Brastlewark"]
}
