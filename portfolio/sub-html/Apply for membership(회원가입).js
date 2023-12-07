var userId = document.querySelector('#user-id');
var pw1 = document.querySelector('#user-pwd');
var pw2 = document.querySelector('#user-pwd2');

var registerForm = document.querySelector('#register');
//가입하기</button>을 눌렀을때에 적용하고자 하는 변수다.

var cancelButton = document.querySelector('#no_register');
// 가입취소</button>을 눌렀을때에 적용하고자 하는 변수다.

registerForm.onsubmit = function(event){
    event.preventDefault();
    
    if(checkId() && checkPw() && comparePw()){
        alert("회원가입되었습니다.!!");
        window.location.href = "http://127.0.0.1:5501/01/portfolio/jewelry_html5-%ED%94%84%EB%A0%88%EC%9E%84-3(%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%B0%BD%EC%97%B0%EC%8A%B5).html";
    };
};

cancelButton.onclick = function(){
    if(confirm("회원가입을 취소하시겠습니까?")){
        window.location.href = "http://127.0.0.1:5501/01/portfolio/jewelry_html5-%ED%94%84%EB%A0%88%EC%9E%84-3(%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%B0%BD%EC%97%B0%EC%8A%B5).html";
    }
}

// function()함수를 3개 만들어야 됩니다.
// checkId() 라는 사용자 함수
// checkPw() 라는 사용자 함수
// comparePw() 라는 사용 함수를 만들어야 합니다.

function checkId(){
    if(userId.value.length < 4 || userId.value.lenght > 15 ){
        alert("아이디는 4~15자 영문숫자특수기호!@#$%^입력");
        userId.select();
        return false; 
    }
    return true;
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();
        return false;
    }
    return true;
}

function comparePw(){
    if(pw1.value !== pw2.value){
        alert("비번이 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
        return false;
    }
    return true;
}
