import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic buttons
 */
export class ButtonOverviewExample {
}
ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
ButtonOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 132, vars: 0, consts: [[1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"]], template: function ButtonOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtext(2, "Basic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Basic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵtext(7, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵtext(9, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵtext(11, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 6);
        i0.ɵɵtext(13, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "a", 7);
        i0.ɵɵtext(15, "Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "mat-divider");
        i0.ɵɵelementStart(17, "section");
        i0.ɵɵelementStart(18, "div", 0);
        i0.ɵɵtext(19, "Raised");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 1);
        i0.ɵɵelementStart(21, "button", 8);
        i0.ɵɵtext(22, "Basic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 9);
        i0.ɵɵtext(24, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 10);
        i0.ɵɵtext(26, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 11);
        i0.ɵɵtext(28, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "button", 12);
        i0.ɵɵtext(30, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "a", 13);
        i0.ɵɵtext(32, "Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "mat-divider");
        i0.ɵɵelementStart(34, "section");
        i0.ɵɵelementStart(35, "div", 0);
        i0.ɵɵtext(36, "Stroked");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 1);
        i0.ɵɵelementStart(38, "button", 14);
        i0.ɵɵtext(39, "Basic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "button", 15);
        i0.ɵɵtext(41, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 16);
        i0.ɵɵtext(43, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 17);
        i0.ɵɵtext(45, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 18);
        i0.ɵɵtext(47, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "a", 19);
        i0.ɵɵtext(49, "Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(50, "mat-divider");
        i0.ɵɵelementStart(51, "section");
        i0.ɵɵelementStart(52, "div", 0);
        i0.ɵɵtext(53, "Flat");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "div", 1);
        i0.ɵɵelementStart(55, "button", 20);
        i0.ɵɵtext(56, "Basic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "button", 21);
        i0.ɵɵtext(58, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "button", 22);
        i0.ɵɵtext(60, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "button", 23);
        i0.ɵɵtext(62, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "button", 24);
        i0.ɵɵtext(64, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "a", 25);
        i0.ɵɵtext(66, "Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(67, "mat-divider");
        i0.ɵɵelementStart(68, "section");
        i0.ɵɵelementStart(69, "div", 0);
        i0.ɵɵtext(70, "Icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "div", 1);
        i0.ɵɵelementStart(72, "div", 26);
        i0.ɵɵelementStart(73, "button", 27);
        i0.ɵɵelementStart(74, "mat-icon");
        i0.ɵɵtext(75, "more_vert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "button", 28);
        i0.ɵɵelementStart(77, "mat-icon");
        i0.ɵɵtext(78, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(79, "button", 29);
        i0.ɵɵelementStart(80, "mat-icon");
        i0.ɵɵtext(81, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "button", 30);
        i0.ɵɵelementStart(83, "mat-icon");
        i0.ɵɵtext(84, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "button", 31);
        i0.ɵɵelementStart(86, "mat-icon");
        i0.ɵɵtext(87, "open_in_new");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(88, "mat-divider");
        i0.ɵɵelementStart(89, "section");
        i0.ɵɵelementStart(90, "div", 0);
        i0.ɵɵtext(91, "FAB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "div", 1);
        i0.ɵɵelementStart(93, "div", 26);
        i0.ɵɵelementStart(94, "div", 32);
        i0.ɵɵelementStart(95, "button", 33);
        i0.ɵɵelementStart(96, "mat-icon");
        i0.ɵɵtext(97, "delete");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(98, "div", 32);
        i0.ɵɵelementStart(99, "button", 34);
        i0.ɵɵelementStart(100, "mat-icon");
        i0.ɵɵtext(101, "bookmark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "div", 32);
        i0.ɵɵelementStart(103, "button", 35);
        i0.ɵɵelementStart(104, "mat-icon");
        i0.ɵɵtext(105, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(106, "div", 32);
        i0.ɵɵelementStart(107, "button", 36);
        i0.ɵɵelementStart(108, "mat-icon");
        i0.ɵɵtext(109, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(110, "mat-divider");
        i0.ɵɵelementStart(111, "section");
        i0.ɵɵelementStart(112, "div", 0);
        i0.ɵɵtext(113, "Mini FAB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(114, "div", 1);
        i0.ɵɵelementStart(115, "div", 26);
        i0.ɵɵelementStart(116, "div", 32);
        i0.ɵɵelementStart(117, "button", 37);
        i0.ɵɵelementStart(118, "mat-icon");
        i0.ɵɵtext(119, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(120, "div", 32);
        i0.ɵɵelementStart(121, "button", 38);
        i0.ɵɵelementStart(122, "mat-icon");
        i0.ɵɵtext(123, "plus_one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(124, "div", 32);
        i0.ɵɵelementStart(125, "button", 39);
        i0.ɵɵelementStart(126, "mat-icon");
        i0.ɵɵtext(127, "filter_list");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(128, "div", 32);
        i0.ɵɵelementStart(129, "button", 40);
        i0.ɵɵelementStart(130, "mat-icon");
        i0.ɵɵtext(131, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i1.MatAnchor, i2.MatDivider, i3.MatIcon], styles: ["section[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-overview-example',
                templateUrl: 'button-overview-example.html',
                styleUrls: ['button-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjswREFBckIscUJBQXFCO1FDVmxDLCtCQUFTO1FBQ1AsOEJBQTJCO1FBQUEscUJBQUs7UUFBQSxpQkFBTTtRQUN0Qyw4QkFBZ0M7UUFDOUIsaUNBQW1CO1FBQUEscUJBQUs7UUFBQSxpQkFBUztRQUNqQyxpQ0FBbUM7UUFBQSx1QkFBTztRQUFBLGlCQUFTO1FBQ25ELGlDQUFrQztRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDakQsa0NBQWdDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUM3QyxrQ0FBNEI7UUFBQSx5QkFBUTtRQUFBLGlCQUFTO1FBQzdDLDZCQUE2RDtRQUFBLHFCQUFJO1FBQUEsaUJBQUk7UUFDdkUsaUJBQU07UUFDUixpQkFBVTtRQUNWLCtCQUEyQjtRQUMzQixnQ0FBUztRQUNQLCtCQUEyQjtRQUFBLHVCQUFNO1FBQUEsaUJBQU07UUFDdkMsK0JBQWdDO1FBQzlCLGtDQUEwQjtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDeEMsa0NBQTBDO1FBQUEsd0JBQU87UUFBQSxpQkFBUztRQUMxRCxtQ0FBeUM7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ3hE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UUFBQSxpQkFBVztRQUMvQixpQkFBUztRQUNYLGlCQUFNO1FBQ04saUNBQXNDO1FBQ3BDLG9DQUEyRjtRQUN6RixrQ0FBVTtRQUFBLDZCQUFXO1FBQUEsaUJBQVc7UUFDbEMsaUJBQVM7UUFDWCxpQkFBTTtRQUNOLGlDQUFzQztRQUNwQyxvQ0FBZ0Y7UUFDOUUsa0NBQVU7UUFBQSxzQkFBSTtRQUFBLGlCQUFXO1FBQzNCLGlCQUFTO1FBQ1gsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQVU7O3VGRG5IRyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBidXR0b25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25PdmVydmlld0V4YW1wbGUge31cbiIsIjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkJhc2ljPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+UmFpc2VkPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+U3Ryb2tlZDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtc3Ryb2tlZC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkZsYXQ8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LWZsYXQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5JY29uPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHZlcnRpY2FsIHRocmVlIGRvdCBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgbWVudSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG9wZW4gaW4gbmV3IHRhYiBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5vcGVuX2luX25ldzwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkZBQjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZmxleC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBkZWxldGUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgYm9va21hcmsgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5ib29rbWFyazwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+TWluaSBGQUI8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZsZXgtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBtZW51IGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHBsdXMgb25lIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+cGx1c19vbmU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgZmlsdGVyIGxpc3QgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5maWx0ZXJfbGlzdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBob21lIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+aG9tZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl19