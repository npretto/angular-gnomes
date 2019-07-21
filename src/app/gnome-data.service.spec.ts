/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing"
import { GnomeDataServiceService } from "./gnome-data.service"

describe("Service: GnomeDataService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnomeDataServiceService]
    })
  })

  it("should ...", inject(
    [GnomeDataServiceService],
    (service: GnomeDataServiceService) => {
      expect(service).toBeTruthy()
    }
  ))
})
