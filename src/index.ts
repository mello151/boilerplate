///<reference path="../typings/index.d.ts" />

// Node module:
import * as _ from "lodash";
// Internal module:
import { example } from "./stub";

// Using webpack loaders for non-TypeScript require()s:
console.log(require<string>("../_index.html"));

_.camelCase(example);