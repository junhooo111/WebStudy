function signupValidate() {
// signup.html 에서 id 값을 받아와 js 에서 사용 할 변수에 새로 저장을 해준다.
	var userId = document.getElementById("userId").value;
  	var passWord = document.getElementById("passWord").value;
    var repassWord = document.getElementById("repassWord").value;
 

 // userId 검사 - 아이디는 영어 대소문자와 숫자만 사용가능하도록 한다. for문을 이용해 처음부터 끝까지 검사를 한다.
    for (i = 0; i < userId.length; i++) {
        ch = userId.charAt(i);
        // 0~9 사이의 숫자, 영어 대소문자가 없을 시 if문에 들어가게 한다.
        if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')&&!(ch >= 'A' && ch <= 'Z')) {
            alert("아이디는 영어 대소문자, 숫자만 입력가능합니다! ")
            document.getElementById("userId").value='';
            document.getElementById("passWord").value='';
            document.getElementById("repassWord").value='';
            document.getElementById("userId").focus();
            return false;
        }
    }
// userId 검사 - 아이디의 시작은 숫자가 될 수 없다. userId의 처음 시작이 숫자라면 if문에 들어가게 한다.
    if (userId[0] == 0 || userId[0] == 1 || userId[0] == 2 || userId[0] == 3 || userId[0] == 4 || userId[0] == 5 || userId[0] == 6 || userId[0] == 7 || userId[0] == 8 || userId[0] == 9){
    	alert('숫자로 아이디를 시작할 수 없습니다! ');
    	document.getElementById("userId").value='';
    	document.getElementById("passWord").value='';
        document.getElementById("repassWord").value='';
        document.getElementById("userId").focus();
        return false;
    }
// passWord의 길이는 6자리 이상이 되게 한다. 6자리 미만일 경우 if문에 들어가게 한다.
    if (passWord.length<6){
    	alert('비밀번호 길이는 6자리가 넘어가게 만드세요! :) ');
    	document.getElementById("passWord").value='';
        document.getElementById("repassWord").value='';
        document.getElementById("passWord").focus();
        return false;
    }
// passWord와 repassWord가 서로 일치한지 확인한다. 일치하지 않을 경우 if문에 들어가게 한다.
    if (passWord != repassWord){
        alert('비밀번호와 재확인 비밀번호가 일치하지않습니다. 다시 입력하세요! ');
        document.getElementById("passWord").value='';
        document.getElementById("repassWord").value='';
        document.getElementById("passWord").focus();
        return false;
    }
// 모든 조건들 통과시 회원가입 완료 라는 alert가 발생하게 된다.
    alert('회원가입 완료!');
}