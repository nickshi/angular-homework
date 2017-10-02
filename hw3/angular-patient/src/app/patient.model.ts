export class Patient {
  firstName: string;
  lastName: string;
  emailAddress: string;
  profileImage: string;
  doctorName: string;
  constructor(
    firstName: string,
    lastName: string,
    emailAddress: string,
    profileImage: string,
    doctorName: string
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.profileImage = profileImage;
    this.doctorName = doctorName;
  }
}