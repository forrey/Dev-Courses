const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  if (currentMonsterHealth <= 0) {
    
  }
}

function strongAttackHandler() {
  dealMonsterDamage(ATTACK_VALUE * 2);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
