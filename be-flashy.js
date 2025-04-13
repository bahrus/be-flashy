// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP} from './ts-refs/be-flashy/types' */;

/**
 * @implements {Actions}
 * 
 */
class BeFlashy extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
        propDefaults:{
            duration: 1000,
            attr: 'value',
            css: 'be-flashy'
        },
        positractions: [resolved, rejected],
        actions: {
            hydrate: {
                ifAllOf: ['attr', 'css', 'duration'],
            }
        }
    };

    /**
     * @type {MutationObserver | undefined}
     */
    #mutationObserver;

    de = de;

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        const {enhancedElement, attr, css, duration} = self;
        this.#mutationObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                enhancedElement.classList.add(css);
                setTimeout(() => {
                    enhancedElement.classList.remove(css);
                }, duration);
                break;
            }
        });
        switch(attr){
            case 'textContent':
                this.#mutationObserver.observe(enhancedElement, {
                    childList: true,
                });
                break;
            case 'innerHTML':
                this.#mutationObserver.observe(enhancedElement, {
                    childList: true,
                    subtree: true,
                });
                break;
            case 'shadowRoot':
                const {localName} = enhancedElement;
                if(localName.includes('-')){
                    await customElements.whenDefined(localName);
                }
                const {shadowRoot} = enhancedElement;
                if(!shadowRoot){
                    throw new Error('Shadow root not found');
                }
                this.#mutationObserver.observe(shadowRoot, {
                    childList: true,
                    subtree: true,
                });
                break;
            default:
                this.#mutationObserver.observe(enhancedElement, {
                    attributes: true, 
                    attributeFilter: [attr],
                });
        }
        

        return /** @type {BAP} */ ({
            resolved: true
        })
    }

    /**
     * 
     * @param {Element} el 
     */
    async detach(el){
        super.detach(el);
        if(this.#mutationObserver){
            this.#mutationObserver.disconnect();
            this.#mutationObserver = undefined;
        }
    }
}

await BeFlashy.bootUp();
export { BeFlashy};