let running = true;
let board = Array(9).fill(' ')
function clicked(btn_id){
  if(board[btn_id] == ' ' &&  running == true){
    document.getElementById(btn_id).style.color = '#cc241d';
    document.getElementById(btn_id).value='x'
    board[btn_id]='x'
    if(IsWinner('x')){
      document.getElementById('statusline').style.color = '#cc241d';
      document.getElementById('statusline').innerHTML='You Win'
      running = false
      return
    }
    if(IfTie()){
      document.getElementById('statusline').style.color = '#928374';
      document.getElementById('statusline').innerHTML='Draw'
      running = false
      return 
    }
    computerMove()
    if(IsWinner('o')){
      document.getElementById('statusline').style.color = '#458588';
      document.getElementById('statusline').innerHTML='computer Won'
      running = false;
      return 
    }
    if(IfTie()){
      document.getElementById('statusline').style.color = '#928374';
      document.getElementById('statusline').innerHTML='Draw'
      running = false
    }
  }    
}
function computerMove(){
  if(running == true){
    let i = getBestMove()
    document.getElementById(i).style.color = '#458588';
    document.getElementById(i).value = 'o'
    board[i]='o';
  }
}

function getBestMove(){
  let emptySquares = []

  for(let i = 0 ; i < board.length ; i++){
    if(board[i] == ' '){
      emptySquares.push(i)
    }
  }
  
  //check if placing 'o' somewhere wins the game 
  for(let i = 0 ; i < board.length;i++){
    cp_board = [...board];
    cp_board[i] = 'o'
    if(IfWinner(cp_board,'o')){
      if(board[i] == ' '){
        return i
      }
    }
  }

  //check if placing 'x' somwhere wins the game
  for(let i = 0 ; i < board.length;i++){
    cp_board = [...board];
    cp_board[i] = 'x'
    if(IfWinner(cp_board,'x')){
      if(board[i] == ' ')
        return i;
    }
  }
  //play a center move , if there are no immediate loses or wins 
  
  if(board[4] == ' '){
    return 4;
  }

  //check if two edges are taken by x then play the perfect corner 

  //get all the 'x'sides 
  let xsides = []
  for(let i = 1 ; i <= 7 ; i+=2){
    if(board[i] == 'x'){
      xsides.push(i)
    }
  }
  if(xsides.length == 2){
    if(xsides[0] == 1 && xsides[1] == 7 || xsides[0] == 3 && xsides[1] == 5 ){
    }
    else{
      if(Math.max(xsides[0] , xsides[1] ) == 7){
        
        if( Math.max(xsides[0] , xsides[1] ) - Math.min(xsides[0] , xsides[1] ) == 2 ){
          if(board[8] == ' ')
            return 8
        }
        else{

          if(board[6] == ' '){
            return 6
          }

        }

      }

      if(Math.min(xsides[0] , xsides[1] ) == 1){
        if( Math.max(xsides[0] , xsides[1] ) - Math.min(xsides[0] , xsides[1] ) == 2 ){
          if(board[0] == ' ')
            return 0
        }
        else {

          if(board[2] == ' ')
            return 2
        }
      }
    }
  }

  //play a side move if there are no immediate loses or wins 
  let corners = [0,2,6,8]
  let sides = [1,3,5,7];
  //if the opponent has the taken the center than play a corner

  if(board[4] == 'x'){
    for(const corner of corners){
      if(board[corner] == ' '){
        return corner
      }
    }
  }
  for(const side of sides){
    if(board[side] == ' '){
      return side
    }
  }

   for(const corner of corners){
      if(board[corner] == ' '){
       return corner
      }
    }

  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

function playCorner(){

}
function IfTie(){
  for(let i = 0 ; i < board.length ; i++){
    if(board[i] == ' ')
      return false
  }
  return true
}
function cleanBoard(){
  for(let i = 0 ; i < board.length ; i++){
    document.getElementById(i).value =' '
    board[i] = ' '
  }
  document.getElementById('statusline').style.color = '#928374';
  document.getElementById('statusline').innerHTML='good luck'
  running = true;
}

function IsWinner(symbol){
  if (board[0] == symbol && board[1] == symbol && board[2] == symbol)
		return true

	if (board[3] == symbol && board[4] == symbol && board[5] == symbol)
		return true

	if (board[6] == symbol && board[7] == symbol && board[8] == symbol)
		return true

	if (board[0] == symbol && board[3] == symbol && board[6] == symbol)
		return true

	if (board[1] == symbol && board[4] == symbol && board[7] == symbol)
		return true

	if (board[2] == symbol && board[5] == symbol && board[8] == symbol)
		return true

	if (board[0] == symbol && board[4] == symbol && board[8] == symbol)
		return true

	if (board[2] == symbol && board[4] == symbol && board[6] == symbol)
		return true
	
  return false
}

function IfWinner(param,symbol){
  if (param[0] == symbol && param[1] == symbol && param[2] == symbol)
		return true

	if (param[3] == symbol && param[4] == symbol && param[5] == symbol)
		return true

	if (param[6] == symbol && param[7] == symbol && param[8] == symbol)
		return true

	if (param[0] == symbol && param[3] == symbol && param[6] == symbol)
		return true

	if (param[1] == symbol && param[4] == symbol && param[7] == symbol)
		return true

	if (param[2] == symbol && param[5] == symbol && param[8] == symbol)
		return true

	if (param[0] == symbol && param[4] == symbol && param[8] == symbol)
		return true

	if (param[2] == symbol && param[4] == symbol && param[6] == symbol)
		return true

  return false
}
