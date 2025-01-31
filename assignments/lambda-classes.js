// CODE here for your Lambda Classes

// ### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(data){
        this.name = data.name
        this.age = data.age
        this.location = data.location
    }
    speak(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
//   #### Instructor

//   * Now that we have a Person as our base class, we'll build our Instructor class.
//   * Instructor uses the same attributes that have been set up by Person
//   * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
//   * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  

  class Instructor extends Person{
    constructor(data){
        super(data)
        this.speciality = data.speciality
        this.favLanguage = data.favLanguage
        this.catchPhrase = data.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
        return `${student.name} receives a perfect score on ${subject}`;
    }

    gradeStudent(student) { // stretch
		let newGrade = Number(student.grade) + Number(((Math.random() * 10) - 2).toFixed(0));
		console.log(`${student.name} has a new grade! ${newGrade}%`);
		return newGrade;
  }
  }
 

//   #### Student

//   * Now we need some students!
//   * Student uses the same attributes that have been set up by Person
//   * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//   * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  

  class Student extends Person {
    constructor(data){
        super(data)
        this.className = data.className
        this.favSubjects = data.favSubjects
        this.previousBackground = data.previousBackground

        this.grade = (Math.random() * 100).toFixed(0);
        this.projectManager = projectManager
  }

  listsSubjects(){
       console.log(`${this.favSubjects}`);
       return `${this.favSubjects}`;
  }

  PRAssignment(subject){
    console.log(`${student.name} has submitted a PR for ${subject}`);
    return `${this.favSubjects}`;
  }

  sprintChallenge(subject){
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
    return `${student.name} has begun sprint challenge on ${subject}`;
    
  }

  graduate(){
      while(this.grade<70) {
          this.grade = this.projectManager.gradeStudent(this);
      }
      console.log(`${this.name} just graduated!`);
      return `${this.name} just graduated!`;
  }

  }
//   ### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
// * `gradClassName`: i.e. CS1
// * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
// * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor{
    constructor(data){
        super(data)
        this.gradClassName = data.gradClassName
        this.favInstructor = data.favInstructor
}

standUp(name, channel){
    console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`)
    return `${name} announces to ${channel}, @channel standy times!​​​​​`
    
}

debugsCode(){
    console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    return `${name} debugs ${student.name}'s code on ${subject}`
}
}


/*

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
* This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
* If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/