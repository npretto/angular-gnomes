import { Component, OnInit, Input } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { GnomeDataService } from "../gnome-data.service"

@Component({
  selector: "app-gnome-details-item",
  templateUrl: "./gnome-details-item.component.html",
  styleUrls: ["./gnome-details-item.component.scss"]
})
export class GnomeDetailsItemComponent implements OnInit {
  gnome
  friends

  constructor(
    private route: ActivatedRoute,
    private gnomeDataService: GnomeDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gnomeDataService
        .getGnomeById(parseInt(params.get("gnomeId")))
        .subscribe(gnome => {
          this.gnome = gnome
          this.friends = []

          this.gnomeDataService
            .getGnomesByNames(gnome.friends)
            .subscribe(friends => (this.friends = friends))
        })
    })
  }
}
