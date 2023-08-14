// (🚨): ( Error )
/**
 * Khai báo kiểu dữ liệu trong typescript:
 *
 * JS: null, undefined, string, number, boolean, bigint, symbol, array, object
 */

let age: number = 20;
// age = "hai muoi tuổi"; (🚨)

let userName: string = "Nguyen Van A";
// userName = 10; (🚨)

let isShow: boolean = true;
isShow = false;

// isShow = 10; (🚨)

// Cách 1:
let listNumber: number[] = [1, 2, 3, 4];

// Cách 2: generic
let _listNumber: Array<number> = [1, 2, 3, 4];

// listNumber = [1, 2, 3, "dsfs"]; (🚨)
// listNumber = [1, 2, 3, false]; (🚨)
// Chỉ cho phép mảng chứa các phần tử có kiểu dữ liệu là number

// Ít dùng để khai báo như thế này.
let abc: null = null;
// abc = 12; (🚨)
let def: undefined = undefined;
// def = 10; (🚨)

// ----------------------------------------------------
/**
 * Typescript tự ngầm định hiểu kiểu dữ liệu nếu như các bạn không khai báo kiểu dữ liệu rõ ràng cho nó.
 */

let _userName = "Nguyen Van B";
_userName = "Nguyen Van B";

let _age = 20;
// _age = "sfasdf"; (🚨)

// ----------------------------------------------------
/**
 * Kiểu dữ liệu của typescript -> lowercase
 *
 * Uppercase: ép kiểu.
 */

// String(32); // đang làm chuyện gì đây ??? ép kiểu dữ liệu
// let value = Number(event.target.value) ???
// Boolean(12);

// ----------------------------------------------------

/**
 * Union: kết hợp => number | string
 * - dùng dấu "|" để kết hợp nhiều kiểu dữ liệu lại với nhau.
 */

/**
 * sử dụng từ khóa "type": để khai báo kiểu dữ liệu riêng của mình.
 * Viết hoa chữ cái đầu tiên.
 */
type StringOrNumber = string | number;

type ID = number | string | boolean | null;

// Mong muốn id: đều nhận được 2 kiểu dữ liệu là string hoặc number
let id: ID = 121312312;
id = "dfasdfasdfasdf";
id = false;

// let productId: number | string = 1212121;
// productId = "fasfasd";

// ----------------------------------------------------

/**
 * product:
 * - id: string,
 * - price: number,
 * - name: string,
 * - description: không bắt buộc có. Nếu có thì phải là string.
 */

type TProduct = {
  id: StringOrNumber; // string | number
  price: number;
  name: string;
  description?: string; // ( Optional )
};

const product3: TProduct = {
  id: "12121",
  price: 1212,
  name: "product3",
};

const product5: TProduct = {
  id: "12121",
  price: 1212,
  name: "product5",
  description: "product5",
};

const product6: TProduct = {
  id: "12121",
  price: 1212,
  name: "product6",
  description: true, // (🚨)
};

product3.id = 12; // mong muốn không báo lỗi nữa

// (🚨)
const product1: TProduct = {
  id: "12121",
  price: 1212,
};

const product2: TProduct = {
  id: "12121",
  price: 1212,
  name: 1212, // (🚨)
};

// Ngầm định hiểu kiểu dữ liệu.
const product4 = {
  id: 12121,
  price: "hai muoi mot nghin dong",
  name: "I Phone 14",
};
// ------------------------------------------------

/**
 * Dog:
 * - name: Chihuahua, Poodle, Pug, Alaska, Husky ( literal type )
 * - age: number,
 * - numberOfLeg: khai báo số chân: 2 chân hoặc 4 chân, ( literal type )
 * - description: không bắt buộc, nhưng nếu có thì phải là string,
 * - id: string hoặc number
 */

/**
 * literal type: liệt kê ra những giá trị mà mình cho phép
 */

type TDog = {
  name: "Chihuahua" | "Poodle" | "Pug" | "Alaska" | "Husky";
  age: number;
  numberOfLeg: 2 | 4;
  description?: string;
  id: StringOrNumber;
};

const dog: TDog = {
  id: 1,
  name: "Husky",
  age: 12,
  numberOfLeg: 4,
};

type TNumberOfLeg = 2 | 4;
const nol: TNumberOfLeg = 4;

const nol1: TNumberOfLeg = 6; // (🚨)

type TStatus = "active" | "inactive";
let _status: TStatus = "active"; // 'inactive'
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
function calcTotal(a: number, b: number): number {
  return a + b;
}

const _calcTotal = (a: number, b: number): number => {
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
function calcTotal2(a: number, b: number = 10): number {
  return a + b;
}

calcTotal2(3242342);
calcTotal2(3242342, 34234);

calcTotal2(3242342, "34234"); // (🚨)

function calcTotal3(a: number, b: number) {
  return a + b;
}

function calcTotal4(a: number, b: number): string {
  return `${a + b}`;
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
function calcTotal5(a: number = 10, b: number): number {
  return a + b;
}

// làm sao bỏ qua việc không truyền tham số cho a.
// calcTotal5(, 10);
// ------------------------------------------------------------

/**
 * interface <====> type
 *
 * interface: kết hợp với class
 */

/**
 * animal:
 * - name: string,
 * - age: number,
 * - id: string | number;
 */
interface IAnimal {
  name: string;
  age: number;
  id: number | string;
}
// ------------------------------------------------------------
/**
 * Kết hợp nhiều type lại với nhau. "&" ( combine ) , kết thừa.
 * Dành cho Object
 */

type TShape = {
  name: string;
  bgc: string;
  area: number;
  sizeX: number;
  sizeY: number;
};

type TSquare = TShape & {
  side: number;
};

type TRectangle = TShape & {
  length: number;
  width: number;
};

const square: TSquare = {
  name: "sấ",
  area: 12,
  bgc: "fadfa",
  sizeX: 10,
  sizeY: 10,
  side: 100,

  width: "1212", // đang dư
};

// đang thiếu
const _square: TSquare = {
  name: "sấ",
  area: 12,
  bgc: "fadfa",
  sizeX: 10,
  sizeY: 10,
};

// ---------------- Interface ---------------
/**
 * interface dùng "extends" merge 2 interface lại với nhau
 */
interface IShape {
  name: string;
  bgc: string;
  area: number;
  sizeX: number;
  sizeY: number;
}

interface ISquare extends IShape {
  side: number;
}

interface IRectangle extends IShape {
  length: number;
  width: number;
}

// -------------------------------------
/**
 * Khác biệt giữa type và interface.
 */

//[[ type ]] Không thể khai báo trùng tên .
type TAbc = string;
type TAbc = number;

// [[ interface ]] cho phép khai báo trùng tên
// Và merge 2 interface lại với nhau.
interface IAbc {
  a: string;
}

interface IAbc {
  b: number;
}

const _abc: IAbc = {
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
function log(params: any) {
  console.log(params);
}

log("fasdfas");
log(121);
log({});
log([]);

let _a: any = 10;
_a = "32423";
_a = true;

// --------------------------------------
/**
 * generic: Truyền type cho function
 * type là không cố định.
 */

function _log<T>(params: T) {
  console.log(params);
}

_log<string>("fasdfasfd");

_log<string>(1212); // (🚨)

_log<number>(1212);

_log(true);

_log(1212);
