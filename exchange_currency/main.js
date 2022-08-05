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
        JPY:133.42,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00077,
        VND:18.02,
        JPY:0.10,
        unit:"원"
    },
    VND:{
        KRW:0.055,
        USD:0.000043,
        VND:1,
        JPY:0.0057,
        unit:"동"
    },
    JPY:{
        KRW:9.73,
        USD:0.0075,
        VND:175.40,
        JPY:1,
        unit:"엔"
    }
};
let fromCurrency = 'USD';
let toCurrency = 'USD';
// 객체 불러오는 방법
// currencyRatio.USD.unit
// currencyRatio["VND"].unit

// document 라는 객체는 우리가 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공
document
    .querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function(){
    // 1. 버튼 가져오기
    // 2. 버튼 값 바꾸기
    document.getElementById("from-button").textContent = this.textContent;
    
    // 3. 선택된 currency값을 변수에 저장
    fromCurrency = this.textContent;
    console.log("fromcurrency는", fromCurrency);

}));

document
    .querySelectorAll("#to-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function(){
    // 1. 버튼 가져오기
    // 2. 버튼 값 바꾸기
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택된 currency값을 변수에 저장
    toCurrency = this.textContent;
}));
