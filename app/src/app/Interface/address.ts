import { Geo } from "../Interface/geo"

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}
