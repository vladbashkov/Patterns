class CheckOilPressure {
    public oilPressure(): void {
        console.log(`Good oil pressure`);
    }
}

class CheckFuelLevel {
    public fuelLevel(): void {
        console.log(`Good fuel level`);
    }
}

class CheckSteamPressure {
    public steamPressure(): void {
        console.log(`Good steam pressure`);
    }
}

class StartMainEngine {
    private oil: CheckOilPressure;
    private fuel: CheckFuelLevel;
    private steam: CheckSteamPressure;

    constructor() {
        this.oil = new CheckOilPressure();
        this.fuel = new CheckFuelLevel();
        this.steam = new CheckSteamPressure();
    }

    operationStart(): void {
        this.oil.oilPressure();
        this.fuel.fuelLevel();
        this.steam.steamPressure();
    }
}

const mainEngine = new StartMainEngine();
mainEngine.operationStart();