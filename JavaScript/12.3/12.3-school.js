const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    };

    const findPerson = (type,id) =>{
        const type1 = school[type].find((e) => e.id === id);
        return type1
    }
    


    const assignTeachersSubject = (id, subject) => {
        const teacher = school.teachers.find((teacher) => teacher.id === id);
        if (teacher){
            if(teacher.subjects.includes(subject)){
              a =  teacher.subjects.push(subject)
              return a
            }

            return teacher
        }
    }

    const addStudent = (school, id, name, age) => {
        const student = {
            id: id,
            name: name,
            age: age,
        };
        school.students.push(student);
        console.log(school);
    };
    // console.log(findPerson("students",13));
    // console.log(findPerson("teachers",1));
    // console.log(assignStudent(12,'history'))
    console.log(assignTeachersSubject(7,'sports')) 
    // console.log(addStudent(school,17,'Layla',26))
    // console.log(assignStudent(13,'history'))
    // console.log(assignStudent(10,'history'))




