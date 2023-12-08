"use strict";
function greet(person: string, date: Date) {
  console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());


const sum = (a: number, b: string) => {
  return{c:  a + b}
}


let mystring = ["hey", true, 32342]


// enums

enum Grade {
  U = 312,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

type stringorNumber = (string | number)[]

let myName: "daddy"
let Ourname: "Amy" | "john" | "dave"


const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg("hello")
logMsg(add(3,3))


let subtract = function (c: number, d: number): number {
  return c - d
}

// type mathFunc = (a: number, b: number) => number
interface mathFunc {
  (a: number, b: number): number
}


let multiply: mathFunc = function (c, d) {
  return c * d
}

logMsg(multiply(5,4))

const total = (b: number, ...nums: number[]): number => {
  return b * nums.reduce((prev, curr) => prev + curr ) 
}

logMsg(total(7,1,2,3,4))


const creatError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false
}

const numberorString = (value: number | string): string => {
  if (typeof value === "string") {
    return "string"
  }
  if (isNumber(value)) {
    return "number"
  } 

  return creatError('bye')
}


type One = string
type Two = string | number
type Three = "hello"


// convert to more or less specific

let a: One = "hello"
let b = a as Two // less specific
let c = a as Three // more specific


let d = <One>"world"
let e = <string>"world"

const addorConcat = (a: number, b: number, c: "add" | "concat"): number | string =>  {
    if (c === "add") return a + b
    return "" + a + b
}

let myVal: string = addorConcat(2,3, "concat") as string
let nextVal: number = addorConcat(2,3, "concat") as number

(10 as unknown) as string

const img = document.querySelector("img") as HTMLImageElement
const myImg = document.getElementById("#img") as HTMLImageElement
const NextImage = <HTMLImageElement>document.getElementById("#img")

const body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement
const main: HTMLElement = document.createElement("main")
const manqu:  HTMLMarqueeElement = document.createElement("marquee")

body.append(main)

main.style.backgroundColor = "black"
main.style.height = "100vh"
main.style.display = "grid"
main.style.placeItems = "center"
main.style.color = "white"
main.style.fontSize = "80px"
main.style.textAlign = "center"

main.append(manqu)

manqu.textContent = "Hello, Mother Fucker!"

class Coder {
  constructor (public readonly name: string, public music: string, private age: number, protected lang: string) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `hello, i'm ${this.age}`
  }
}

const shit = new Coder("DAVE", "rOCK", 56, "PIGIN")
console.log(shit.getAge());

class wedev extends Coder {
  constructor (public computer: string, name: string, music: string, age: number, lang: string) {
    super(name, music, age, lang)
    this.computer = computer
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const Sara = new wedev("Mac", "Sara", "Lofi", 36, "igbo")
console.log(Sara.getLang());

interface musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements musician {
  name: string
  instrument: string
 constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
 }

  play(action: string) {
   return `${this.name}  ${action} the ${this.instrument}`
 }
}

const Page = new Guitarist("John", "guitar")
console.log(Page.play(("strums")));


class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string){
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(Peeps.count);
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);


class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(Value: string[]) {
    if(Array.isArray(Value) && Value.every(el => typeof el === 'string')) {
      this.dataState = Value
      return
    } else throw new Error("Param is not an array of strings")
  }
}

const MyBands = new Bands()
MyBands.data = ["not", "Good"]
console.log(MyBands.data);
MyBands.data = [...MyBands.data,"madoo"]
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "1"]
console.log(MyBands.data);


//  index signatures

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}
// interface TransactionObj {
//  readonly [index: string]: number
// }

const todaystransactions: TransactionObj = {
  Pizza: 19,
  Books: 20,
  Job: 93
}

console.log(todaystransactions.Pizza);
console.log(todaystransactions["Pizza"]);

let prop: string = 'Pizza' 
console.log(todaystransactions[prop])


const todayNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todayNet(todaystransactions));

// todaystransactions.Pizza = 100


/////////////////////////////////////////////

interface Student {
  // [me: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  Clases?: number[],
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  Clases: [100, 200],
}

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}


Object.keys(student).map(key => {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
})


const logStudentkey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentkey(student, "name")

////////////////////////////////////////

interface incomes {
  [Him: string]: number
}

type Streams = "salary" | "bonus" | "sideHustle"

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250
}

for (const rvenue in monthlyIncomes) {
  console.log(monthlyIncomes[rvenue as keyof Incomes]);
}


////////////////////////////////////////////////////////
//Generics

const Echo = <Me>(arg: Me): Me => arg

const isObj = <Me>(arg: Me): boolean => {
  return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1,2,3]));
console.log(isObj({name: "John"}));
console.log(isObj(null));


const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return {arg, is: false}
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return {arg, is: false}
  }
  return {arg, is: !!arg}
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({name: "Dave"}));
console.log(isTrue([]));
console.log(isTrue([1,2,3,4]));
console.log(isTrue(NaN));
console.log(isTrue(-0));


interface BoolCheck<T> {
  value: T,
  is: boolean
}

const Checkboolvalue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {value: arg, is: false}
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return {value: arg, is: false}
  }
  return {value: arg, is: !!arg}
}


interface HasId {
  id: number
}

const processUser = <T extends HasId>(user: T): T => {
  return user
}

console.log(processUser({id: 76, name: "dave"}));
console.log(processUser({id: 76, name: "dave"}));

const getUsersproperty = <T extends HasId, K extends keyof T>(users: T[], Key: K): T[K][] => {
  return users.map(user => user[Key])
}


class Stateobj<T> {
  private data: T

  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}

const store = new Stateobj("John")
console.log(store.state);
store.state = "dave"
// store.state = 12

const Anewstore = new Stateobj<(string | number | boolean)[]>(["John"])
Anewstore.state = ["dave"]
Anewstore.state = [12]
console.log(Anewstore.state);


////////////////////////////////////////////////////////////
// Utility type

// Partial 

interface Assignment {
 studentId: string,
 title: string,
 grade: number,
 verified?: boolean
}


const UpdateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final project",
  grade: 0,
}

console.log(UpdateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = UpdateAssignment(assign1, {grade: 95})


// Required && Readonly

const recordassignment = (assign: Required<Assignment>): Assignment => {
  return assign
}

const assignVerified: Readonly<Assignment> = {
  ...assignGraded, verified: true
}

recordassignment({...assignGraded, verified: true})


//  Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "C"
}


interface Grades {
  assign1: number
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: {assign1: 44, assign2: 92},
  Kelly: {assign1: 74, assign2: 15}
}

// pick and Omit

type AssignResult = Pick<Assignment , "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 93
}

type AssignPreview = Omit<Assignment ,  "grade" | "verified">

const preview: AssignPreview = {
  studentId: "K123",
  title: "final project"
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrade = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllpossibleGrade = "Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllpossibleGrade>

// ReturnType

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("utility Types", 100)
console.log(tsAssign);


//  parameters
 
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);


// Awaited - helps us with the returntype of a promise

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUser = async (): Promise<User[]> => {

  const data = await fetch(
    "https://pnews-uxov.onrender.com/api/users"
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message);    
  })

  return data
}

type FectchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>


fetchUser().then(user => console.log(user))

