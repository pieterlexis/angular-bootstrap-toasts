(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.css":
/*!********************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n}\r\n._toast {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    border: solid 1px #dadada;\r\n    background: #fff;\r\n    box-shadow: 0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12);\r\n}\r\n._toast-header {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: solid 1px #dfe0e1;\r\n    background: #f5f5f5;\r\n    color: #6c757d;\r\n}\r\n._duration-line {\r\n    height: 3px;\r\n    background: rgba(0, 0, 0, .25);\r\n}\r\n._toast-body {\r\n    font-size: 12px;\r\n    padding: 12px;\r\n    background: #fff;\r\n}\r\n._toast-header i {\r\n    margin-right: 7px;\r\n}\r\n._toast-header strong {\r\n    font-size: 16px;\r\n}\r\n._toast-header small {\r\n    font-size: 11px;\r\n    color: #6c757d;\r\n}\r\n._toast-toolbar {\r\n    margin-top: 20px;\r\n}\r\nbutton._close {\r\n    padding: 0;\r\n    margin-left: .5rem;\r\n    margin-bottom: .25rem;\r\n    float: right;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    opacity: .6;\r\n}\r\nbutton._close:hover {\r\n    cursor: pointer;\r\n    opacity: .8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLXRvYXN0cy9zcmMvbGliL0NvbXBvbmVudHMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsMEdBQTBHO0FBQzlHO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUlBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InByb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLXRvYXN0cy9zcmMvbGliL0NvbXBvbmVudHMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uX3RvYXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkYWRhZGE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggOXB4IC00cHggcmdiYSgwLDAsMCwuMiksIDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLl90b2FzdC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGZlMGUxO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uX2R1cmF0aW9uLWxpbmUge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbn1cclxuXHJcbi5fdG9hc3QtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4uX3RvYXN0LWhlYWRlciBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uX3RvYXN0LWhlYWRlciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uX3RvYXN0LWhlYWRlciBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLl90b2FzdC10b29sYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5idXR0b24uX2Nsb3NlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbn1cclxuXHJcbmJ1dHRvbi5fY2xvc2U6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.html":
/*!*********************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n    class=\"_toast {{ Toast.ToastClass || '' }}\"\r\n    (mouseover)=\"animationPause()\"\r\n    (mouseout)=\"animationPlay()\">\r\n    <div class=\"_toast-header {{ Toast.TitleClass || '' }}\">\r\n        <i\r\n            *ngIf=\"Toast.IconClass\"\r\n            class=\"{{ Toast.IconClass }}\"></i>\r\n\r\n        <strong\r\n            class=\"mr-auto\">{{ Toast.Title }}</strong>\r\n\r\n        <small *ngIf=\"Toast.Moment\">{{ Toast.Moment }}</small>\r\n\r\n        <button\r\n            type=\"button\"\r\n            class=\"_close\"\r\n            (click)=\"remove()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div\r\n        *ngIf=\"Toast.IsProgressLineEnabled\"\r\n        class=\"_duration-line {{ Toast.ProgressLineClass || '' }}\"\r\n        [style.width]=\"durationLine.percents\"></div>\r\n\r\n    <div\r\n        class=\"_toast-body {{ Toast.BodyClass || '' }}\">\r\n\r\n        <div [innerHTML]=\"Toast.Text\"></div>\r\n\r\n        <div\r\n            *ngIf=\"Toast.Type === 'confirm' && Toast.ToolbarItems\"\r\n            class=\"_toast-toolbar\">\r\n            <button\r\n                *ngIf=\"Toast.ToolbarItems.actionButton.visible\"\r\n                style=\"margin-right: 8px;\"\r\n                class=\"{{ Toast.ToolbarItems.actionButton.class || 'btn btn-success btn-sm' }}\"\r\n                (click)=\"remove(true)\">{{ Toast.ToolbarItems.actionButton.text || 'Confirm' }}</button>\r\n\r\n            <button\r\n                *ngIf=\"Toast.ToolbarItems.cancelButton.visible\"\r\n                class=\"{{ Toast.ToolbarItems.cancelButton.class || 'btn btn-light btn-sm' }}\"\r\n                (click)=\"remove(false)\">{{ Toast.ToolbarItems.cancelButton.text || 'Cancel' }}</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ToastMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessageComponent", function() { return ToastMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_toast_message_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/toast-message.models */ "./projects/angular-bootstrap-toasts/src/lib/Models/toast-message.models.ts");
/* harmony import */ var _angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-bootstrap-toasts.service */ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./projects/angular-bootstrap-toasts/node_modules/animejs/lib/anime.es.js");





var ToastMessageComponent = /** @class */ (function () {
    function ToastMessageComponent(toastsService) {
        this.toastsService = toastsService;
        this.durationLine = {
            percents: '100%'
        };
    }
    ToastMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.durationAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: this.durationLine,
            percents: '0%',
            duration: this.Toast.Duration,
            easing: 'linear',
            complete: function () {
                _this.remove();
            }
        });
    };
    ToastMessageComponent.prototype.animationPause = function () {
        if (this.durationAnimation && this.Toast.IsDurationPausedByMouse) {
            this.durationAnimation.pause();
        }
    };
    ToastMessageComponent.prototype.animationPlay = function () {
        if (this.durationAnimation && this.durationAnimation.paused) {
            this.durationAnimation.play();
        }
    };
    ToastMessageComponent.prototype.remove = function (confirmationResult) {
        this.Toast.Close(confirmationResult || false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Models_toast_message_models__WEBPACK_IMPORTED_MODULE_2__["ToastMessage"])
    ], ToastMessageComponent.prototype, "Toast", void 0);
    ToastMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Toast-Message',
            template: __webpack_require__(/*! ./toast-message.component.html */ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.html"),
            styles: [__webpack_require__(/*! ./toast-message.component.css */ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_3__["AngularBootstrapToastsService"]])
    ], ToastMessageComponent);
    return ToastMessageComponent;
}());



/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.css":
/*!**************************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Advanced-Bootstrap-Container {\r\n    position: fixed;\r\n    z-index: 9999 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLXRvYXN0cy9zcmMvbGliL0NvbXBvbmVudHMvdG9hc3RzLWNvbnRhaW5lci90b2FzdHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCIiwiZmlsZSI6InByb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLXRvYXN0cy9zcmMvbGliL0NvbXBvbmVudHMvdG9hc3RzLWNvbnRhaW5lci90b2FzdHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQWR2YW5jZWQtQm9vdHN0cmFwLUNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.html":
/*!***************************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n    class=\"Advanced-Bootstrap-Container\"\r\n    [style.width]=\"Width\"\r\n    [style.left]=\"(Placement.position === 'topLeft'      || Placement.position === 'bottomLeft')  ? Placement.marginLeft : ''\"\r\n    [style.right]=\"(Placement.position === 'topRight'    || Placement.position === 'bottomRight') ? Placement.marginRight : ''\"\r\n    [style.top]=\"(Placement.position === 'topLeft'       || Placement.position === 'topRight')    ? Placement.marginTop : ''\"\r\n    [style.bottom]=\"(Placement.position === 'bottomLeft' || Placement.position === 'bottomRight') ? Placement.marginBottom : ''\">\r\n    \r\n    <Toast-Message\r\n        *ngFor=\"let toast of toastsList\"\r\n        class=\"Toast-Message-Container\"\r\n        [@enterAnimation]\r\n        [Toast]=\"toast\"></Toast-Message>\r\n\r\n</div>"

/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ToastsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function() { return ToastsContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-bootstrap-toasts.service */ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ToastsContainerComponent = /** @class */ (function () {
    function ToastsContainerComponent(toastsService) {
        this.toastsService = toastsService;
        this.Placement = {
            position: 'topRight'
        };
        /** Width as CSS value */
        this.Width = '250px';
        this.defaultMargin = '15px';
        this.toastsList = [];
    }
    ToastsContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesListSubscription = this.toastsService.ToastsList$.subscribe(function (toasts) {
            _this.toastsList = toasts;
        });
        this.initPosition();
    };
    ToastsContainerComponent.prototype.ngOnDestroy = function () {
        if (this.messagesListSubscription) {
            this.messagesListSubscription.unsubscribe();
        }
    };
    ToastsContainerComponent.prototype.initPosition = function () {
        if (!this.Placement) {
            this.Placement = {};
        }
        this.Placement.marginTop = this.Placement.marginTop || this.defaultMargin;
        this.Placement.marginBottom = this.Placement.marginBottom || this.defaultMargin;
        this.Placement.marginLeft = this.Placement.marginLeft || this.defaultMargin;
        this.Placement.marginRight = this.Placement.marginRight || this.defaultMargin;
        this.Placement.position = this.Placement.position || 'topRight';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToastsContainerComponent.prototype, "Placement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToastsContainerComponent.prototype, "Width", void 0);
    ToastsContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Angular-Bootstrap-Toasts-Container',
            template: __webpack_require__(/*! ./toasts-container.component.html */ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('350ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(0.1)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./toasts-container.component.css */ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_2__["AngularBootstrapToastsService"]])
    ], ToastsContainerComponent);
    return ToastsContainerComponent;
}());



/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/Models/toast-message.models.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/Models/toast-message.models.ts ***!
  \**********************************************************************************/
/*! exports provided: ToastMessage, ToastMessageParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessage", function() { return ToastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessageParams", function() { return ToastMessageParams; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var ToastMessage = /** @class */ (function () {
    function ToastMessage(params, systemParams) {
        this.confirmationResult = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.id = systemParams.id;
        this.type = systemParams.type;
        this.text = params.text;
        this.title = params.title;
        this.moment = params.moment;
        this.duration = params.duration;
        this.isProgressLineEnabled = params.showProgressLine;
        this.isDurationPausedByMouse = params.pauseDurationOnMouseEnter;
        this.iconClass = params.iconClass;
        this.progressLineClass = params.progressLineClass;
        this.titleClass = params.titleClass;
        this.bodyClass = params.bodyClass;
        this.toastClass = params.toastClass;
        this.toolbarItems = params.toolbarItems;
    }
    Object.defineProperty(ToastMessage.prototype, "ConfirmationResult$", {
        get: function () {
            return this.confirmationResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Type", {
        get: function () {
            return this.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Title", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Text", {
        get: function () {
            return this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Moment", {
        get: function () {
            return this.moment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "Duration", {
        get: function () {
            return this.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "ToolbarItems", {
        get: function () {
            return this.toolbarItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "IsProgressLineEnabled", {
        get: function () {
            return this.isProgressLineEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "IsDurationPausedByMouse", {
        get: function () {
            return this.isDurationPausedByMouse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "IconClass", {
        get: function () {
            return this.iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "ProgressLineClass", {
        get: function () {
            return this.progressLineClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "TitleClass", {
        get: function () {
            return this.titleClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "BodyClass", {
        get: function () {
            return this.bodyClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastMessage.prototype, "ToastClass", {
        get: function () {
            return this.toastClass;
        },
        enumerable: true,
        configurable: true
    });
    ToastMessage.prototype.Close = function (confirmationStatus) {
        this.confirmationResult.next(confirmationStatus || false);
    };
    return ToastMessage;
}());

var ToastMessageParams = /** @class */ (function () {
    function ToastMessageParams() {
    }
    return ToastMessageParams;
}());



/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.module.ts":
/*!**************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AngularBootstrapToastsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBootstrapToastsModule", function() { return AngularBootstrapToastsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/toasts-container/toasts-container.component */ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.ts");
/* harmony import */ var _Components_toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/toast-message/toast-message.component */ "./projects/angular-bootstrap-toasts/src/lib/Components/toast-message/toast-message.component.ts");
/* harmony import */ var _angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-bootstrap-toasts.service */ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts");







var AngularBootstrapToastsModule = /** @class */ (function () {
    function AngularBootstrapToastsModule() {
    }
    AngularBootstrapToastsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_4__["ToastsContainerComponent"],
                _Components_toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_5__["ToastMessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            exports: [
                _Components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_4__["ToastsContainerComponent"]
            ],
            providers: [
                _angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_6__["AngularBootstrapToastsService"]
            ]
        })
    ], AngularBootstrapToastsModule);
    return AngularBootstrapToastsModule;
}());



/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts":
/*!***************************************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts ***!
  \***************************************************************************************/
/*! exports provided: AngularBootstrapToastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBootstrapToastsService", function() { return AngularBootstrapToastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Models_toast_message_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/toast-message.models */ "./projects/angular-bootstrap-toasts/src/lib/Models/toast-message.models.ts");




var AngularBootstrapToastsService = /** @class */ (function () {
    function AngularBootstrapToastsService() {
        this.toastsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.defaultTitle = 'Title';
        this.defaultText = 'Message';
        this.defaultDuration = 5000;
        this.minDuration = 300;
        this.maxMessageId = 1;
    }
    Object.defineProperty(AngularBootstrapToastsService.prototype, "ToastsList$", {
        get: function () {
            return this.toastsList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularBootstrapToastsService.prototype, "DefaultTitle", {
        get: function () {
            return this.defaultTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularBootstrapToastsService.prototype, "DefaultText", {
        get: function () {
            return this.defaultText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularBootstrapToastsService.prototype, "DefaultDuration", {
        get: function () {
            return this.defaultDuration;
        },
        enumerable: true,
        configurable: true
    });
    /** Show success toast message */
    AngularBootstrapToastsService.prototype.showSimpleToast = function (params) {
        var systemParams = {
            id: this.maxMessageId,
            type: 'simple'
        };
        return this.createToast(params, systemParams);
    };
    /** Show toast message with confirmation and decline button variants */
    AngularBootstrapToastsService.prototype.showConfirmToast = function (params) {
        var systemParams = {
            id: this.maxMessageId,
            type: 'confirm'
        };
        return this.createToast(params, systemParams);
    };
    /** Change Default **Title** for all toasts wich not get `title` property from params when creating */
    AngularBootstrapToastsService.prototype.changeDefaultTitle = function (newTitle) {
        var validTitle = this.validateTitle(newTitle);
        if (validTitle) {
            this.defaultTitle = validTitle;
        }
    };
    /** Change Default **Text** for all toasts wich not get `text` property from params when creating */
    AngularBootstrapToastsService.prototype.changeDefaultText = function (newText) {
        var validText = this.validateText(newText);
        if (validText) {
            this.defaultText = validText;
        }
    };
    /** Change Default **Duration** for all toasts */
    AngularBootstrapToastsService.prototype.changeDefaultDuration = function (duration) {
        var validDuration = this.validateDuration(duration);
        if (validDuration) {
            this.defaultDuration = duration;
        }
    };
    AngularBootstrapToastsService.prototype.createToast = function (params, systemParams) {
        var _this = this;
        var messages = this.toastsList.getValue();
        var validParams = this.validateParams(params);
        var toast = new _Models_toast_message_models__WEBPACK_IMPORTED_MODULE_3__["ToastMessage"](validParams, systemParams);
        messages.push(toast);
        this.maxMessageId++;
        this.toastsList.next(messages);
        var toastSubscription = toast.ConfirmationResult$.subscribe(function () {
            var e_1, _a;
            var actualMessages = _this.toastsList.getValue();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](actualMessages.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), index = _d[0], message = _d[1];
                    if (message.Id === toast.Id) {
                        actualMessages.splice(index, 1);
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.toastsList.next(actualMessages);
            toastSubscription.unsubscribe();
        });
        return toast;
    };
    AngularBootstrapToastsService.prototype.validateParams = function (params) {
        var newParams = params;
        try {
            newParams.title = this.validateTitle(newParams.title);
        }
        catch (err) {
            newParams.title = this.DefaultTitle;
        }
        try {
            newParams.text = this.validateText(newParams.text);
        }
        catch (err) {
            newParams.text = this.DefaultText;
        }
        try {
            newParams.duration = this.validateDuration(newParams.duration);
        }
        catch (err) {
            newParams.duration = this.DefaultDuration;
        }
        return newParams;
    };
    AngularBootstrapToastsService.prototype.validateTitle = function (title) {
        if (!title || typeof title !== 'string') {
            throw new Error('Tost default title must be a string with length');
        }
        return title;
    };
    AngularBootstrapToastsService.prototype.validateText = function (text) {
        if (!text || typeof text !== 'string') {
            throw new Error('Tost default text must be a string with length');
        }
        return text;
    };
    AngularBootstrapToastsService.prototype.validateDuration = function (duration) {
        var durationAsNumber = +duration;
        if (isNaN(durationAsNumber)) {
            throw new Error('Tost duration must be a number');
        }
        else if (durationAsNumber < this.minDuration) {
            throw new Error("Tost duration must be more than " + this.minDuration + " milliseconds");
        }
        return durationAsNumber;
    };
    AngularBootstrapToastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularBootstrapToastsService);
    return AngularBootstrapToastsService;
}());



/***/ }),

/***/ "./projects/angular-bootstrap-toasts/src/public-api.ts":
/*!*************************************************************!*\
  !*** ./projects/angular-bootstrap-toasts/src/public-api.ts ***!
  \*************************************************************/
/*! exports provided: AngularBootstrapToastsService, ToastsContainerComponent, AngularBootstrapToastsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/angular-bootstrap-toasts.service */ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBootstrapToastsService", function() { return _lib_angular_bootstrap_toasts_service__WEBPACK_IMPORTED_MODULE_0__["AngularBootstrapToastsService"]; });

/* harmony import */ var _lib_Components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/Components/toasts-container/toasts-container.component */ "./projects/angular-bootstrap-toasts/src/lib/Components/toasts-container/toasts-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function() { return _lib_Components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_1__["ToastsContainerComponent"]; });

/* harmony import */ var _lib_angular_bootstrap_toasts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/angular-bootstrap-toasts.module */ "./projects/angular-bootstrap-toasts/src/lib/angular-bootstrap-toasts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBootstrapToastsModule", function() { return _lib_angular_bootstrap_toasts_module__WEBPACK_IMPORTED_MODULE_2__["AngularBootstrapToastsModule"]; });

/*
 * Public API Surface of angular-bootstrap-toasts
 */





/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n    margin: 30px 0px 15px 0px;\r\n}\r\n\r\n.card {\r\n    margin: 30px;\r\n    padding: 20px;\r\n}\r\n\r\n.row {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.btn {\r\n    width: 150px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICAgIG1hcmdpbjogMzBweCAwcHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <form novalidate [formGroup]=\"ToastForm\">\r\n        <div>\r\n            <h4>Default Settings</h4>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"DefaultTitleInput\"><b>Default Title</b></label>\r\n                \r\n                        <input\r\n                            id=\"DefaultTitleInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            [value]=\"DefaultTitle\"\r\n                            (change)=\"changeDefaultTitle($event)\" />\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"DefaultMessageInput\"><b>Default Message</b></label>\r\n                \r\n                        <input\r\n                            id=\"DefaultMessageInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            [value]=\"DefaultMessage\"\r\n                            (change)=\"changeDefaultMessage($event)\" />\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"DefaultDurationInput\"><b>Default Duration</b> time</label>\r\n                \r\n                        <input\r\n                            id=\"DefaultDurationInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            [value]=\"DefaultDuration\"\r\n                            (change)=\"changeDefaultDuration($event)\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div>\r\n            <h4>Toast Settings</h4>\r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"ToastTitleInput\">Toast <b>Title</b></label>\r\n        \r\n                <input\r\n                    id=\"ToastTitleInput\"\r\n                    class=\"form-control\"\r\n                    type=\"text\"\r\n                    formControlName=\"title\" />\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n                <label for=\"ToastMessageTextarea\">Toast <b>Message</b></label>\r\n        \r\n                <textarea\r\n                    id=\"ToastMessageTextarea\"\r\n                    class=\"form-control\"\r\n                    type=\"text\"\r\n                    formControlName=\"text\"></textarea>\r\n            </div>\r\n        \r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastDurationInput\">Toast <b>Duration</b> time</label>\r\n                \r\n                        <input\r\n                            id=\"ToastDurationInput\"\r\n                            class=\"form-control\"\r\n                            type=\"number\"\r\n                            formControlName=\"duration\" />\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"col-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastMomentInput\">Toast <b>Moment</b></label>\r\n                \r\n                        <input\r\n                            id=\"ToastMomentInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"moment\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastClassInput\"><b>Toast</b> Class</label>\r\n\r\n                        <input\r\n                            id=\"ToastClassInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"toastClass\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastIconClassInput\">Toast <b>Icon</b> Class</label>\r\n        \r\n                        <input\r\n                            id=\"ToastIconClassInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"iconClass\" />\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"col-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastTitleClassInput\">Toast <b>Title</b> Class</label>\r\n                \r\n                        <input\r\n                            id=\"ToastTitleClassInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"titleClass\" />\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"col-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastBodyClassInput\">Toast <b>Body</b> Class</label>\r\n                \r\n                        <input\r\n                            id=\"ToastBodyClassInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"bodyClass\" />\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"col-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ToastProgressLineClassInput\">Toast <b>ProgressLine</b> Class</label>\r\n                \r\n                        <input\r\n                            id=\"ToastProgressLineClassInput\"\r\n                            class=\"form-control\"\r\n                            type=\"text\"\r\n                            formControlName=\"progressLineClass\" />\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n         \r\n    \r\n    \r\n        <div formGroupName=\"toolbarItems\">\r\n            <h4>ToolbarItems Settings</h4>\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <h5>ActionButton</h5>\r\n    \r\n                    <fieldset formGroupName=\"actionButton\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"ActionButtonTextInput\"><b>Text</b></label>\r\n                    \r\n                            <input\r\n                                id=\"ActionButtonTextInput\"\r\n                                class=\"form-control\"\r\n                                type=\"text\"\r\n                                formControlName=\"text\" />\r\n                        </div>\r\n        \r\n                        <div class=\"form-group\">\r\n                            <label for=\"ActionButtonClassInput\"><b>Class</b></label>\r\n                    \r\n                            <input\r\n                                id=\"ActionButtonClassInput\"\r\n                                class=\"form-control\"\r\n                                type=\"text\"\r\n                                formControlName=\"class\" />\r\n                        </div>\r\n        \r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"ActionButtonVisibleCheckbox\" formControlName=\"visible\">\r\n                            <label class=\"custom-control-label\" for=\"ActionButtonVisibleCheckbox\">Visible</label>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n    \r\n                <div class=\"col-6\">\r\n                    <h5>CancelButton</h5>\r\n    \r\n                    <fieldset formGroupName=\"cancelButton\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"CancelButtonTextInput\"><b>Text</b></label>\r\n                    \r\n                            <input\r\n                                id=\"CancelButtonTextInput\"\r\n                                class=\"form-control\"\r\n                                type=\"text\"\r\n                                formControlName=\"text\" />\r\n                        </div>\r\n        \r\n                        <div class=\"form-group\">\r\n                            <label for=\"CancelButtonClassInput\"><b>Class</b></label>\r\n                    \r\n                            <input\r\n                                id=\"CancelButtonClassInput\"\r\n                                class=\"form-control\"\r\n                                type=\"text\"\r\n                                formControlName=\"class\" />\r\n                        </div>\r\n        \r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"CancelButtonVisibleCheckbox\" formControlName=\"visible\">\r\n                            <label class=\"custom-control-label\" for=\"CancelButtonVisibleCheckbox\">Visible</label>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"ToastProgressBarEnabledCheckbox\" formControlName=\"showProgressLine\">\r\n            <label class=\"custom-control-label\" for=\"ToastProgressBarEnabledCheckbox\">Is ProgressLine Enabled</label>\r\n        </div>\r\n\r\n        <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"ToastDurationPausedWhenMouseEnterCheckbox\" formControlName=\"pauseDurationOnMouseEnter\">\r\n            <label class=\"custom-control-label\" for=\"ToastDurationPausedWhenMouseEnterCheckbox\">Is Duration paused when mouse enter</label>\r\n        </div>\r\n    </form>\r\n\r\n\r\n\r\n    <form novalidate [formGroup]=\"ContainerForm\">\r\n        <h4>Container Placement Settings</h4>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"ContainerPlacementSelect\">Container <b>Position</b></label>\r\n\r\n            <select\r\n                id=\"ContainerPlacementSelect\"\r\n                class=\"form-control\"\r\n                formControlName=\"position\">\r\n                <option value=\"topRight\">TopRight</option>\r\n                <option value=\"topLeft\">TopLeft</option>\r\n                <option value=\"bottomRight\">BottomRight</option>\r\n                <option value=\"bottomLeft\">BottomLeft</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"ContainerMarginLeftInput\">Container <b>MarginLeft</b></label>\r\n            \r\n                    <input\r\n                        id=\"ContainerMarginLeftInput\"\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"marginLeft\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"ContainerMarginRightInput\">Container <b>MarginRight</b></label>\r\n            \r\n                    <input\r\n                        id=\"ContainerMarginRightInput\"\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"marginRight\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"ContainerMarginTopInput\">Container <b>MarginTop</b></label>\r\n            \r\n                    <input\r\n                        id=\"ContainerMarginTopInput\"\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"marginTop\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"ContainerMarginBottomInput\">Container <b>MarginBottom</b></label>\r\n            \r\n                    <input\r\n                        id=\"ContainerMarginBottomInput\"\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"marginBottom\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 15px;\">\r\n            <button\r\n                type=\"button\"\r\n                style=\"margin-right: 10px;\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"showSimpleToast()\">Simple Toast</button>\r\n\r\n            <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"showConfirmToast()\">Confirm Toast</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<Angular-Bootstrap-Toasts-Container\r\n    [Placement]=\"ContainerForm.value\"></Angular-Bootstrap-Toasts-Container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_angular_bootstrap_toasts_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/angular-bootstrap-toasts/src/public-api */ "./projects/angular-bootstrap-toasts/src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(toastsService) {
        this.toastsService = toastsService;
        this.DefaultTitle = 'Default Title';
        this.DefaultMessage = 'Default Message';
        this.DefaultDuration = 5000;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.toastsService.changeDefaultTitle(this.DefaultTitle);
        this.toastsService.changeDefaultText(this.DefaultMessage);
        this.createToolbarItemsForm();
        this.createContainerForm();
        this.createMainForm();
    };
    AppComponent.prototype.changeDefaultTitle = function (e) {
        var title = e.target.value;
        this.DefaultTitle = title;
        this.toastsService.changeDefaultTitle(title);
    };
    AppComponent.prototype.changeDefaultMessage = function (e) {
        var message = e.target.value;
        this.DefaultMessage = message;
        this.toastsService.changeDefaultText(message);
    };
    AppComponent.prototype.changeDefaultDuration = function (e) {
        var duration = +e.target.value;
        this.DefaultDuration = duration;
        this.toastsService.changeDefaultDuration(duration);
    };
    AppComponent.prototype.showSimpleToast = function () {
        var params = this.ToastForm.value;
        this.toastsService.showSimpleToast(params);
    };
    AppComponent.prototype.showConfirmToast = function () {
        var params = this.ToastForm.value;
        var toast = this.toastsService.showConfirmToast(params);
        var toastSubscription = toast.ConfirmationResult$.subscribe(function (value) {
            console.log("Toast confirm result: " + value);
            toastSubscription.unsubscribe();
        });
    };
    AppComponent.prototype.createMainForm = function () {
        this.ToastForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Some custom Message.<br>Here is available <b>HTML</b> tags!'),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Custom Title'),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](5000),
            moment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('just now'),
            iconClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('fas fa-heart text-danger'),
            titleClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bodyClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            toastClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            progressLineClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('text-danger'),
            showProgressLine: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            pauseDurationOnMouseEnter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            toolbarItems: this.ToolbarItems
        });
    };
    AppComponent.prototype.createToolbarItemsForm = function () {
        this.ActionButton = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Confirm action'),
            class: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('btn btn-success btn-sm'),
            visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        });
        this.CancelButton = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Cancel'),
            class: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('btn btn-secondary btn-sm'),
            visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        });
        this.ToolbarItems = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            actionButton: this.ActionButton,
            cancelButton: this.CancelButton
        });
    };
    AppComponent.prototype.createContainerForm = function () {
        var defaultMargin = '10px';
        this.ContainerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('topRight'),
            marginLeft: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](defaultMargin),
            marginRight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](defaultMargin),
            marginTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](defaultMargin),
            marginBottom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](defaultMargin)
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_angular_bootstrap_toasts_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AngularBootstrapToastsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_angular_bootstrap_toasts_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/angular-bootstrap-toasts/src/public-api */ "./projects/angular-bootstrap-toasts/src/public-api.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                projects_angular_bootstrap_toasts_src_public_api__WEBPACK_IMPORTED_MODULE_6__["AngularBootstrapToastsModule"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\lib-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map