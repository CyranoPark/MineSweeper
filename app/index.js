const headBtn = document.querySelector('.headbtn div');
const difficultyBtn = document.querySelector('.difficulty');
const scoreBoardBtn = document.querySelector('.scoreboard');
const easyBtn = document.querySelector('.easybtn');
const normalBtn = document.querySelector('.normalbtn');
const hardBtn = document.querySelector('.hardbtn');
const backBtn = document.querySelector('.backbtn');
const gameField = document.querySelector('.game-field');
const mineField = document.querySelector('.mine-field');

mineFieldLayout(10);

function difficultyBtnOpen () {
  difficultyBtn.classList.add('none-display');
  scoreBoardBtn.classList.add('none-display');
  easyBtn.classList.remove('none-display');
  normalBtn.classList.remove('none-display');
  hardBtn.classList.remove('none-display');
  backBtn.classList.remove('none-display');
}

function headBtnInit () {
  difficultyBtn.classList.remove('none-display');
  scoreBoardBtn.classList.remove('none-display');
  easyBtn.classList.add('none-display');
  normalBtn.classList.add('none-display');
  hardBtn.classList.add('none-display');
  backBtn.classList.add('none-display');
}

function difficultyChange (difficulty) {
  gameField.classList.remove(gameField.classList.item(1));
  mineField.classList.remove(mineField.classList.item(1));
  gameField.classList.add(`${difficulty}-field`);
  mineField.classList.add(`${difficulty}-game`);
}

function initMineField (difficulty) {
  let rowLength = 0;
  if (difficulty === 'easy') {
    rowLength = 10;
  } else if (difficulty === 'normal') {
    rowLength = 15;
  } else {
    rowLength = 20;
  }
  return rowLength;
}

function mineFieldLayout (row) {
  const mineField = document.querySelector('.mine-field');

  while (mineField.firstChild) {
    mineField.removeChild(mineField.firstChild);
  }

  for (let i = 0; i< row; i++) {
    const fieldRow = document.createElement('div');
    fieldRow.classList.add('field-row');

    for (let j = 0; j < row; j++) {
      const fieldFlat = document.createElement('div');
      const fieldCol = document.createElement('div');

      fieldFlat.classList.add('field-flat');
      fieldCol.classList.add('field-col');

      fieldCol.addEventListener('mousedown', function () {
        fieldCol.classList.add('field-flat');
      });
      fieldCol.dataset.id = ((i + 1) * 100) + (j + 1);
      fieldFlat.appendChild(fieldCol);
      fieldRow.appendChild(fieldFlat);
    }
    mineField.appendChild(fieldRow);
  }
}

difficultyBtn.addEventListener('click', function () {
  difficultyBtnOpen();
});

easyBtn.addEventListener('click', function () {
  headBtnInit();
  difficultyChange('easy');
  mineFieldLayout(10);
});

normalBtn.addEventListener('click', function () {
  headBtnInit();
  difficultyChange('normal');
  mineFieldLayout(15);
});

hardBtn.addEventListener('click', function () {
  headBtnInit();
  difficultyChange('hard');
  mineFieldLayout(20);
});

backBtn.addEventListener('click', function () {
  headBtnInit();
});