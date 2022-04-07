export function add_del_menu(){
    return /*html*/`
        <div class="modal_back">
            <div class="modal-accdel">
            <div class = "modal_close"><div class="sg-toplayer__close" role="button" tabindex="0"><div class="sg-icon sg-icon--icon-gray-50 sg-icon--x24"><svg class="sg-icon__svg" role="img" aria-labelledby="title-close-zvtc08" focusable="false"><title id="title-close-zvtc08">close</title><use xlink:href="#icon-close" aria-hidden="true"></use></svg></div></div></div>
                <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Delete User</h1>
                <div class="content">
                    <textarea placeholder="Add Reason Here" class="sg-textarea sg-textarea--tall"></textarea>
                </div>
            </div>
        </div>
    `
}