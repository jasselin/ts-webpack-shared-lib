import * as $ from "jquery";

export function doSomething() {
    console.log("lib.doSomething");
}

export function doSomethingWithjQuery() {
    console.log("lib.doSomethingWithjQuery -> " + $.fn.jquery)
}