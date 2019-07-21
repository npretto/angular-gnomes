import { Component, OnInit } from "@angular/core"
import { GnomeDataService } from "../gnome-data.service.js"
import { Gnome } from "../gnome.js"

@Component({
  selector: "app-gnome-list",
  templateUrl: "./gnome-list.component.html",
  styleUrls: ["./gnome-list.component.css"]
})
export class GnomeListComponent implements OnInit {
  gnomes: Gnome[]

  constructor(private gnomeDataService: GnomeDataService) {}

  ngOnInit() {
    this.gnomeDataService.getGnomes().subscribe(gnomes => {
      this.gnomes = gnomes
    })
  }
}
