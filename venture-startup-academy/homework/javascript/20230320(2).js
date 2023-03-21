/*
  getRating 함수
  매개변수로 넘어온 값을 활용하여 입력한 평점을 출력하고 반환하는 함수
*/
function getRating(rating) {
   return rating;
}

/*
  ratingMessage 함수
  if, else-if, else문을 활용하여 매개변수로 넘어온 숫자에 따라
  다른 문자열을 반환하는 함수
    
  5일 때, return "탁월한 영화입니다!"
  4일 때, return "좋은 영화입니다."
  3일 때, return "괜찮은 영화입니다."
  2일 때, return "별로인 영화입니다."
  1일 때, return "매우 나쁜 영화입니다."
  나머지, return "올바른 평점을 입력하세요."
*/
function ratingMessage(rating) {
    if(rating == 5) {
        return '탁월한 영화입니다!';
    } else if(rating == 4) {
        return '좋은 영화입니다.';
    } else if(rating == 3) {
        return '괜찮은 영화입니다.';
    } else if(rating == 2) {
        return '별로인 영화입니다.';
    } else if(rating == 1) {
        return '매우 나쁜 영화입니다!.';
    } else {
        return '올바른 평점을 입력하세요.';
    }
};

/*
  printRatingMessage 함수
  매개변수로 넘어온 값은 ratingMessage에 전달하며 ratingMessage함수를 호출 및
  ratingMessage가 반환한 문자열을 console에 출력하는 기능을 하는 함수
*/
function printRatingMessage(rating) {
    console.log(`입력된 평점은 ${rating}입니다.`);
    console.log(ratingMessage(rating));
}

/* --------------------------------------------------- */
/* getRating 함수에 수치를 입력하고 반환된 결과를 확인 */
  var rating = getRating(4);
  printRatingMessage(rating);

  rating = getRating(0);
  printRatingMessage(rating);