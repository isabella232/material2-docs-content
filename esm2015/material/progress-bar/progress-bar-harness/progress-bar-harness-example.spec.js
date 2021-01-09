import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatProgressBarHarness } from '@angular/material/progress-bar/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarHarnessExample } from './progress-bar-harness-example';
describe('ProgressBarHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatProgressBarModule],
            declarations: [ProgressBarHarnessExample]
        }).compileComponents();
        fixture = TestBed.createComponent(ProgressBarHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    }));
    it('should load all progress bar harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const progressBars = yield loader.getAllHarnesses(MatProgressBarHarness);
        expect(progressBars.length).toBe(2);
    }));
    it('should get the value', () => __awaiter(void 0, void 0, void 0, function* () {
        fixture.componentInstance.value = 50;
        const [determinate, indeterminate] = yield loader.getAllHarnesses(MatProgressBarHarness);
        expect(yield determinate.getValue()).toBe(50);
        expect(yield indeterminate.getValue()).toBe(null);
    }));
    it('should get the mode', () => __awaiter(void 0, void 0, void 0, function* () {
        const [determinate, indeterminate] = yield loader.getAllHarnesses(MatProgressBarHarness);
        expect(yield determinate.getMode()).toBe('determinate');
        expect(yield indeterminate.getMode()).toBe('indeterminate');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBb0IsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFN0UsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFDLE1BQzVELDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXpFLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7SUFDekMsSUFBSSxPQUFvRCxDQUFDO0lBQ3pELElBQUksTUFBcUIsQ0FBQztJQUUxQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FDUixZQUFZLENBQUMsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUMxQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixNQUFNLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUNILENBQUM7SUFFRixFQUFFLENBQUMsd0NBQXdDLEVBQUUsR0FBUyxFQUFFO1FBQ3RELE1BQU0sWUFBWSxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLEdBQUcsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekYsTUFBTSxDQUFDLE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQVMsRUFBRTtRQUNuQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXN0QmVkLCBDb21wb25lbnRGaXh0dXJlLCB3YWl0Rm9yQXN5bmN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge1Rlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nL3Rlc3RiZWQnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhckhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhci90ZXN0aW5nJztcbmltcG9ydCB7SGFybmVzc0xvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUsIHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nfVxuICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5kZXNjcmliZSgnUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZT47XG4gIGxldCBsb2FkZXI6IEhhcm5lc3NMb2FkZXI7XG5cbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBUZXN0QmVkLmluaXRUZXN0RW52aXJvbm1lbnQoQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpKTtcbiAgfSk7XG5cbiAgYmVmb3JlRWFjaChcbiAgICB3YWl0Rm9yQXN5bmMoKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW01hdFByb2dyZXNzQmFyTW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZV1cbiAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGxvYWRlciA9IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQubG9hZGVyKGZpeHR1cmUpO1xuICAgIH0pXG4gICk7XG5cbiAgaXQoJ3Nob3VsZCBsb2FkIGFsbCBwcm9ncmVzcyBiYXIgaGFybmVzc2VzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGF3YWl0IGxvYWRlci5nZXRBbGxIYXJuZXNzZXMoTWF0UHJvZ3Jlc3NCYXJIYXJuZXNzKTtcbiAgICBleHBlY3QocHJvZ3Jlc3NCYXJzLmxlbmd0aCkudG9CZSgyKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBnZXQgdGhlIHZhbHVlJywgYXN5bmMgKCkgPT4ge1xuICAgIGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2UudmFsdWUgPSA1MDtcbiAgICBjb25zdCBbZGV0ZXJtaW5hdGUsIGluZGV0ZXJtaW5hdGVdID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRQcm9ncmVzc0Jhckhhcm5lc3MpO1xuICAgIGV4cGVjdChhd2FpdCBkZXRlcm1pbmF0ZS5nZXRWYWx1ZSgpKS50b0JlKDUwKTtcbiAgICBleHBlY3QoYXdhaXQgaW5kZXRlcm1pbmF0ZS5nZXRWYWx1ZSgpKS50b0JlKG51bGwpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGdldCB0aGUgbW9kZScsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbZGV0ZXJtaW5hdGUsIGluZGV0ZXJtaW5hdGVdID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRQcm9ncmVzc0Jhckhhcm5lc3MpO1xuICAgIGV4cGVjdChhd2FpdCBkZXRlcm1pbmF0ZS5nZXRNb2RlKCkpLnRvQmUoJ2RldGVybWluYXRlJyk7XG4gICAgZXhwZWN0KGF3YWl0IGluZGV0ZXJtaW5hdGUuZ2V0TW9kZSgpKS50b0JlKCdpbmRldGVybWluYXRlJyk7XG4gIH0pO1xufSk7XG4iXX0=