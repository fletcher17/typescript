var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(name, type) {
        var _this = this;
        this.introduce = function () {
            console.log("Hi, my name is " + _this.name + ", i'm a software engineer from " + _this.type);
        };
        this.name = name;
        this.type = type;
    }
    return Player;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, type) {
        var _this = _super.call(this, name, type) || this;
        _this.talk = function () {
            console.log("I am done with my task at " + _this.type);
        };
        return _this;
    }
    return Student;
}(Player));
var guy = new Student('femi', 'decagon');
var result = guy.talk;
console.log(result);
