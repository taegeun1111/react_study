//react파일이지만 Callback 학습을 위해 임시로 사용

console.log('1');
console.log('2');
console.log('3');

//synchronous : 정해진 순서에 맞게 코드가 실행되는 것
//Asynchronous : 언제 코드가 실행될지 모르는 것

setTimeout(function () {
    console.log('2');
}, 1000);

// synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000)


//예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not-found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({name:'ellie', role : 'admin'});
            }else{
                onError(new Error('no access'))
            }
        }, 1000)
    }
}