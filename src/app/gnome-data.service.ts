import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Gnome } from "./gnome"
import { Observable } from "rxjs"
import { Cacheable } from "ngx-cacheable"
import { DOMStorageStrategy } from "ngx-cacheable/common/DOMStorageStrategy"

@Injectable({
  providedIn: "root"
})
export class GnomeDataService {
  static gnomesUrl: string =
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  gnomes: Observable<Gnome[]>

  constructor(private http: HttpClient) {
    console.log("ctor gnome data service")
    this.gnomes = this.loadGnomes()
  }

  @Cacheable({
    maxAge: 1000 * 60 * 60 * 24 * 2, //cache will last 2 days
    storageStrategy: DOMStorageStrategy
  })
  loadGnomes(): Observable<Gnome[]> {
    return Observable.create(observer => {
      this.http.get(GnomeDataService.gnomesUrl).subscribe(data => {
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

  search(text: string): Observable<Gnome[]> {
    const lowerCaseText = text.toLowerCase()
    return Observable.create(observer => {
      this.gnomes.subscribe(gnomes => {
        const filtered = gnomes.filter(g =>
          g.name.toLowerCase().includes(lowerCaseText)
        )
        observer.next(filtered)
        observer.complete()
      })
    })
  }
}
