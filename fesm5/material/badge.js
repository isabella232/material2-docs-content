import { Component, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'badge-overview-example',
                    template: "<p>\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n</p>\n\n<p>\n  Button with a badge on the left\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n</p>\n\n<p>\n  Icon with a badge\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return BadgeOverviewExample;
}());

var EXAMPLES = [
    BadgeOverviewExample,
];
var BadgeExamplesModule = /** @class */ (function () {
    function BadgeExamplesModule() {
    }
    BadgeExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBadgeModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return BadgeExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeOverviewExample, BadgeExamplesModule };
//# sourceMappingURL=badge.js.map
