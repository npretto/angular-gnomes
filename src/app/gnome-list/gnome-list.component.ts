import { Component, OnInit } from "@angular/core"
import * as gnomesData from "../data.json"

@Component({
  selector: "app-gnome-list",
  templateUrl: "./gnome-list.component.html",
  styleUrls: ["./gnome-list.component.css"]
})
export class GnomeListComponent implements OnInit {
  gnomes = gnomesData["Brastlewark"]

  constructor() {}

  ngOnInit() {}
}
