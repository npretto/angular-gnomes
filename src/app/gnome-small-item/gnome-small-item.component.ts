import { Component, OnInit } from "@angular/core"
import { Input } from "@angular/core"

@Component({
  selector: "app-gnome-small-item",
  templateUrl: "./gnome-small-item.component.html",
  styleUrls: ["./gnome-small-item.component.scss"]
})
export class GnomeSmallItemComponent implements OnInit {
  @Input() gnome

  constructor() {}

  ngOnInit() {}
}
