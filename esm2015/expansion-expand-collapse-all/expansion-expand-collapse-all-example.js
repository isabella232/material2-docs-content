/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
/**
 * \@title Accordion with expand/collapse all toggles
 */
export class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-toggle-all-example',
                template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<mat-accordion class=\"example-headers-align\" multi>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel disabled>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n",
                styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"]
            }] }
];
ExpansionExpandCollapseAllExample.propDecorators = {
    accordion: [{ type: ViewChild, args: [MatAccordion, { static: false },] }]
};
if (false) {
    /** @type {?} */
    ExpansionExpandCollapseAllExample.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFVekQsTUFBTSxPQUFPLGlDQUFpQzs7O1lBTDdDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxneERBQXlEOzthQUUxRDs7O3dCQUVFLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs7O0lBQXhDLHNEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRBY2NvcmRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5cbi8qKlxuICogQHRpdGxlIEFjY29yZGlvbiB3aXRoIGV4cGFuZC9jb2xsYXBzZSBhbGwgdG9nZ2xlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tdG9nZ2xlLWFsbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChNYXRBY2NvcmRpb24sIHtzdGF0aWM6IGZhbHNlfSkgYWNjb3JkaW9uOiBNYXRBY2NvcmRpb247XG59XG4iXX0=