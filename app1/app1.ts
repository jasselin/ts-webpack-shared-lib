import { doSomething } from "../lib/utils"
import * as ko from "knockout";

doSomething();

var o = ko.observable(123);
console.log(o());