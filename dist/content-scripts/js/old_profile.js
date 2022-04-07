/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/old_profile/del_menu_exp.ts":
/*!*************************************************!*\
  !*** ./src/scripts/old_profile/del_menu_exp.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.add_del_menu = void 0;
function add_del_menu() {
    return /*html*/ `
        <div class="modal_back">
            <div class="modal-accdel">
                <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Delete User</h1>
                <div class="content">
                    <textarea placeholder="Add Reason Here" class="sg-textarea sg-textarea--tall"></textarea>
                </div>
            </div>
        </div>
    `;
}
exports.add_del_menu = add_del_menu;


/***/ }),

/***/ "./src/scripts/old_profile/index.ts":
/*!******************************************!*\
  !*** ./src/scripts/old_profile/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const del_menu_exp_1 = __webpack_require__(/*! ./del_menu_exp */ "./src/scripts/old_profile/del_menu_exp.ts");
function insert_data() {
    document.querySelector(".personal_info").insertAdjacentHTML("beforeend", /*html*/ `
        <button class="sg-button sg-button--m sg-button--outline sg-button--icon-only user-del-btn"><span class="sg-button__icon sg-button__icon--m">
            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg">
                <use xlink:href="#icon-heart_outlined"></use></svg>
            </div>
        </button>
    `);
    document.querySelector(".user-del-btn").addEventListener("click", function () {
        document.querySelector("body").insertAdjacentHTML("afterbegin", (0, del_menu_exp_1.add_del_menu)());
    });
}
insert_data();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/scripts/old_profile/del_menu_exp.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/old_profile/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zY3JpcHRzL2pzL29sZF9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FFdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9vbGRfcHJvZmlsZS9kZWxfbWVudV9leHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvb2xkX3Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkX2RlbF9tZW51ID0gdm9pZCAwO1xuZnVuY3Rpb24gYWRkX2RlbF9tZW51KCkge1xuICAgIHJldHVybiAvKmh0bWwqLyBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9iYWNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWNjZGVsXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2ctdGV4dC1iaXQtLWdyYXktc2Vjb25kYXJ5IHNnLWhlYWRsaW5lIHNnLWhlYWRsaW5lLS14bGFyZ2Ugc2ctaGVhZGxpbmUtLWV4dHJhLWJvbGRcIiBzdHlsZSA9IFwiY29sb3I6IzMyM2M0NTsgbWFyZ2luLWJvdHRvbTo4cHg7XCI+RGVsZXRlIFVzZXI8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkFkZCBSZWFzb24gSGVyZVwiIGNsYXNzPVwic2ctdGV4dGFyZWEgc2ctdGV4dGFyZWEtLXRhbGxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG59XG5leHBvcnRzLmFkZF9kZWxfbWVudSA9IGFkZF9kZWxfbWVudTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGVsX21lbnVfZXhwXzEgPSByZXF1aXJlKFwiLi9kZWxfbWVudV9leHBcIik7XG5mdW5jdGlvbiBpbnNlcnRfZGF0YSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlcnNvbmFsX2luZm9cIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIC8qaHRtbCovIGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNnLWJ1dHRvbiBzZy1idXR0b24tLW0gc2ctYnV0dG9uLS1vdXRsaW5lIHNnLWJ1dHRvbi0taWNvbi1vbmx5IHVzZXItZGVsLWJ0blwiPjxzcGFuIGNsYXNzPVwic2ctYnV0dG9uX19pY29uIHNnLWJ1dHRvbl9faWNvbi0tbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNnLWljb24gc2ctaWNvbi0tYWRhcHRpdmUgc2ctaWNvbi0teDI0XCI+PHN2ZyBjbGFzcz1cInNnLWljb25fX3N2Z1wiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWhlYXJ0X291dGxpbmVkXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLWRlbC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCAoMCwgZGVsX21lbnVfZXhwXzEuYWRkX2RlbF9tZW51KSgpKTtcbiAgICB9KTtcbn1cbmluc2VydF9kYXRhKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvb2xkX3Byb2ZpbGUvZGVsX21lbnVfZXhwLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9vbGRfcHJvZmlsZS9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==