// (🚨): ( Error )
/**
 * Khai báo kiểu dữ liệu trong typescript:
 *
 * JS: null, undefined, string, number, boolean, bigint, symbol, array, object
 */
var age = 20;
// age = "hai muoi tuổi"; (🚨)
var userName = "Nguyen Van A";
// userName = 10; (🚨)
var isShow = true;
isShow = false;
// isShow = 10; (🚨)
// Cách 1:
var listNumber = [1, 2, 3, 4];
// Cách 2: generic
var _listNumber = [1, 2, 3, 4];
// listNumber = [1, 2, 3, "dsfs"]; (🚨)
// listNumber = [1, 2, 3, false]; (🚨)
// Chỉ cho phép mảng chứa các phần tử có kiểu dữ liệu là number
// Ít dùng để khai báo như thế này.
var abc = null;
// abc = 12; (🚨)
var def = undefined;
// def = 10; (🚨)
// ----------------------------------------------------
/**
 * Typescript tự ngầm định hiểu kiểu dữ liệu nếu như các bạn không khai báo kiểu dữ liệu rõ ràng cho nó.
 */
var _userName = "Nguyen Van B";
_userName = "Nguyen Van B";
var _age = 20;
// Mong muốn id: đều nhận được 2 kiểu dữ liệu là string hoặc number
var id = 121312312;
id = "dfasdfasdfasdf";
id = false;
var product3 = {
    id: "12121",
    price: 1212,
    name: "product3",
};
var product5 = {
    id: "12121",
    price: 1212,
    name: "product5",
    description: "product5",
};
var product6 = {
    id: "12121",
    price: 1212,
    name: "product6",
    description: true, // (🚨)
};
product3.id = 12; // mong muốn không báo lỗi nữa
// (🚨)
var product1 = {
    id: "12121",
    price: 1212,
};
var product2 = {
    id: "12121",
    price: 1212,
    name: 1212, // (🚨)
};
// Ngầm định hiểu kiểu dữ liệu.
var product4 = {
    id: 12121,
    price: "hai muoi mot nghin dong",
    name: "I Phone 14",
};
var dog = {
    id: 1,
    name: "Husky",
    age: 12,
    numberOfLeg: 4,
};
var nol = 4;
var nol1 = 6; // (🚨)
var _status = "active"; // 'inactive'
_status = "fadsfasdfas"; // báo lỗi
// ------------------------------------------------
/**
 * Type Function
 */
/**
 * @param a number
 * @param b number
 * @returns number
 */
function calcTotal(a, b) {
    return a + b;
}
var _calcTotal = function (a, b) {
    return a + b;
};
calcTotal(1212, 121);
calcTotal("1212", 121); // (🚨)
/**
 * @param a number
 * @param b không bắt buộc nhưng nếu truyền phải là number, default 10
 * @returns number
 */
// typescript: nếu có giá trị default thì typescript sẽ tự ngầm hiểu đây là giá trị không bắt buộc
function calcTotal2(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
calcTotal2(3242342);
calcTotal2(3242342, 34234);
calcTotal2(3242342, "34234"); // (🚨)
function calcTotal3(a, b) {
    return a + b;
}
function calcTotal4(a, b) {
    return "".concat(a + b);
}
// ----------------------------- Error ------------------------
/**
 * @param a không bắt buộc nhưng nếu truyền phải là number, default 10
 * @param b number
 * @returns number
 *
 * Chú ý: này không hợp lệ.
 * Optional luôn luôn để tham số cuối cùng.
 */
function calcTotal5(a, b) {
    if (a === void 0) { a = 10; }
    return a + b;
}
var square = {
    name: "sấ",
    area: 12,
    bgc: "fadfa",
    sizeX: 10,
    sizeY: 10,
    side: 100,
    width: "1212", // đang dư
};
// đang thiếu
var _square = {
    name: "sấ",
    area: 12,
    bgc: "fadfa",
    sizeX: 10,
    sizeY: 10,
};
var _abc = {
    a: "fasdfa",
    b: 10,
};
// -------------------------------------
/**
 * mong muốn truyền vào bất kỳ kiểu dữ liệu nào
 */
/**
 * kiểu dữ liệu đặc biệt "any", nhận bất kỳ kiểu dữ liệu nào
 */
function log(params) {
    console.log(params);
}
log("fasdfas");
log(121);
log({});
log([]);
var _a = 10;
_a = "32423";
_a = true;
// --------------------------------------
/**
 * generic: Truyền type cho function
 * type là không cố định.
 */
function _log(params) {
    console.log(params);
}
_log("fasdfasfd");
_log(1212); // (🚨)
_log(1212);
_log(true);
_log(1212);
