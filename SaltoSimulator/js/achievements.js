var EarnedAchievements = 0;
var TotalAchievements = 16;

// Click

var ClickAchievement1 = 0;
var ClickAchievement2 = 0;
var ClickAchievement3 = 0;
var ClickAchievement4 = 0;
var ClickAchievement5 = 0;

function ClickAchievements() {
	if (Saltos >= 1) {
		if (ClickAchievement1 == 0) {
			EarnedAchievements += 1;
			ClickAchievement1 = +1;
		}
	}

	if (Saltos >= 100) {
		if (ClickAchievement2 == 0) {
			EarnedAchievements += 1;
			ClickAchievement2 = +1;
		}
	}

	if (Saltos >= 1000) {
		if (ClickAchievement3 == 0) {
			EarnedAchievements += 1;
			ClickAchievement3 = +1;
		}
	}

	if (Saltos >= 10000) {
		if (ClickAchievement4 == 0) {
			EarnedAchievements += 1;
			ClickAchievement4 = +1;
		}
	}

	if (Saltos >= 25000) {
		if (ClickAchievement5 == 0) {
			EarnedAchievements += 1;
			ClickAchievement5 = +1;
		}
	}
}

// Inventory

var InventoryAchievement1 = 0;
var InventoryAchievement2 = 0;
var InventoryAchievement3 = 0;
var InventoryAchievement4 = 0;
var InventoryAchievement5 = 0;
var InventoryAchievement6 = 0;
var InventoryAchievement7 = 0;
var InventoryAchievement8 = 0;

function InventoryAchievements() {
	if (TorchicInv >= 1) {
		if (InventoryAchievement1 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement1 = +1;
		}
	}

	if (CramorantInv >= 1) {
		if (InventoryAchievement2 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement2 = +1;
		}
	}

	if (KabutopsInv >= 1) {
		if (InventoryAchievement3 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement3 = +1;
		}
	}

	if (CrobatInv >= 1) {
		if (InventoryAchievement4 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement4 = +1;
		}
	}

	if (TorchicInv >= 10) {
		if (InventoryAchievement5 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement5 = +1;
		}
	}

	if (CramorantInv >= 10) {
		if (InventoryAchievement6 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement6 = +1;
		}
	}

	if (KabutopsInv >= 10) {
		if (InventoryAchievement7 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement7 = +1;
		}
	}

	if (CrobatInv >= 10) {
		if (InventoryAchievement8 == 0) {
			EarnedAchievements += 1;
			InventoryAchievement8 = +1;
		}
	}
}

// SPS

var SPSAchievement1 = 0;
var SPSAchievement2 = 0;
var SPSAchievement3 = 0;

function SPSAchievements() {
	if (SPS >= 1) {
		if (SPSAchievement1 == 0) {
			EarnedAchievements += 1;
			SPSAchievement1 = +1;
		}
	}

	if (SPS >= 10) {
		if (SPSAchievement2 == 0) {
			EarnedAchievements += 1;
			SPSAchievement2 = +1;
		}
	}

	if (SPS >= 100) {
		if (SPSAchievement3 == 0) {
			EarnedAchievements += 1;
			SPSAchievement3 = +1;
		}
	}
}

function Achievements() {
	ClickAchievements();
	InventoryAchievements();
	SPSAchievements();
}

Loaded += 1;