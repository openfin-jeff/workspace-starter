import type { ModuleImplementation, ModuleTypes } from "../../../module-shapes";
import * as initOptionsImplementation from "./action-handlers";

export const entryPoints: { [type in ModuleTypes]?: ModuleImplementation } = {
	initOptions: initOptionsImplementation
};
