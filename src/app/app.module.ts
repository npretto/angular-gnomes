import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { GnomeSmallItemComponent } from "./gnome-small-item/gnome-small-item.component"
import { GnomeDetailsItemComponent } from "./gnome-details-item/gnome-details-item.component"
import { GnomeListComponent } from "./gnome-list/gnome-list.component"

@NgModule({
  declarations: [
    AppComponent,
    GnomeSmallItemComponent,
    GnomeDetailsItemComponent,
    GnomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: GnomeListComponent },
      { path: "gnome/:gnomeId", component: GnomeDetailsItemComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
