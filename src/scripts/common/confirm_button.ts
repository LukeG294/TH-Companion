import {runtime} from "webextension-polyfill"

export function confirm_button(){
    return(/*html*/`
    <button title="confirm"  class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s">
        <div class="sg-icon sg-icon--icon-white sg-icon--x16">
            <svg class="sg-icon__svg" role="img" aria-labelledby="title-star-e7dj7r" focusable="false"><text id="title-star-e7dj7r" hidden="">star</text><use xlink:href="#icon-star_outlined" aria-hidden="true"></use></svg>
        </div>
        </span>
            <span class="sg-button__text">confirm</span>
    </button>
    `)
}
