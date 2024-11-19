import { OnInit } from "@angular/core";

export class Player2{

    name!: string;
    saveId!: any;
    vaartus! : number;
    totalPlayerClicks!: number;
    successfulRobbings! : number;
    failedRobbings! : number;
    totalSpentOnRaids! : number;
    totalWonWithRaids! : number;
    totalVaartus! : number;
    startingDate! : number;

    manualClickSettings: any = {
        currencyPerManualClick : 1,
        powerPerManualClick : 1,
        manualPowerClickPrice : 200,
        manuallyClicked: 0,
      }
    
      autoClickerSetting: any = {
        currencyPer: 1,
        amountOf : 0,
        powerPer : 1,
        pricePer: 100,
        pricePerPower: 1000,
      }
    
      cryptoMiner: any = {
        currencyPer: 10,
        amountOf : 0,
        powerPer: 1,
        pricePer: 1000,
        pricePerPower: 5000,
      }
    
      factory: any = {
        currencyPer: 100,
        amountOf : 0,
        powerPer: 1,
        pricePer: 10000,
        pricePerPower: 50000,
      }
    
      shop: any = {
        currencyPer: 1000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 100000,
        pricePerPower: 500000,
      }
    
      marketing: any = {
        currencyPer: 10000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 1000000,
        pricePerPower: 5000000,
      }
    
      influensers: any = {
        currencyPer: 1,
        amountOf : 0,
        powerPer: 1,
        pricePer: 10000000,
        pricePerPower: 50000000,
        powerBtnOpacity: 0
      }
    
      mafia: any = {
        currencyPer: 1000000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 100000000,
        pricePerPower: 500000000,
        powerBtnOpacity: 0
      }
    
      government: any = {
        currencyPer: 10000000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 1000000000,
        pricePerPower: 5000000000,
        powerBtnOpacity: 0
      }
    
      spaceExploration: any = {
        currencyPer: 100000000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 10000000000,
        pricePerPower: 50000000000,
        powerBtnOpacity: 0
      }
    
      aliens: any = {
        currencyPer: 1000000000,
        amountOf : 0,
        powerPer: 1,
        pricePer: 100000000000,
        pricePerPower: 500000000000,
        powerBtnOpacity: 0
      }

      timeFirsts: any = {
        timeUntilFirstTotal1K: null,
        timeUntilFirstTotal10K: null,
        timeUntilFirstTotal100K: null,
        timeUntilFirstTotal1M: null,
        timeUntilFirstTotal10M: null,
        timeUntilFirstTotal100M: null,
        timeUntilFirstTotal1B: null,
        timeUntilFirstTotal10B: null,
        timeUntilFirstTotal100B: null,
        timeUntilFirstTotal1T: null,
      }
    

    constructor(name: string, saveId: string, vaartus: number, totalPlayerClicks: number, successfulRobbings: number, failedRobbings: number, totalSpentOnRaids: number, totalWonWithRaids: number, totalVaartus : number, startingDate : number
        ,manualClickSettings : any ,autoClickerSetting : any, cryptoMiner: any, factory: any, shop: any, marketing: any, influensers: any, mafia: any, government: any, spaceExploration: any, aliens: any, timeFirsts: any ) {
        this.name=name;
        this.saveId=saveId;
        this.vaartus=vaartus;
        this.totalPlayerClicks=totalPlayerClicks;
        this.successfulRobbings=successfulRobbings;
        this.failedRobbings=failedRobbings;
        this.totalSpentOnRaids=totalSpentOnRaids;
        this.totalWonWithRaids=totalWonWithRaids;
        this.totalVaartus = totalVaartus;
        this.startingDate = startingDate;
        
        this.manualClickSettings = manualClickSettings;
        this.autoClickerSetting = autoClickerSetting;
        this.cryptoMiner = cryptoMiner;
        this.factory = factory;
        this.shop = shop;
        this.marketing = marketing;
        this.influensers = influensers;
        this.mafia = mafia;
        this.government = government;
        this.spaceExploration = spaceExploration;
        this.aliens = aliens;
        this.timeFirsts = timeFirsts;
        
    }


    setPlayer(vaartus2: number, totalPlayerClicks2: number,successfulRobbings : number, failedRobbings: number, totalSpentOnRaids : number, totalWonWithRaids: number) {
        
    
    }
}

// export enum ManualClickSettings {
//     currencyPerManualClick,
//     powerPerManualClick,
//     manualPowerClickPrice,
//     manuallyClicked,
// }


// export enum AutoClickSettings {
//     amountOfAutoClickers,
//     powerPerAutoClicker,
//     priceForAutoClicker,
//     priceForAutoClickPower,
// }

// export enum CryptoMiner {
//     currencyPerCryptoMiner,
//     amountOfCryptoMiners,
//     powerPerCryptoMiner,
//     pricePerCryptoMiner,
//     pricePerCryptoMinerPower,
// }

// export enum Factory {
//     currencyPerFactory,
//     amountOfFactories,
//     sizePerFactory,
//     pricePerFactory,
//     pricePerFactorySize,
// }

// export enum Shop {
//     currencyPerShop,
//     amountOfShops,
//     sizePerShop,
//     pricePerShop,
//     pricePerShopSize,
// }

// export enum Marketing {
//     currencyPerMarketer,
//     amountOfMarketers,
//     membersOfMarketingTeam,
//     pricePerMarketingTeam,
//     priceToAddNewMemeberToMarketingTeam,
// }

// export enum Influensers {
//     currencyPer,
//     amountOf,
//     powerPer,
//     pricePer,
//     pricePerPower,
//     powerBtnOpacity,
// }

// export enum Mafia {
//     currencyPer,
//     amountOf,
//     powerPer,
//     pricePer,
//     pricePerPower,
//     powerBtnOpacity,
// }

// export enum Government {
//     currencyPer,
//     amountOf,
//     powerPer,
//     pricePer,
//     pricePerPower,
//     powerBtnOpacity,
// }

// export enum SpaceExploration {
//     currencyPer,
//     amountOf,
//     powerPer,
//     pricePer,
//     pricePerPower,
//     powerBtnOpacity,
// }

// export enum Aliens {
//     currencyPer,
//     amountOf,
//     powerPer,
//     pricePer,
//     pricePerPower,
//     powerBtnOpacity,
// }


// name!: string;
// saveId!: string;
// savedValues: any = {
// vaartus : 0,
// totalPlayerClicks: 0,
// successfulRobbings : 0,
// failedRobbings : 0,
// totalSpentOnRaids : 0,
// totalWonWithRaids : 0
// }