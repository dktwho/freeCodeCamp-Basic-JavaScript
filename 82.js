var count = 0;

function cc(card) {
  // Only change code below this line

  if (card < 7){
    count++;
  } else if (card < 10){
    count+=0;
  } else (count--)

  if (count > 0){
    return count + " Bet";
  } else 
    return count + " Hold";
  
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
