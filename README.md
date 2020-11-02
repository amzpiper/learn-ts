# learn-ts
Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@peinimogu 
peinimogu
/
learn-ts
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
learn-ts/dist/test.ts

guoyha update
Latest commit 7e4e573 2 minutes ago
 History
 0 contributors
249 lines (212 sloc)  5.4 KB
  
// 只有在撇号里才起作用
// 1、多行字符串
var context = `aaa
asdf
dsaf`
console.log(`hell ${context}`)

// 2、字符串模板
console.log(`<div>
                <span>${context}</span>
            <div/>`
            )

// 3、自动拆分字符串
function test(template:any, name:string, age:Number){
    console.log(template)
    console.log(name)
    console.log(age)
}
var myName = "wo"
var getAge= function(){
    return 12 
}
test`hello my name is ${myName}, i'm $${getAge}`

// 4、指定参数类型
var myName2:string = "guoyuhang"
// myName2 = 2 - 类型不同报错
var alias = "xixi"
// alias =12  - 类型推断机制
var tex:any = "abc"
tex = 12

var age2:Number = 12
var flag:boolean = true
function te(x:Number):Number{
    return 12
}
class Person{
}
var zhangsan:Person = new Person()

// 5、参数指定默认值，给方法变量指定默认值
//（1）默认值参数要放最后面
function test3(a:string,b:string,c:string="jojo"){
    console.log(`${a}${b}${c}`)
}
test3("xxx","yyy","zzz")
test3("xxx","yyy")

// 6、可选参数
//（1）要处理可选参数，不然会在方法体里报错
//（2）可选参数必须放在必填参数后边
function test4(a: string,b?: string,c: string="jojo"){
    console.log(`${a}${b}${c}`)
}
test4("xxx","yyy","zzz")
test4("xxx","yyy")
test4("xxx")

//函数新特性
// 1、Rest and Spread：
// (1) 用来生命任意数量的方法参数
function argfun(...args:any) {
    args.forEach(
        function (arg:any){
            console.log(arg)
        }
    );
}
argfun(1,3,4,5,6)

// (2) 用来生命参数数量固定的方法,typescript还不支持，但是JS支持,可运行
function argfun2(arg1:string,arg2:string) {
    console.log(arg1)
    console.log(arg2)
}
var argArry = [1]
var argArry2 = [1,2]
argfun2(...argArry)
argfun2(...argArry2)

// 2 、generator函数，控制函数执行过程，ts不支持,es支持
//(1)简单
function* doSomething(){
    console.log();
    
    yield;

    console.log();
}
//方法必须复制给对象
var func1 = doSomething();
func1.next();

//(1)复杂
function* getStockPrice(stock){
    while(true){
        yield Math.random()*100;
    }
}
var priceGenerator = getStockPrice("IBM");
var limit = 15;
var price = 100;
while(price > limit){
    price = priceGenerator.next().value;
    console.log(`the generate return${price}`)
}
console.log(`buying stock at ${price}`)

//3、析构表达式：表达式将对象或数组拆解成任意数量的变量
function getStock(){
    return{
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        }
    }
}
// ES5:分别赋值到本地2个变量上去
var stock = getStock()
var code = stock.code
var price = stock.price
// ES6:把code属性放到codex变量里
var {code:codex,price: {price1}} = getStock()

var array1 = [1,2,3,4]
var [,,n1,n2] = array1
var [n1,n2,...args] = array1
function doSome([nu1, nu2, ...others]){
    console.log(nu1),
    console.log(nu2),
    console.log(others)
}
doSome(array1)

// 箭头表达式:解决this作用域范围预判的错误问题
var sum = (args1:any,args2:Number) => args1+args2
var myArray = [1,2,3,45,6]
console.log(myArray.filter(value => value%2 == 0 ))

// for of 循环
var myArray = [1,2,3,4]
myArray.desc = "forc";//ts里不能给array指定属性，js可以
myArray.forEach(value => console.log(value))//不支持break，忽略掉属性值

for(var n in myArray){ //for in 数组下标和属性名字，任何属性都是键值对
    console.log(n) //key
    console.log(myArray[n]) //value
}

for(var nn of myArray ){ //只循环数组,忽略属性，可以break,循环字符串会循环字符
    if(nn > 2) break
    console.log(nn)
}

// 类定义
class Person2{
    name:any;

    eat(){
        console.log("i'm eating");
    }

    private s(){
        //只能内部访问
    }

    protected a:any;//内部和子类可以访问

    //构造函数：实例化调用1次
    //public name2 是声明了1个属性，用this调用,否则不行
    constructor(public name2:string){
        //内部访问
        //new 时调用1次
        //初始化
    }
}

var p1 = new Person2("a")
p1.name = "superman"
p1.eat()

var p2 = new Person2("b")
p2.name = "superman2"
p2.eat()

//类继承 extends:继承关系，是的关系 super
class Employee extends Person2{
    //子类构造函数必须调用父类构造函数
    constructor(name:string,code:string){
        super(name)
        this.code = code
    }
    
    //指定新的属性和方法
    code: string = "";
    work(){
        //super可以调父类其他方法
        super.eat();
        console.log("do work")
    }

    doWork(){
        console.log("do work")
    }
    
}
var e1 = new Employee("b","")
e1.eat()
e1.work()
e1.doWork()

//泛型
var work:Array<Person2> = []
work[0] = new Person2("")
work[1] = new Employee("","")

//接口建立代码约定,interface生命，implements
interface IPerson{
    name:string;
    age:number;
    eat():any;
}
class Person3 implements IPerson{
    //方法参数类型声明
    constructor(public config:IPerson) {
    }
    name = "";
    age =12;
    eat(){
        console.log()
    }
}


//模块,决定哪些资源让外部使用 b.ts
import {a, pro} from './b';
console.log(pro)
a()


//注解微程序元素加上更直观的说明，与逻辑无关，而是供指定工具或者框架使用的
//告诉框架，如何处理一下属性或或方法


//类型定义文件(*.d.ts)
// 使用已有的javascript工具包
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About