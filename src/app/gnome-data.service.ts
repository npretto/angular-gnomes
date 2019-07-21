import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Gnome } from "./gnome"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class GnomeDataService {
  static gnomesUrl: string =
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  gnomes: Observable<Gnome[]>

  constructor(private http: HttpClient) {
    console.log("ctor gnome data service")
    this.gnomes = Observable.create(function(observer) {
      http.get(GnomeDataService.gnomesUrl).subscribe(data => {
        observer.next(data["Brastlewark"])
        observer.complete()
      })
    })
  }

  getGnomeById(id: number) {
    return Observable.create(observer => {
      this.gnomes.subscribe((data: Gnome[]) => {
        observer.next(data[id])
        observer.complete()
      })
    })
  }

  getGnomesByNames(names: string[]): Observable<Gnome[]> {
    return Observable.create(observer => {
      this.gnomes.subscribe(gnomes => {
        const friends = names.map(name => gnomes.find(g => g.name === name))
        observer.next(friends)
        observer.complete()
      })
    })
  }

  getGnomes(): Observable<Gnome[]> {
    return this.gnomes
  }
}
