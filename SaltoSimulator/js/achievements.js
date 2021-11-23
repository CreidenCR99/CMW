var TotalAchievements = 0;

var varAchievement1 = 0;

function Achievement1() {
  if (Saltos >= 1 && varAchievement1 == 0) {
    TotalAchievements += 1;
    varAchievement1 =+ 1;
  }
}

var varAchievement2 = 0;

function Achievement2() {
  if (TorchicInv >= 1 && varAchievement2 == 0) {
    TotalAchievements += 1;
    varAchievement2 =+ 1;
  }
}

var varAchievement3 = 0;

function Achievement3() {
  if (CramorantInv >= 1 && varAchievement3 == 0) {
    TotalAchievements += 1;
    varAchievement3 =+ 1;
  }
}

var varAchievement4 = 0;

function Achievement4() {
  if (CramorantInv >= 1 && varAchievement4 == 0) {
    TotalAchievements += 1;
    varAchievement4 =+ 1;
  }
}

var varAchievement5 = 0;

function Achievement5() {
  if(KabutopsInv >= 1 && varAchievement5 == 0) {
      TotalAchievements += 1;
      varAchievement5 =+ 1;
  }
}

var varAchievement6 = 0;

function Achievement6() {
  if (Saltos >= 100 && varAchievement6 == 0) {
    TotalAchievements += 1;
    varAchievement6 =+ 1;
  }
}

function Achievements() {
  Achievement1();
  Achievement2();
  Achievement3();
  Achievement4();
  Achievement5();
  Achievement6();
}