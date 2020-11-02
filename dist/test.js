"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var context = "aaa\nasdf\ndsaf";
// 只有在撇号里才起作用
// 1、多行字符串
console.log("hell " + context);
// 2、字符串模板
console.log("<div>\n                <span>" + context + "</span>\n            <div/>");
// 3、自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = "wo";
var getAge = function () {
    return 12;
};
test(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hello my name is ", ", i'm $", ""], ["hello my name is ", ", i'm $", ""
    // 4、指定参数类型
])), myName, getAge);
// 4、指定参数类型
var myName2 = "guoyuhang";
// myName2 = 2 - 类型不同报错
var alias = "xixi";
// alias =12  - 类型推断机制
var tex = "abc";
tex = 12;
var age2 = 12;
var flag = true;
function te(x) {
    return 12;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
// 5、参数指定默认值，给方法变量指定默认值
//（1）默认值参数要放最后面
function test3(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log("" + a + b + c);
}
test3("xxx", "yyy", "zzz");
test3("xxx", "yyy");
// 6、可选参数
//（1）要处理可选参数，不然会在方法体里报错
//（2）可选参数必须放在必填参数后边
function test4(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log("" + a + b + c);
}
test4("xxx", "yyy", "zzz");
test4("xxx", "yyy");
test4("xxx");
//函数新特性
// 1、Rest and Spread：
// (1) 用来生命任意数量的方法参数
function argfun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
argfun(1, 3, 4, 5, 6);
// (2) 用来生命参数数量固定的方法,typescript还不支持，但是JS支持,可运行
function argfun2(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}
var argArry = [1];
var argArry2 = [1, 2];
argfun2.apply(void 0, argArry);
argfun2.apply(void 0, argArry2);
// 2 、generator函数，控制函数执行过程，ts不支持,es支持
//(1)简单
function doSomething() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log();
                return [4 /*yield*/];
            case 1:
                _a.sent();
                console.log();
                return [2 /*return*/];
        }
    });
}
//方法必须复制给对象
var func1 = doSomething();
func1.next();
//(1)复杂
function getStockPrice(stock) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, Math.random() * 100];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
var priceGenerator = getStockPrice("IBM");
var limit = 15;
var price = 100;
while (price > limit) {
    price = priceGenerator.next().value;
    console.log("the generate return" + price);
}
console.log("buying stock at " + price);
//3、析构表达式：表达式将对象或数组拆解成任意数量的变量
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        }
    };
}
// ES5:分别赋值到本地2个变量上去
var stock = getStock();
var code = stock.code;
var price = stock.price;
// ES6:把code属性放到codex变量里
var _a = getStock(), codex = _a.code, price1 = _a.price.price1;
var array1 = [1, 2, 3, 4];
var n1 = array1[2], n2 = array1[3];
var n1 = array1[0], n2 = array1[1], args = array1.slice(2);
function doSome(_a) {
    var nu1 = _a[0], nu2 = _a[1], others = _a.slice(2);
    console.log(nu1),
        console.log(nu2),
        console.log(others);
}
doSome(array1);
// 箭头表达式:解决this作用域范围预判的错误问题
var sum = function (args1, args2) { return args1 + args2; };
var myArray = [1, 2, 3, 45, 6];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
// for of 循环
var myArray = [1, 2, 3, 4];
myArray.desc = "forc"; //ts里不能给array指定属性，js可以
myArray.forEach(function (value) { return console.log(value); }); //不支持break，忽略掉属性值
for (var n in myArray) { //for in 数组下标和属性名字，任何属性都是键值对
    console.log(n); //key
    console.log(myArray[n]); //value
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) { //只循环数组,忽略属性，可以break,循环字符串会循环字符
    var nn = myArray_1[_i];
    if (nn > 2)
        break;
    console.log(nn);
}
// 类定义
var Person2 = /** @class */ (function () {
    //构造函数：实例化调用1次
    //public name2 是声明了1个属性，用this调用,否则不行
    function Person2(name2) {
        this.name2 = name2;
        //内部访问
        //new 时调用1次
        //初始化
    }
    Person2.prototype.eat = function () {
        console.log("i'm eating");
    };
    Person2.prototype.s = function () {
        //只能内部访问
    };
    return Person2;
}());
var p1 = new Person2("a");
p1.name = "superman";
p1.eat();
var p2 = new Person2("b");
p2.name = "superman2";
p2.eat();
//类继承 extends:继承关系，是的关系 super
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //子类构造函数必须调用父类构造函数
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        //指定新的属性和方法
        _this.code = "";
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        //super可以调父类其他方法
        _super.prototype.eat.call(this);
        console.log("do work");
    };
    Employee.prototype.doWork = function () {
        console.log("do work");
    };
    return Employee;
}(Person2));
var e1 = new Employee("b", "");
e1.eat();
e1.work();
e1.doWork();
//泛型
var work = [];
work[0] = new Person2("");
work[1] = new Employee("", "");
var Person3 = /** @class */ (function () {
    //方法参数类型声明
    function Person3(config) {
        this.config = config;
        this.name = "";
        this.age = 12;
    }
    Person3.prototype.eat = function () {
        console.log();
    };
    return Person3;
}());
//模块,决定哪些资源让外部使用 b.ts
var b_1 = require("./b");
console.log(b_1.pro);
b_1.a();
var templateObject_1;
//注解微程序元素加上更直观的说明，与逻辑无关，而是供指定工具或者框架使用的
//告诉框架，如何处理一下属性或或方法
