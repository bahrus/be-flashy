// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-flashy/types' */;

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'be-flashy',
    branches: ['', 'duration', 'attr', 'css'],
    enhPropKey: 'beFlashy',
    map: {
        '1.0': {
            mapsTo: 'duration',
            instanceOf: 'Number',
        },
        '2.0': {
            mapsTo: 'attr',
            instanceOf: 'String',
        },
        '3.0': {
            mapsTo: 'css',
            instanceOf: 'String',
        }
    },

    importEnh: async () => {
        const { BeFlashy } = await import('./be-flashy.js');
        return BeFlashy;;
    }
}

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);