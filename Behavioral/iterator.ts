interface IteratorInterface {
    index: number;
    elements: any;
    keys?: any;
}

class IteratorArray implements IteratorInterface {
    public index: number;
    public elements: any[];

    constructor (el: any[]) {
        this.index = 0;
        this.elements = el;
    }

    public next(): any[] {
        return this.elements[this.index++];
    }

    public hasNext(): Boolean {
        return this.index < this.elements.length;
    }
}

class IteratorObject implements IteratorInterface {
    public index: number;
    public elements: Object;
    public keys: any;

    constructor(el: Object) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }

    public next(): Object {
        return this.elements[this.keys[this.index++]];
    }

    public hasNext(): Boolean {
		return this.index < this.keys.length;
	}
}

const menuArr = [`Pizza`, `Sushi`, `Sandwich`, `Salad`];
const IteratorArrMenu = new IteratorArray(menuArr);
while(IteratorArrMenu.hasNext()) {
    console.log(IteratorArrMenu.next());
}


const menuObj = {
    Pizza: {size: 30, topping: `cheese`, price: 120},
    Sushi: {quant: 12, topping: `philadelphia`, price: 160},
    Sandwich: {size: 20, topping: `salmon`, price: 80},
    Salad: {weight: 250, topping: `feta`, price: 100}
}
const IteratorObjMenu = new IteratorObject(menuObj);
while(IteratorObjMenu.hasNext()) {
    console.log(IteratorObjMenu.next());
}