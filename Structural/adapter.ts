interface Inches {
    getInches(inch: number): number;
}

interface Centimeters {
    getCentimeters(cm: number): number;
}

class getInches implements Inches {
    getInches(inch: number): number {
        return inch;
    }
}

class getCentimeters implements Centimeters {
    getCentimeters(cm: number): number {
        return cm;
    }
}

class InchesToCentimetersAdapter implements Centimeters {
    public inchUnit: Inches;

    constructor(inches: Inches) {
        this.inchUnit = inches;
    }

    getCentimeters(inch: number): number {
        return this.inchUnit.getInches(inch)/2.54;
    }
}

class CentimetersToInchesAdapter implements Inches {
    public cmUnit: Centimeters;

    constructor(cm: Centimeters) {
        this.cmUnit = cm;
    }

    getInches(cm: number): number {
        return this.cmUnit.getCentimeters(cm)*2.54;
    }
}

const inch = new getInches();
const inchAdapter = new InchesToCentimetersAdapter(inch);
console.log(inchAdapter.getCentimeters(10));

const centimeter = new getCentimeters();
const cmAdapter = new CentimetersToInchesAdapter(centimeter);
console.log(cmAdapter.getInches(10));



