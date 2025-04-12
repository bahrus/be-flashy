// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-flashy/types' */;

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'be-flashy',
    enhPropKey: 'beFlashy',
    map: {
        '0.0': 'delay',
        '1.0': 'attr',
        '2.0': 'css',
    },

    importEnh: async () => {
        const { BeFlashy } = await import('./be-flashy.js');
        return BeFlashy;;
    }
}

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);