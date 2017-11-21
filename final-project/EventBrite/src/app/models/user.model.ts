export class User {
  createEvents: Number[] = [];
  joinEvents: Number[] = [];
  userID: Number;
  constructor(public userName:String, public userEmail:String, public password: String){}

  createEvent(eid: Number) {
    if (!this.createEvents.includes(eid)) {
      this.createEvents.push(eid);
    }
  }

  joinEvent(eid: Number) {
    if (!this.joinEvents.includes(eid)) {
      this.joinEvents.push(eid);
    }
  }
}