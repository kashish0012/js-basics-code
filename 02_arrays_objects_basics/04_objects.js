// const user = new Object(); // singleton object
const newUser = {}; // non sigleton object

newUser.id = "123abc";
newUser.name = "Kashish";
newUser.isLoggedIn = false;

// console.log(newUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kashish",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; // it creates objects under object

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "kash@google.com"
    },
    {
        id: 2,
        email: "Hasrh@google.com"
    },
    {
        id: 3,
        email: "vansh@google.com"
    }
]

// console.table([users[0].email, users[1].email, users[2].email]);

// console.log(newUser);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

// console.log(newUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS crash course",
    price: "999",
    courseInstructor: "kashish"
}

// course.courseInstructor;

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "kashish",
//     "coursename": "JS crash",       // JSON structure
//     "price": "free"
// }

// [
//     {},
//     {},  // JSON structure can be in form of objects in arrays 
//     {}
// ]