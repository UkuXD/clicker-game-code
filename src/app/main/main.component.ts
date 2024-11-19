import { CommonModule } from '@angular/common';
import { Component, OnInit, ɵ_sanitizeUrl } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '../player.service';
import { RouterOutlet } from '@angular/router';


import { Player2 } from './model/playerStats';

import { HttpErrorResponse } from '@angular/common/http';
import { LoadPlayer } from './model/loadPlayer';
import { transform } from 'typescript';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  form!: FormGroup;
  constructor(private playerService: PlayerService) {}


  ngOnInit(): void {
    this.autoInComeIntervalRun(this.autoClickerSetting);
    this.autoInComeIntervalRun(this.cryptoMiner);
    this.autoInComeIntervalRun(this.factory);
    this.autoInComeIntervalRun(this.shop);
    this.autoInComeIntervalRun(this.marketing);
    this.autoInComeIntervalRun(this.influensers);
    this.autoInComeIntervalRun(this.mafia);
    this.autoInComeIntervalRun(this.government);
    this.autoInComeIntervalRun(this.spaceExploration);
    this.autoInComeIntervalRun(this.aliens);
    this.totalEarnings();
    this.timeSpent();
  }


  vaartus: number = 0;

  //totalVaartus!: number;
  totalVaartus: number = 0;
  totalPlayerClicks: number = 0;
  autoClickInterVal: any;
  gainPerSec: any;
  willingToPayForRobbersEquipment: number = 0;
  successfulRobbings: number = 0;
  failedRobbings: number = 0;
  paymentForRobbers: number = 0;
  enemyDefence: number = 0;
  playerAttack: number = 0;
  robbingPrize: number = 0;
  raidStatus!: string;
  isRaiding: boolean = false;
  tempTimer: number = 0;
  manualPowerClickUpgradeOpacity: number = 0;
  autoPowerClickUpgradeOpacity: number = 0;
  buyAutoClickUpgradeOpacity: number = 0;
  pealelaadijad: boolean = true;
  konnibbaasi: number = 11;
  konnibkastika: number = 6;
  loadingCarInterval: any;
  carPicture: string = "auto.png";
  carSpeed: number = 6.3;
  carSpeedInterval: any;
  carDriving: boolean = true;
  
  droneoperator: boolean = false;
  droneOperatorLeft: number = 165;
  droneOperatorInterval: any;

  droneInterval2: any;
  droneFly: boolean = false;
  droneInterval: any;
  droneBottom: number = 166;
  droneLeft: number = 87;
  droneCrash: boolean = false;

  attackersPreparing: any[] = [];
  attackerLeft: number = 160;
  tempZ: number = 4;
  addAttackersBoolean: boolean = false;
  addAttackersInterval: any;
  carSpeedWithAttackingEnemyInterval: any;

  attackingAnimationMovingInterval: any;

  carReturningHomeInterval: any;
  carDirection: string = "none";
  
  jumpers:any[] = [];
  jumpersInterval: any;
  jumpersLeft: number = 10.2;
  jumperAnimationInterval: any;
  jumperToAddToAnimation: number = 0;
  jumperAnimationUp: boolean = true;

  showRaidStat: boolean = false;
  previousRaid: string = "None";
  totalSpentOnRaids: number = 0;
  totalWonWithRaids: number = 0;
  ourAttack: number = 0;
  enemysDefence: number = 0;

  cryptoMinerInterval: any;
  cryptoMinerPowerUpgradeOpacity: number = 0;

  factoryInterval: any;
  factorySizeUpgradeOpacity: number = 0;

  shopInterval: any;
  shopSizeUpgradeOpacity: number = 0;

  marketingInterval: any;
  addMemberToMarketingTeamUpgradeOpacity: number = 0;

  incomeInterval: any;

  totalEarningsInterval: any;

  saveOrLoad!: boolean;
  playerLoad: any;

  autoIncomeInterval: any;

  testAmountOf: number = 1000;

  balls: any [] = [];
  ballsInterval : any;
  indexOfBall: number = 0;

  isBallAlreadyRolling: boolean = false;

  timeInterval: any;
  startingDate: any;

  saveOrLoadWindow : boolean = false;

  name = "ants";
  saveId = "ants";

  // interface mitmikOst {
  //   uks: boolean
  //   kumme: boolean
  //   sada: boolean }

  // mitkmikOstVaartused: MitmikOst = {
  //   uks: true
  //  kumme: false
  //  sada: false
  //  };


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
    interval: null,
  }

  cryptoMiner: any = {
    currencyPer: 10,
    amountOf : 0,
    powerPer: 1,
    pricePer: 1000,
    pricePerPower: 5000,
    interval: null,
  }

  factory: any = {
    currencyPer: 20,
    amountOf : 0,
    powerPer: 1,
    pricePer: 5000,
    pricePerPower: 10000,
    interval: null,
  }

  shop: any = {
    currencyPer: 50,
    amountOf : 0,
    powerPer: 1,
    pricePer: 20000,
    pricePerPower: 50000,
    interval: null,
  }

  marketing: any = {
    currencyPer: 100,
    amountOf : 0,
    powerPer: 1,
    pricePer: 50000,
    pricePerPower: 100000,
    interval: null,
  }

  influensers: any = {
    currencyPer: 400,
    amountOf : 0,
    powerPer: 1,
    pricePer: 100000,
    pricePerPower: 500000,
    powerBtnOpacity: 0,
    interval: null,
  }

  mafia: any = {
    currencyPer: 1000,
    amountOf : 0,
    powerPer: 1,
    pricePer: 1000000,
    pricePerPower: 2000000,
    powerBtnOpacity: 0,
    interval: null,
  }

  government: any = {
    currencyPer: 2000,
    amountOf : 0,
    powerPer: 1,
    pricePer: 5000000,
    pricePerPower: 20000000,
    powerBtnOpacity: 0,
    interval: null,
  }

  spaceExploration: any = {
    currencyPer: 5000,
    amountOf : 0,
    powerPer: 1,
    pricePer: 10000000,
    pricePerPower: 50000000,
    powerBtnOpacity: 0,
    interval: null,
  }

  aliens: any = {
    currencyPer: 10000,
    amountOf : 0,
    powerPer: 1,
    pricePer: 100000000,
    pricePerPower: 500000000,
    powerBtnOpacity: 0,
    interval: null,
  }

  timeFirsts: any = {
    timeUntilFirstTotal1K: 0,
    timeUntilFirstTotal10K: 0,
    timeUntilFirstTotal100K: 0,
    timeUntilFirstTotal1M: 0,
    timeUntilFirstTotal10M: 0,
    timeUntilFirstTotal100M: 0,
    timeUntilFirstTotal1B: 0,
    timeUntilFirstTotal10B: 0,
    timeUntilFirstTotal100B: 0,
    timeUntilFirstTotal1T: 0,
  }

autoInComeIntervalRun(who: any) {
  if(who.amountOf > 0) {
  let tempAmountOf = who.amountOf;
  who.interval = setInterval(() => {
    if(tempAmountOf == who.amountOf) {
      this.vaartus += who.currencyPer * who.powerPer;
    } else {
      clearInterval(who.interval);
      this.autoInComeIntervalRun(who);
    }
  if(who == this.autoClickerSetting && this.jumpers.length < who.amountOf) {
    console.log("Peaks lisama jumperi")
    this.addJumper();
  }
  }, 1000 / who.amountOf);
}
}

buyAutoInComeAmount(who: any) {
  if(this.vaartus >= who.pricePer) {
    this.vaartus -= who.pricePer;
    who.amountOf += 1;
    who.pricePer +=Math.round(Math.random() * who.pricePer * 2);
  if(who.amountOf == 1) {
    this.autoInComeIntervalRun(who);
  }
  }
}

timeSpent() {
  this.timeInterval = setInterval(() => {
    let tempCurrentTime = Date.now();
    if(this.timeFirsts.timeUntilFirstTotal1K == 0 && this.totalVaartus >= 1000) {
      this.timeFirsts.timeUntilFirstTotal1K = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal10K == 0 && this.totalVaartus >= 10000) {
      this.timeFirsts.timeUntilFirstTotal10K = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal100K == 0 && this.totalVaartus >= 100000) {
      this.timeFirsts.timeUntilFirstTotal100K = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal1M == 0 && this.totalVaartus >= 1000000) {
      this.timeFirsts.timeUntilFirstTotal1M = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal10M == 0 && this.totalVaartus >= 10000000) {
      this.timeFirsts.timeUntilFirstTotal10M = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal100M == 0 && this.totalVaartus >= 100000000) {
      this.timeFirsts.timeUntilFirstTotal100M = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal1B == 0 && this.totalVaartus >= 1000000000) {
      this.timeFirsts.timeUntilFirstTotal1B = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal10B == 0 && this.totalVaartus >= 10000000000) {
      this.timeFirsts.timeUntilFirstTotal10B = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal100B == 0 && this.totalVaartus >= 100000000000) {
      this.timeFirsts.timeUntilFirstTotal100B = tempCurrentTime - this.startingDate;
    }
    if(this.timeFirsts.timeUntilFirstTotal1T == 0 && this.totalVaartus >= 1000000000000) {
      this.timeFirsts.timeUntilFirstTotal1T = tempCurrentTime - this.startingDate;
    }
  }, 1);

}

timeAlign(time: number) : string {
  let timeToCalculate = time;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  if(time > 1000) {
    if(time > 60000) {
      if(time > 3600000) {
        if (time > 86400000) {
          days = Math.floor(timeToCalculate / 86400000);
          timeToCalculate = timeToCalculate - (days * 86400000);
          hours = Math.floor(timeToCalculate / 3600000);
          timeToCalculate = timeToCalculate - (hours * 3600000);
          minutes = Math.floor(timeToCalculate / 60000);
          timeToCalculate = timeToCalculate - (minutes * 60000);
          seconds = Math.floor(timeToCalculate / 1000);
          timeToCalculate = timeToCalculate - (seconds * 1000);
          milliseconds = timeToCalculate;
        } else {
          hours = Math.floor(timeToCalculate / 3600000);
          timeToCalculate = timeToCalculate - (hours * 3600000);
          minutes = Math.floor(timeToCalculate / 60000);
          timeToCalculate = timeToCalculate - (minutes * 60000);
          seconds = Math.floor(timeToCalculate / 1000);
          timeToCalculate = timeToCalculate - (seconds * 1000);
          milliseconds = timeToCalculate;
        }
      } else {
        minutes = Math.floor(timeToCalculate / 60000);
        timeToCalculate = timeToCalculate - (minutes * 60000);
        seconds = Math.floor(timeToCalculate / 1000);
        timeToCalculate = timeToCalculate - (seconds * 1000);
        milliseconds = timeToCalculate;
      }
    }  else {
      seconds = Math.floor(timeToCalculate / 1000);
      timeToCalculate = timeToCalculate - (seconds * 1000);
      milliseconds = timeToCalculate;
    }
  } else {
    milliseconds = timeToCalculate;
  }
  let tempReturn = days + " days " + hours + " h " + minutes + " min " + seconds + " s " + milliseconds + " ms";
  return tempReturn;
} 

vajutatiNuppu() {
  if(this.totalVaartus < 1) {
    this.startingDate = Date.now();
  }
  this.vaartus = this.vaartus +  this.manualClickSettings.currencyPerManualClick * this.manualClickSettings.powerPerManualClick;
  this.totalPlayerClicks = this.totalPlayerClicks + 1;
  this.manualClickSettings.manuallyClicked += 1;
  this.totalVaartus += this.manualClickSettings.currencyPerManualClick * this.manualClickSettings.powerPerManualClick;
  this.ballSpawnChances();
}

lisaAutoClickereid() {
  if(this.vaartus >= this.autoClickerSetting.priceForAutoClicker) {
    this.autoClickerSetting.amountOfAutoClickers = this.autoClickerSetting.amountOfAutoClickers + 1;
    this.vaartus= this.vaartus - this.autoClickerSetting.priceForAutoClicker;
    if(this.autoClickerSetting.amountOfAutoClickers < 5) {
      this.autoClickerSetting.priceForAutoClicker = Math.round(this.autoClickerSetting.priceForAutoClicker * 1.4);
    } else {
    this.autoClickerSetting.priceForAutoClicker = Math.round(this.autoClickerSetting.priceForAutoClicker * 1.4 * (this.autoClickerSetting.amountOfAutoClickers * 0.3));
    }
    this.autoClickerRun();
    this.controlRangeValue();
  }
}

totalEarnings() {
  this.totalEarningsInterval = setInterval(() => { 
    this.totalVaartus += this.gainPerSecond();
  }, 1000);
}

gainPerSecond(): number {
  this.gainPerSec = this.autoClickerSetting.currencyPer * this.autoClickerSetting.powerPer * this.autoClickerSetting.amountOf
  + this.cryptoMiner.currencyPer * this.cryptoMiner.amountOf * this.cryptoMiner.powerPer
  + this.shop.currencyPer * this.shop.amountOf * this.shop.powerPer
  + this.factory.currencyPer * this.factory.amountOf * this.factory.powerPer
  + this.marketing.currencyPer * this.marketing.amountOf * this.marketing.powerPer
  + this.influensers.currencyPer * this.influensers.amountOf * this.influensers.powerPer
  + this.mafia.currencyPer * this.mafia.amountOf * this.mafia.powerPer
  + this.government.currencyPer * this.government.amountOf * this.government.powerPer
  + this.spaceExploration.currencyPer * this.spaceExploration.amountOf * this.spaceExploration.powerPer
  + this.aliens.currencyPer * this.aliens.amountOf * this.aliens.powerPer;
  return this.gainPerSec;
}

updateManualClickPower() {
  if(this.vaartus >= this.manualClickSettings.manualPowerClickPrice) {
    this.manualClickSettings.powerPerManualClick = this.manualClickSettings.powerPerManualClick * 2;
    this.vaartus = this.vaartus - this.manualClickSettings.manualPowerClickPrice;
    this.manualClickSettings.manualPowerClickPrice = Math.round(this.manualClickSettings.manualPowerClickPrice * 2.8);
    this.controlRangeValue();
  }
}

autoClickerRun() : number {
  this.stopAutoClick();
  this.autoClickInterVal = setInterval(() => {
    this.gainPerSec =this.autoClickerSetting.powerPerAutoClicker * this.autoClickerSetting.amountOfAutoClickers;
    this.vaartus = this.vaartus + this.gainPerSec;
    this.totalVaartus = this.totalVaartus + this.gainPerSec;
  }, 1000);
  return this.gainPerSec;
}

stopAutoClick() {
  if(this.autoClickInterVal) {
    clearInterval(this.autoClickInterVal);
  }
}

randomNumberGen(min:number, max: number): number {
  return Math.random() * (max - min) + min;
}

controlRangeValue() {
  if(this.vaartus < this.willingToPayForRobbersEquipment) {
    this.willingToPayForRobbersEquipment = 0;
  }
}

raidprep() {
  if(this.vaartus > this.willingToPayForRobbersEquipment) {
    this.vaartus -= this.willingToPayForRobbersEquipment;
    this.totalSpentOnRaids += this.willingToPayForRobbersEquipment;
    clearInterval(this.droneInterval);
  this.isRaiding = true;
  this.droneBottom = 170;
  this.droneLeft = 87;
  this.tempTimer = this.randomNumberGen(30000, 60000);
  this.raidStatus ="Putting stuff together at base";
  this.loadingCar();
  setTimeout(() => {
    this.playerRaidPower();
    this.drivingToEnemy();
  }, this.tempTimer / 2 / 2 / 2);
}
}
  drivingToEnemy() {
  setTimeout(() => {
    this.raidStatus = "Driving to enemy's base";
    this.drivingToEnemyBaseAnimation();
    this.scoutingEnemyBase();
    this.loadingCarClearInterval();
  }, this.tempTimer / 2 / 2 / 2);
}
scoutingEnemyBase() {
  setTimeout(() => {
    this.raidStatus = "Scouting out enemy's base";
    this.droneOperatorMove();
    this.preparingForAttack();
  }, this.tempTimer / 2 / 2 / 2);
}
preparingForAttack() {
  setTimeout(() => {
    this.raidStatus = "Preparing for an attack";
    this.droneoperator = false;
    this.addAttackers();
    this.enemyBaseScouting();
    this.attackingEnemyBase();
  }, this.tempTimer / 2 / 2 / 2);
}
attackingEnemyBase() {
  setTimeout(() => {
    this.raidStatus = "Attacking enemy base";
    this.attackersAttackingAnimation();
    this.enemyStronger();
    this.ourAttackStronger();
  }, this.tempTimer / 2 / 2);
}
enemyStronger() {
  if (this.enemyDefence > this.playerAttack) {
    setTimeout(() => {
      this.attackersPreparing = [];
      this.raidStatus = "Haven't heard anything from raiding group";
      this.onlySurvivor();
      this.battleLostDriveToHome();
    }, this.tempTimer / 2 / 2 / 2);
  }
}
onlySurvivor() {
    setTimeout(() => {
      this.attackersPreparing = [];
      this.raidStatus = "Boberto is the only survivor from the raid and he had to flee";
      this.ourAttack = this.playerAttack;
      this.enemysDefence = this.enemyDefence;
      this.robbingPrize = 0;
      this.failedRobbings = this.failedRobbings + 1;
      this.previousRaid = "Lost";
      this.isRaiding = false;
      this.resetAnimationValues();
    }, this.tempTimer / 2 / 2 / 2);

  }
  ourAttackStronger() {
  if(this.playerAttack >= this.enemyDefence) {
    setTimeout(() => {
      this.raidStatus = "We heard from the raiding group, that they managed to defeat the enemy";
      this.lootingWinnings();
    }, this.tempTimer / 2 / 2 / 2 / 2);
  }
}
lootingWinnings() {
    setTimeout(() => {
      this.raidStatus = "They are looting enemy's base";
      this.headingHome();
    }, this.tempTimer / 2 / 2 / 2 / 2);
  }
  headingHome() {
    setTimeout(() => {
      this.raidStatus = "They are driving home";
      this.battleWonDriveToHome();
      this.lootPrize();
    }, this.tempTimer / 2 / 2 / 2);
  }
  lootPrize() {
    setTimeout(() => {
      this.robbingPrize = this.raidPrize();
      this.raidStatus = "They made it to base and loot is worth " + this.robbingPrize;
      this.vaartus = this.vaartus + this.robbingPrize;
      this.ourAttack = this.playerAttack;
      this.enemysDefence = this.enemyDefence;
      this.previousRaid = "Won";
      this.totalWonWithRaids += this.robbingPrize;
      this.successfulRobbings = this.successfulRobbings + 1;
      this.totalVaartus += this.robbingPrize;
      this.resetAnimationValues();
    }, this.tempTimer / 2 / 2 / 2);

  }

loadingCar() {
  this.pealelaadijad = false;
this.loadingCarInterval = setInterval(() => {
  if(this.konnibbaasi <= 6.2 && this.konnibkastika >= 11.1) {
    this.konnibbaasi = 11.4;
    this.konnibkastika = 6.2;
  }else {
    this.konnibbaasi-= 0.1;
    this.konnibkastika += 0.1;
  }
}, 50);
}

loadingCarClearInterval() {
  clearInterval(this.loadingCarInterval);
  this.pealelaadijad = true;
}

drivingToEnemyBaseAnimation() {
  this.carSpeedInterval = setInterval(() => {
    if(this.carSpeed < 80){
    this.carSpeed += 0.1;
    }
    else {
      clearInterval(this.carSpeedInterval);
    }
  }, this.tempTimer / 2 / 2 / 2 / 1200);
}


droneOperatorMove() {
  this.droneoperator = true;
  this.droneOperatorInterval = setInterval(() => {
    if(this.droneOperatorLeft < 140) {
      this.droneOperatorLeft += 0.1;
    }else {
      this.droneStart();
      clearInterval(this.droneOperatorInterval);
    }
  }, 50);
}

droneStart() {
  this.droneFly = true;
  let droneHeigth = 0 ;
  this.droneInterval2 = setInterval(() => {
    if(droneHeigth <= 300) {
      this.droneBottom+= 1;
      droneHeigth +=1
    }else {
      clearInterval(this.droneInterval2);
    }
    
  }, 50);

  
  this.droneInterval = setInterval(() => {
    let tempRandomDirecton = Math.round(this.randomNumberGen(1, 6));
    if (tempRandomDirecton == 2) {
      this.droneBottom += 5;
    }
    if(tempRandomDirecton == 3) {
      this.droneLeft += 0.1;
    }
    if(tempRandomDirecton == 4) {
      this.droneBottom -= 5;
    }
    if(tempRandomDirecton == 5) {
      this.droneLeft -= 0.1;
    }
    if(this.droneBottom < 0 || !this.droneFly || this.droneLeft > 99) {
      this.droneCrash = true;
      this.droneCrashed();
      this.stopDroneInterval();
    }
  }, 30);
}

stopDroneInterval() {
  clearInterval(this.droneInterval);
}

droneCrashed() {
  this.droneFly = false;
  setTimeout(() => {
    this.droneCrash = false;
    clearInterval(this.droneInterval);
  }, 1000);
}

addAttackers() {
  this.addAttackersBoolean = true;
  let tempGap = 0;
  let tempAttackersAmount = 0;
  let tempAddUntilDone = 0;
  if(this.playerAttack > 150) {
    tempAttackersAmount = 150;
  } else {
    tempAttackersAmount = this.playerAttack;
  }
  
  // for(let i = 0; i < tempAttackersAmount; i += 1) {
  this.addAttackersInterval = setInterval(() => {
    if(tempAttackersAmount >= tempAddUntilDone) {
      let tempGap = this.randomNumberGen(0, 15);
    let newImage = {
      src: 'fighter.png',
      width: 3 * this.randomNumberGen(1, 2),
      height: 3 * this.randomNumberGen(1, 2),
      bottom: 150,
      left: this.attackerLeft + tempGap,
      zindex: this.tempZ,
      hidden: false,
    }
    
    // };
    this.tempZ += 1;
    tempAddUntilDone += 1;
    this.attackersPreparing.push(newImage);
    console.log(this.attackersPreparing);
  } else {
    this.addAttackersBoolean = false;
    clearInterval(this.addAttackersInterval);
  }
  
}, (this.tempTimer - 5000) / 2 / 2 / 2 / tempAttackersAmount);
}

attackersAttackingAnimation() {
  this.carDrivingWithAttackers();
for(let i of this.attackersPreparing) {
  this.attackingAnimationMovingInterval = setInterval(() => {
  if(i.left < 192) {
    i.left+= 0.1;
    if(i.bottom > 220 && Math.round(Math.random()) > 0) {
      i.bottom -= 10;
    }
    if(i.bottom < 150 && Math.round(Math.random()) < 1) {
      i.bottom += 10;
    }
  } else {
    i.hidden = true;
    this.tempZ = 4;
    // clearInterval(this.attackingAnimationMovingInterval);
  }
  }, this.randomNumberGen(30, 100));
}
}

carDrivingWithAttackers() {
  this.carSpeedWithAttackingEnemyInterval = setInterval(() => {
    if (this.carSpeed < 92) {
    this.carSpeed += 0.04;
    console.log("Ründab teistega");
    } 
    else {
      this.test123();
      clearInterval(this.carSpeedWithAttackingEnemyInterval);
    }
  }, 40);
}

test123() {
  clearInterval(this.carSpeedWithAttackingEnemyInterval);
}

battleLostDriveToHome() {
  this.test123();
  this.carPicture = "losercar.png";
  this.carDirection = "scaleX(-1)";
    this.carReturningHomeInterval = setInterval(() => {
      if(this.carSpeed > 0){
      this.carSpeed -= 0.1;
      console.log("sõidab kode tagasi Boberto");
      }
      else {
        clearInterval(this.carReturningHomeInterval);
      }
    }, this.tempTimer / 2 / 2 / 2 / 1200);
  }

battleWonDriveToHome() {
    this.test123();
    this.carPicture = "winnercar.png";
    this.carDirection = "scaleX(-1)";
      this.carReturningHomeInterval = setInterval(() => {
        if(this.carSpeed > 0){
        this.carSpeed -= 0.1;
        }
        else {
          clearInterval(this.carReturningHomeInterval);
        }
      }, this.tempTimer / 2 / 2 / 2 / 1200);
    }

resetAnimationValues() {
    setTimeout(() => {
        this.carSpeed = 6.3;
        this.carPicture = "auto.png";
        this.attackersPreparing = [];
        this.carDirection = "none";
        this.willingToPayForRobbersEquipment = 0;
        this.isRaiding = false;
      }, 1000);

    }



testButton() {
  this.willingToPayForRobbersEquipment = Math.round(100 * Math.random());
  this.playerRaidPower();
  this.addAttackers();
}

testButton2() {
  this.vaartus += 1000000000;
}


playerRaidPower() {
  this.playerAttack = Math.round(this.willingToPayForRobbersEquipment * Math.random());
}

enemyBaseScouting() {
  this.enemyDefence = Math.round((Math.random() * 300) * this.gainPerSec);
}

raidPrize(): number {
  this.robbingPrize =  Math.round(this.gainPerSec * (5000 * Math.random()));
  return this.robbingPrize;
}

manualPowerClickOpacity(): number {
  if(this.vaartus < this.manualClickSettings.manualPowerClickPrice) {
    this.manualPowerClickUpgradeOpacity = 30;
  } else {
    this.manualPowerClickUpgradeOpacity = 100;
  }
  return this.manualPowerClickUpgradeOpacity;
}

autoPowerClickOpacity(): number {
  if(this.vaartus < this.autoClickerSetting.priceForAutoClickPower) {
    this.autoPowerClickUpgradeOpacity = (this.vaartus /  (this.autoClickerSetting.priceForAutoClickPower)) * 100;
  } else {
    this.autoPowerClickUpgradeOpacity = 100;
  }
  return this.autoPowerClickUpgradeOpacity;
}

buyAutoClickOpacity(): number {
  if(this.vaartus < this.autoClickerSetting.priceForAutoClicker) {
    this.buyAutoClickUpgradeOpacity = 50;
  } else {
    this.buyAutoClickUpgradeOpacity = 100;
  }
  return this.buyAutoClickUpgradeOpacity;

}

addJumper() {
if(this.jumpers.length < 40) {
    let tempAddJumpersToArray = {
        src: "jumper.png",
        bottom: 7,
        left: this.jumpersLeft,
        up: true,
        btnSrc: "jumperbuttonUp.png",
        btnLeft: this.jumpersLeft - 0.15,
        btnBottom: 0
    }
    this.jumpers.push(tempAddJumpersToArray);
    this.jumpersLeft += 2;
    this.jumper();
  }
}

jumper() {
  let tempJumper = this.jumpers[this.jumperToAddToAnimation];
  this.jumperToAddToAnimation += 1;
  this.jumperAnimationInterval = setInterval(() => {
    if(tempJumper.up) {
      tempJumper.bottom += 0.5;
      if(tempJumper.bottom >= 17) {
        tempJumper.up = false;
      } 
    }
    if(!tempJumper.up) {
      tempJumper.bottom -= 0.5;
      if(tempJumper.bottom <= 7) {
        tempJumper.up = true;
      }
    }
    if(tempJumper.bottom < 8) {
      tempJumper.btnSrc = "jumperbuttonDown.png";
    } else {
      tempJumper.btnSrc = "jumperbuttonUp.png";
    }
  }, 26);
}

jumperPowerDouble() {
  if (this.vaartus >= this.autoClickerSetting.priceForAutoClickPower ) {
  this.autoClickerSetting.powerPerAutoClicker *= 2;
  this.autoClickerSetting.priceForAutoClickPower *= this.autoClickerSetting.powerPerAutoClicker;
  }
}

buyCryptoMiner() {
  if (this.vaartus >= this.cryptoMiner.pricePer) {
    this.vaartus -= this.cryptoMiner.pricePer;
    this.cryptoMiner.amountOf += 1;
    this.cryptoMiner.pricePer +=Math.round(Math.random() * this.cryptoMiner.amountOf * this.cryptoMiner.pricePer);
    this.cryptoMinerInterval = setInterval(() => {
      this.vaartus += this.cryptoMiner.currencyPer * this.cryptoMiner.powerPer;
    }, 1000);
  }
}

buyCryptoMinerPower() {
  if(this.vaartus > this.cryptoMiner.pricePer) {
    this.vaartus -= this.cryptoMiner.pricePerPower;
    this.cryptoMiner.powerPer *= 2;
    this.cryptoMiner.pricePerPower += Math.round(this.cryptoMiner.pricePerPower * Math.random() * 500);
  }
}

cryptoMinerPowerOpacity(): number {
  if(this.vaartus < this.cryptoMiner.pricePerCryptoMinerPower) {
    this.cryptoMinerPowerUpgradeOpacity = (this.vaartus /  (this.cryptoMiner.pricePerCryptoMinerPower)) * 100;
  } else {
    this.cryptoMinerPowerUpgradeOpacity = 100;
  }
  return this.cryptoMinerPowerUpgradeOpacity;
}

buyFactory() {
  if (this.vaartus >= this.factory.pricePerFactory) {
    this.vaartus -= this.factory.pricePerFactory;
    this.factory.amountOfFactories += 1;
    this.factory.pricePerFactory +=Math.round(Math.random() * this.factory.amountOfFactories * this.factory.pricePerFactory);
    this.factoryInterval = setInterval(() => {
      this.vaartus += this.factory.currencyPerFactory * this.factory.sizePerFactory;
    }, 1000);
  }
}

buyFactorySize() {
  if(this.vaartus > this.factory.pricePerFactorySize) {
    this.vaartus -= this.factory.pricePerFactorySize;
    this.factory.sizePerFactory *= 2;
    this.factory.pricePerFactorySize += Math.round(this.factory.pricePerFactorySize * Math.random() * 500);
  }
}

factorySizeOpacity(): number {
  if(this.vaartus < this.factory.pricePerFactorySize) {
    this.factorySizeUpgradeOpacity = (this.vaartus /  (this.factory.pricePerFactorySize)) * 100;
  } else {
    this.factorySizeUpgradeOpacity = 100;
  }
  return this.factorySizeUpgradeOpacity;
}


buyShop() {
  if (this.vaartus >= this.shop.pricePerShop) {
    this.vaartus -= this.shop.pricePerShop;
    this.shop.amountOfShops += 1;
    this.shop.pricePerShop +=Math.round(Math.random() * this.shop.amountOfShops * this.shop.pricePerShop);
    this.shopInterval = setInterval(() => {
      this.vaartus += this.shop.currencyPerShop * this.shop.sizePerShop;
    }, 1000);
  }
}

buyShopSize() {
  if(this.vaartus > this.shop.pricePerShopSize) {
    this.vaartus -= this.shop.pricePerShopSize;
    this.shop.sizePerShop *= 2;
    this.shop.pricePerShopSize += Math.round(this.shop.pricePerShopSize * Math.random() * 500);
  }
}

shopSizeOpacity(): number {
  if(this.vaartus < this.shop.pricePerShopSize) {
    this.shopSizeUpgradeOpacity = (this.vaartus /  (this.shop.pricePerShopSize)) * 100;
  } else {
    this.shopSizeUpgradeOpacity = 100;
  }
  return this.shopSizeUpgradeOpacity;
}

buyMarketingTeam() {
  if (this.vaartus >= this.marketing.pricePerMarketingTeam) {
    this.vaartus -= this.marketing.pricePerMarketingTeam;
    this.marketing.amountOfMarketers += 1;
    this.marketing.pricePerMarketingTeam +=Math.round(Math.random() * this.marketing.amountOfMarketers * this.marketing.pricePerMarketingTeam);
    this.marketingInterval = setInterval(() => {
      this.vaartus += this.marketing.currencyPerMarketer * this.marketing.membersOfMarketingTeam;
    }, 1000);
  }
}

addMembersToMarketingTeam() {
  if(this.vaartus > this.marketing.priceToAddNewMemeberToMarketingTeam) {
    this.vaartus -= this.marketing.priceToAddNewMemeberToMarketingTeam;
    this.marketing.membersOfMarketingTeam *= 2;
    this.marketing.priceToAddNewMemeberToMarketingTeam += Math.round(this.marketing.priceToAddNewMemeberToMarketingTeam * Math.random() * 500);
  }
}

addMembersToMarketingTeamOpacity(): number {
  if(this.vaartus < this.marketing.priceToAddNewMemeberToMarketingTeam) {
    this.addMemberToMarketingTeamUpgradeOpacity = (this.vaartus /  (this.marketing.priceToAddNewMemeberToMarketingTeam)) * 100;
  } else {
    this.addMemberToMarketingTeamUpgradeOpacity = 100;
  }
  return this.addMemberToMarketingTeamUpgradeOpacity;
}

buyIncome(who: any) {
  if(this.vaartus >= who.pricePer) {
    this.vaartus -= who.pricePer;
    who.amountOf += 1;
    who.pricePer +=Math.round(Math.random() * who.amountOf * who.pricePer);
    this.marketingInterval = setInterval(() => {
      this.vaartus += who.currencyPer * who.powerPer;
    }, 1000);
  }
}

addPower(who: any) {
  if(this.vaartus > who.pricePerPower) {
    console.log("Lisas powerit");
    this.vaartus -= who.pricePerPower;
    who.powerPer *= 2;
    who.pricePerPower += Math.round(who.pricePerPower * Math.random() * 4);
  }
}

powerUpgradeOpacity(who: any): number {
  let tempOpacity = 0;
  if(this.vaartus < who.pricePerPower) {
    tempOpacity = (this.vaartus /  (who.pricePerPower)) * 100;
  } else {
    tempOpacity = 100;
  }
  return tempOpacity;
}

private addPlayer(player: Player2): void {
  this.playerService.addPlayer(player).subscribe(
    {
      next: (response: Player2) => {
        console.log(response);

      },
      error: (error:HttpErrorResponse) => {
        alert(error.message);
      }
    }
  );
}

saveGame(save: Player2) {
  this.addPlayer(save);
}

loadGame(save: Player2) {
  console.log("peaks laadima")
  this.playerService.loadPlayer(save).subscribe(
    {
      next: (response: Player2) => {
        console.log(response);
        this.updateValues(response);
      },
      error: (error: HttpErrorResponse) => alert(error.message), 
      complete: () => console.log("complete")
    }
  );
}

toSaveBoolean() {
  this.saveOrLoad = true;
}

toLoadBoolean() {
  this.saveOrLoad = false;
}

toSaveOrToLoad(addForm:NgForm) {
  console.log("saveortoLoad")
  let save = new Player2(addForm.value.name, addForm.value.saveId , this.vaartus, this.totalPlayerClicks, this.successfulRobbings, this.failedRobbings, this.totalSpentOnRaids, this.totalWonWithRaids, this.totalVaartus, this.startingDate
  ,this.manualClickSettings, this.autoClickerSetting, this.cryptoMiner, this.factory, this.shop, this.marketing, this.influensers, this.mafia, this.government, this.spaceExploration, this.aliens, this.timeFirsts)
  if(this.saveOrLoad) {
    this.saveGame(save);
  }
  if(!this.saveOrLoad) {
    console.log(addForm.value)
    this.stopIntervalsForLoad();
    this.loadGame(save);
  }
}

updateValues(player: Player2) {
  this.vaartus = player.vaartus;
  this.totalPlayerClicks = player.totalPlayerClicks;
  this.successfulRobbings = player.successfulRobbings;
  this.failedRobbings = player.failedRobbings;
  this.totalSpentOnRaids = player.totalSpentOnRaids;
  this.totalWonWithRaids = player.totalWonWithRaids;
  this.totalVaartus = player.totalVaartus;
  this.startingDate = player.startingDate;
  this.manualClickSettings = player.manualClickSettings;
  this.autoClickerSetting = player.autoClickerSetting;
  this.cryptoMiner = player.cryptoMiner;
  this.factory = player.factory;
  this.shop = player.shop;
  this.marketing = player.marketing;
  this.influensers = player.influensers;
  this.mafia = player.mafia;
  this.government = player.government;
  this.spaceExploration = player.spaceExploration;
  this.aliens = player.aliens;
  this.timeFirsts = player.timeFirsts;
  this.aliens.id = null;
  this.government.id = null;
  this.mafia.id = null;
  this.spaceExploration.id = null;
  this.influensers.id = null;
  this.autoClickerSetting.id = null;
  this.manualClickSettings.id = null;
  this.cryptoMiner.id = null;
  this.factory.id = null;
  this.shop.id = null;
  this.marketing.id = null;
  this.timeFirsts.id = null;
  this.ngOnInit();
}

stopIntervalsForLoad() {
  let tempIntervals = [this.aliens.inteval, this.spaceExploration.interval, this.government.interval, this.mafia.interval, this.influensers.interval, this.marketing.interval, this.shop.interval, this. factory.interval, this.cryptoMiner.interval, this.autoClickerSetting.interval, this.totalEarningsInterval
  , this.jumperAnimationInterval ]
  for(let i of tempIntervals) {
    clearInterval(i);
  }
  this.jumpers = [];
  this.jumpersLeft = 10.2;
  this.jumperToAddToAnimation = 0;
}

burstBall(ball: any) {
  this.vaartus += ball.worth;
  this.totalVaartus += ball.worth;
  for(let i = 0; i <= this.balls.length; i++) {
    let tempBall = this.balls[i];
    if(tempBall == ball) {
      this.indexOfBall -= 1;
      this.balls.splice(i, 1);
    }
  }
  
}

ballSpawnChances() {
  if(!this.isBallAlreadyRolling) {
    let tempNumber = Math.round(this.randomNumberGen(0, 1000000));
    if(tempNumber <= 900000 && tempNumber >= 899000) {
      this.isBallAlreadyRolling = true;
      this.addBall("lowestBall.png", Math.round(this.totalVaartus * 0.1))
    }
    else if(tempNumber <= 850000 && tempNumber >= 849000) {
      this.isBallAlreadyRolling = true;
      this.addBall("lowerBall.png", Math.round(this.totalVaartus * 0.3))
    }
    else if(tempNumber <= 405000 && tempNumber >= 404750) {
      this.isBallAlreadyRolling = true;
      this.addBall("lowBall.png", Math.round(this.totalVaartus * 0.5))
    }
    else if(tempNumber <= 250000 && tempNumber >= 249875) {
      this.isBallAlreadyRolling = true;
      this.addBall("purpleBall.png", Math.round(this.totalVaartus))
    }
    else if(tempNumber <= 100000 && tempNumber >= 99950) {
      this.isBallAlreadyRolling = true;
      this.addBall("pinkBall.png", Math.round(this.totalVaartus * 4))
    }
    else if(tempNumber <= 50000 && tempNumber >= 49975) {
      this.isBallAlreadyRolling = true;
      this.addBall("redBall.png", Math.round(this.totalVaartus * 10))
    }
    else if(tempNumber <= 100 && tempNumber >= 95) {
      this.isBallAlreadyRolling = true;
      this.addBall("goldenBall.png", Math.round(this.totalVaartus * 100))
    }
}
}

addBall(whichBall : string, ballWorth: number) {
  let tempBall = {
    src: whichBall,
    width: 4,
    height: 4,
    top: 8,
    left: 0.5,
    radius: 1.5,
    transform: "rotate(0deg)",
    worth: ballWorth,
  }
  this.balls.push(tempBall);
  this.ballDrop(this.indexOfBall);
  this.indexOfBall += 1;
}

ballDrop(ballIndex: number) {
  let testCount = 0;
  let tempball = this.balls[ballIndex];
    this.ballsInterval = setInterval(() => {
      if(tempball.top < 61.4) {
      tempball.top += 0.2;

      this.ballCollisionWithOtherBalls(ballIndex);
      }
      else if(tempball.top > 61.2 && tempball.top <= 62.6) {
        console.log(tempball.top);
        tempball.top += 0.2;
        tempball.left += 0.2;
        tempball.transform += 1;
        this.ballCollisionWithOtherBalls(ballIndex);
      }
      else if(tempball.top >= 62.6 && tempball.left <= 32){
        console.log(tempball.top);
        tempball.left += 0.2;
        tempball.transform = 'rotate(' + testCount + 'deg)';
        testCount += 5;
        this.ballCollisionWithOtherBalls(ballIndex);
      } else {
        console.log(ballIndex + "Seisab nüüd");
        this.isBallAlreadyRolling = false;
        clearInterval(this.ballsInterval);
      }
    }, 1);
}

ballCollisionWithOtherBalls(ballIndex: number) {
  if(this.indexOfBall >= 2) {
    console.log(this.balls.length)
  let tempball = this.balls[ballIndex];
  for(let i = 0; i < this.balls.length - 1; i++) {
    let testball = this.balls[i];
    console.log(tempball.top + 3);
    if((tempball.top + 4) >= testball.top - 0.2 && tempball.left == testball.left
      || tempball.left + 4 >= testball.left && tempball.top == testball.top
    || tempball.left + 4 >= testball.left && tempball.top + 1.6 >= testball.top
    && tempball.left + 3 <= testball.left && tempball.top + 1 <= testball.top){
      this.isBallAlreadyRolling = false;
      clearInterval(this.ballsInterval);
    }
  }
  }
  }

  manualPowerBar() : number {
      let manualXpBar = (this.manualClickSettings.manuallyClicked / this.manualClickSettings.manualPowerClickPrice) * 100;
      if(manualXpBar >= 100) {
        this.manualClickSettings.powerPerManualClick*= 2;
        if(this.totalPlayerClicks >= 6200) {
          this.manualClickSettings.manualPowerClickPrice = 5000;
        } else {
        this.manualClickSettings.manualPowerClickPrice = this.manualClickSettings.manualPowerClickPrice * 2;
        }
        this.manualClickSettings.manuallyClicked = 0;
      }
    return manualXpBar;

  }

  saveToLocal() {
    let save = new Player2(this.name,this.saveId,this.vaartus,this.totalPlayerClicks,this.successfulRobbings,this.failedRobbings,this.totalSpentOnRaids,this.totalWonWithRaids,this.totalVaartus,this.startingDate,this.manualClickSettings,this.autoClickerSetting,this.cryptoMiner,this.factory,this.shop,this.marketing,this.influensers,this.mafia,this.government,this.spaceExploration,this.aliens,this.timeFirsts);
    localStorage.setItem("save", JSON.stringify(save));
}
loadFromLocal() {
    let savedData = JSON.parse(localStorage.getItem("save") || "{}");
    this.updateValues(savedData);
}

}

