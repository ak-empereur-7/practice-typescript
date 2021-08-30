/* eslint-disable @typescript-eslint/no-unused-vars */

/**TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string
let str: string = "A";

// Array
let arr: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
// 型を好きな順番に入れられる
let tuple: [number, string] = [0, "A"];

//any どの型でもOK
let any1: any = false;

// void 普通は書かない、勝手に推測してくれるから
const funcA = (): void => {
  const test = "何かしらの処理";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaaa" };
