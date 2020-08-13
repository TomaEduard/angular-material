import { Directive, ViewContainerRef, TemplateRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[acsTree]'
})
// tslint:disable-next-line:directive-class-suffix
export class AcsTreeDirectiva implements OnInit, OnChanges{

    @Input() acsTree: any[];

    constructor(private container: ViewContainerRef,
                private template: TemplateRef<any>
    ) {}
    ngOnChanges(changes: SimpleChanges): void {
        for (const input of this.acsTree) {
            this.container.createEmbeddedView(this.template);
        }
    }
    ngOnInit(): void {
        this.container.createEmbeddedView(this.template);
    }

}
