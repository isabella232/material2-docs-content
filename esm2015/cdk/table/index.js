/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/table/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableBasicFlexExample } from './cdk-table-basic-flex/cdk-table-basic-flex-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import * as i0 from "@angular/core";
export { CdkTableBasicExample, CdkTableBasicFlexExample, };
/** @type {?} */
const EXAMPLES = [
    CdkTableBasicExample,
    CdkTableBasicFlexExample,
];
export class CdkTableExamplesModule {
}
CdkTableExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkTableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
/** @nocollapse */ CdkTableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
            CdkTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableBasicFlexExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableBasicFlexExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFL0UsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix3QkFBd0IsR0FDekIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQ3pCO0FBVUQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBUmxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzs2RUFDWSxzQkFBc0I7OElBQXRCLHNCQUFzQixrQkFQeEI7WUFDUCxjQUFjO1NBQ2Y7d0ZBS1Usc0JBQXNCLG1CQVpqQyxvQkFBb0I7UUFDcEIsd0JBQXdCLGFBS3RCLGNBQWMsYUFOaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtrREFXYixzQkFBc0I7Y0FSbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1RhYmxlQmFzaWNGbGV4RXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtYmFzaWMtZmxleC9jZGstdGFibGUtYmFzaWMtZmxleC1leGFtcGxlJztcbmltcG9ydCB7Q2RrVGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWJhc2ljL2Nkay10YWJsZS1iYXNpYy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlQmFzaWNGbGV4RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVCYXNpY0ZsZXhFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=