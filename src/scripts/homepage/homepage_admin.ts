export function add_admin(){
    document.querySelector(".brn-moderation-panel__list > ul > li:nth-child(1)").insertAdjacentHTML("afterend", /*html*/`
    <li class="sg-menu-list__element">   
        <a class = "sg-menu-list__link macc-d">Mass-Accont Deletion</a>
    </li>
    <li class="sg-menu-list__element">   
        <a class = "sg-menu-list__link mmsg-s">Mass-Message Users</a>
    </li>
    `)
}