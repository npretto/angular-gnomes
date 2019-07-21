import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { GnomeSmallItemComponent } from "./gnome-small-item/gnome-small-item.component"

@NgModule({
  declarations: [AppComponent, GnomeSmallItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
