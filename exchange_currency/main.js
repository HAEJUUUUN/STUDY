// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전이 됨. 
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 됨


let currencyRatio = {
    USD:{
        KRW:1298.16,
        USD:1,
        VND:23397.00,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW:{
        KRW:1,
        USD:0.00077,
        VND:18.02,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
    VND:{
        KRW:0.055,
        USD:0.000043,
        VND:1,
        unit:"동",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
    },

};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency = 'USD';
let toCurrency = 'USD';
// 객체 불러오는 방법
// currencyRatio.USD.unit
// currencyRatio["VND"].unit

// document 라는 객체는 우리가 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공
document
    .querySelectorAll("#from-currency-list li")
    .forEach(function(item) { item.addEventListener("click", function(){
    // 1. 버튼 가져오기
    // 2. 버튼 값 바꾸기
    // 3. 선택된 currency값을 변수에 저장
    fromCurrency = this.id;
    fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
    convert("from");

});
});

document
    .querySelectorAll("#to-currency-list li")
    .forEach(function (item) { item.addEventListener("click", function(){
    // 1. 버튼 가져오기
    // 2. 버튼 값 바꾸기
    // 3. 선택된 currency값을 변수에 저장
    toCurrency = this.id;
    toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
    convert("from");
});
});

// 1. 키를 입력하는 순간
// 2. 환전이 되어서
// 3. 환전된 값이 보임

function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "from") {
      //입력갑 받기
      amount = document.getElementById("fromAmount").value;
      // 환전하기
      let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
      // 환전한값 보여주기
      document.getElementById("toAmount").value = convertedAmount;
      //환전한값 한국어로
      renderKoreanNumber(amount, convertedAmount);
    } else {
      amount = document.getElementById("toAmount").value;
      let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
      document.getElementById("fromAmount").value = convertedAmount;
      renderKoreanNumber(convertedAmount, amount);
    }
  }
  function renderKoreanNumber(from, to) {
    document.getElementById("fromNumToKorea").textContent =
      readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent =
      readNum(to) + currencyRatio[toCurrency].unit;
  }
  function readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
      let unitResult =
        (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }
    for (let i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
  }