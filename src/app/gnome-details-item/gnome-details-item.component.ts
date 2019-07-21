import { Component, OnInit, Input } from "@angular/core"
import * as gnomesData from "../data.json"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-gnome-details-item",
  templateUrl: "./gnome-details-item.component.html",
  styleUrls: ["./gnome-details-item.component.scss"]
})
export class GnomeDetailsItemComponent implements OnInit {
  gnomes = gnomesData["Brastlewark"]
  gnome
  friends

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gnome = this.gnomes[+params.get("gnomeId")]
      console.log(this.gnome)
      this.friends = this.gnome.friends.map(name =>
        this.gnomes.find(g => g.name === name)
      )
    })
  }
}
