"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
const sum = (a, b) => {
    return { c: a + b };
};
let mystring = ["hey", true, 32342];
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 312] = "U";
    Grade[Grade["D"] = 313] = "D";
    Grade[Grade["C"] = 314] = "C";
    Grade[Grade["B"] = 315] = "B";
    Grade[Grade["A"] = 316] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
function map(arr, func) {
    return arr.map(func);
}
let myName;
let Ourname;
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(3, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(5, 4));
const total = (b, ...nums) => {
    return b * nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(7, 1, 2, 3, 4));
const creatError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberorString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return creatError('bye');
};
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addorConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addorConcat(2, 3, "concat");
let nextVal = addorConcat(2, 3, "concat");
10;
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const NextImage = document.getElementById("#img");
const body = document.querySelector("body");
const main = document.createElement("main");
const manqu = document.createElement("marquee");
body.append(main);
main.style.backgroundColor = "black";
main.style.height = "100vh";
main.style.display = "grid";
main.style.placeItems = "center";
main.style.color = "white";
main.style.fontSize = "80px";
main.style.textAlign = "center";
main.append(manqu);
manqu.textContent = "Hello, Mother Fucker!";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, i'm ${this.age}`;
    }
}
const shit = new Coder("DAVE", "rOCK", 56, "PIGIN");
console.log(shit.getAge());
class wedev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new wedev("Mac", "Sara", "Lofi", 36, "igbo");
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name}  ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("John", "guitar");
console.log(Page.play(("strums")));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(Value) {
        if (Array.isArray(Value) && Value.every(el => typeof el === 'string')) {
            this.dataState = Value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["not", "Good"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "madoo"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "1"];
console.log(MyBands.data);
// interface TransactionObj {
//  readonly [index: string]: number
// }
const todaystransactions = {
    Pizza: 19,
    Books: 20,
    Job: 93
};
console.log(todaystransactions.Pizza);
console.log(todaystransactions["Pizza"]);
let prop = 'Pizza';
console.log(todaystransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaystransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    Clases: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentkey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentkey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
};
for (const rvenue in monthlyIncomes) {
    console.log(monthlyIncomes[rvenue]);
}
////////////////////////////////////////////////////////
//Generics
const Echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3, 4]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const Checkboolvalue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 76, name: "dave" }));
console.log(processUser({ id: 76, name: "dave" }));
const getUsersproperty = (users, Key) => {
    return users.map(user => user[Key]);
};
class Stateobj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new Stateobj("John");
console.log(store.state);
store.state = "dave";
// store.state = 12
const Anewstore = new Stateobj(["John"]);
Anewstore.state = ["dave"];
Anewstore.state = [12];
console.log(Anewstore.state);
const UpdateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final project",
    grade: 0,
};
console.log(UpdateAssignment(assign1, { grade: 95 }));
const assignGraded = UpdateAssignment(assign1, { grade: 95 });
// Required && Readonly
const recordassignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordassignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//  Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "C"
};
const gradeData = {
    Sara: { assign1: 44, assign2: 92 },
    Kelly: { assign1: 74, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 93
};
const preview = {
    studentId: "K123",
    title: "final project"
};
// ReturnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://pnews-uxov.onrender.com/api/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUser().then(user => console.log(user));
