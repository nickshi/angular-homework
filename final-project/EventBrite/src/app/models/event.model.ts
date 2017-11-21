export class Event {
  constructor(
              public eventID: Number,
              public userID: Number,
              public eventName: String,
              public eventLocation: String,
              public eventStartDate: String,
              public eventEndDate: String,
              public eventImageUrl: String,
              public eventType: String,
              public eventDescription: String)
  {
    
  }
}