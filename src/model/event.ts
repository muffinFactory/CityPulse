export type EventItemImage = {
  // "ratio": "3_2",
  url: string
  width: number
  height: number
}

export type EventVenueInfo = {
  name: string
  type: string // e.g. "venue"
  id: string
  test: boolean
  url: string
  locale: string
  images: {
    ratio: string // "16_9"
    url: string
    width: number
    height: number
    fallback: boolean
  }[]
  postalCode: string // "10451"
  timezone: string // "America/New_York"
  city: {
    name: string // ex. "Bronx"
  }
  state: {
    name: string // "New York"
    // stateCode: "NY"
  }
  country: {
    name: string // "United States Of America"
  }
  address: {
    line1: string // "1 East 161st Street"
  }
  location: {
    longitude: string // "-73.92762640"
    latitude: string // "40.82852370"
  }
}

export type EventDates = {
  start: {
    localDate?: string //"2025-09-27";
    localTime?: string //"13:05:00";
    dateTime?: string // "2025-09-27T17:05:00Z";
    dateTBD?: boolean
    dateTBA?: boolean
    timeTBA?: boolean
  }
}

// we omit unused ones
export type EventItemResponse = {
  id: string
  name?: string
  type?: string
  url?: string

  images?: EventItemImage[]
  // sales: {
  //   public: {}
  //   presales: []
  // }
  dates?: EventDates
  _embedded?: {
    venues?: EventVenueInfo[]
    // attractions: unknown[]
  }
}
