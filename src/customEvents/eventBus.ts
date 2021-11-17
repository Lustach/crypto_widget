export class EventBus extends EventTarget {
    on(type:string, listener: (event: any) => any ) {
        this.addEventListener(type, listener)
    }
    once(type:string, listener: (event: any) => any )  {
        this.addEventListener(type, listener, {once: true})
    }
    off(type:string, listener: (event: any) => any )  {
        this.removeEventListener(type, listener)
    }
    emit(type:string, data:any)  {
        const evt = new CustomEvent(type, {detail: data})
        this.dispatchEvent(evt)
    }
    constructor() {
        super();
    }
}

export const eventBus = new EventBus()
// Usage
// myEventBus.on('event-name', ({ detail }) => {
//     console.log(detail);
// });
//
// myEventBus.once('event-name', ({ detail }) => {
//     console.log(detail);
// });
//

