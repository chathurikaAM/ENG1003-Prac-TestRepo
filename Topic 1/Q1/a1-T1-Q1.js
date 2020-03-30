//If we had many students, we could make an object for each, but you might have 'too many variables’ to manage - we could put all of these students into an array to make it easier to manage.
//define students details in a array
let studentsList  = [
							{ firstName: "John",
							 lastName: "Mycroft",
							 indexNumber: "00001",
							 weight: 46,
							 height: 150,
							 marks: {math: 98,
									 programming: 90,
									 science: 70
							         }
							},

							{ firstName: "Mike",
							 lastName: "Tian",
							 indexNumber: "00002",
							 weight: 70,
							 height: 180,
							 marks: {math: 100,
									 programming: 50,
									 science: 70
							         }
							},

							 { firstName: "Chathu",
							 lastName: "Amarathunga",
							 indexNumber: "00003",
							 weight: 56,
							 height: 164,
							 marks: {math: 88,
									 programming: 80,
									 science: 85
							         }
							 },

							{ firstName: "Amila",
							 lastName: "Silva",
							 indexNumber: "00004",
							 weight: 64,
							 height: 180,
							 marks: {math: 98,
									 programming: 100,
									 science: 100
							         }
							}
							];


//if programming marks >= 90 -> grade is HD, mark > 70 && marks < 90 -> grade is D, else C

let out = "";
let studentMarks = 0;
for (let i = 0; i < studentsList.length; i ++) {
	studentMarks = studentsList[i].marks.programming;
	if (studentMarks >= 90) {
		 out = "name: " + studentsList[i].firstName + ", grade: HD";
	} else if (studentMarks > 70) {
		 out = "name: " + studentsList[i].firstName + ", grade: D";
	} else {
		out = "name: " + studentsList[i].firstName + ", grade: C";
	}

	console.log(out);
}


//need to find the name of the student with index 00002. Assume index is unique to each person.
let index = "";
for (let i = 0; i < studentsList.length; i ++) {
	index = studentsList[i].indexNumber;
	if ( index == "00002") {
		console.log(" <br/> Index Number: " + index + ", Name: " + studentsList[i].firstName + " " +  studentsList[i].lastName);

		break;
	}
}
