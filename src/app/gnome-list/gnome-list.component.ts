import { Component, OnInit } from "@angular/core"
import { GnomeDataService } from "../gnome-data.service.js"
import { Gnome } from "../gnome.js"

@Component({
  selector: "app-gnome-list",
  templateUrl: "./gnome-list.component.html",
  styleUrls: ["./gnome-list.component.scss"]
})
export class GnomeListComponent implements OnInit {
  gnomes: Gnome[]
  searchText: string = ""

  constructor(private gnomeDataService: GnomeDataService) {}

  ngOnInit() {
    this.gnomeDataService.getGnomes().subscribe(gnomes => {
      this.gnomes = gnomes
    })
  }

  search() {
    this.gnomeDataService.search(this.searchText).subscribe(gnomes => {
      this.gnomes = gnomes
    })
  }
}
