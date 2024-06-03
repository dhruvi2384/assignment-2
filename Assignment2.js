class person {
  constructor(firstName, lastName, age, email, hobbies = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.hobbies = hobbies;
    if (!Number.isInteger(age) || age < 0) {
      console.log("please add valid age");
      throw new Error("Invalid age.");
    }
  }
  //get full name
  getFullName() {
    let fullName = this.firstName + this.lastName;
    return fullName;
  }
  addHobbies(hobby) {
    this.hobbies.push(hobby);
  }
  removehobby(hobby) {
    let removeHobby = this.hobbies.indexOf(hobby);
    console.log(removeHobby)
    if (removeHobby !== -1) {
      this.hobbies.splice(removeHobby, 1);
    } else {
      console.error(`${hobby} not found in hobbies.`);
    }
  }
  sendEmail(subject,message){
    console.log(`Email Sent to ${this.email} - subject ${subject} , Message ${message}`)
  }
}
const personDetil = new person("Dhruvi", "bhavsar", 20, "dhruvi@gmail.com", [
  "Reading",
  "Gardening",
]);
const personFullname = personDetil.getFullName();
console.log(personFullname);

const myHobbies = personDetil.addHobbies("Cooking");
console.log(personDetil.hobbies);

const remove = personDetil.removehobby("Cooking");
console.log(personDetil.hobbies);

const emailSent = personDetil.sendEmail('Greetings', 'Hello! How are you?')
console.log(emailSent)