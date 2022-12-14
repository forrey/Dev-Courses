const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let monsterHealth = chosenMaxLife;
let playerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  monsterHealthBar -= damage;
}

function strongAttackHandler() {
  dealMonsterDamage(ATTACK_VALUE * 2);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
