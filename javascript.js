function checkN(n) {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    } else {
        for (var i = 3; i < n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
    let count=0;
    i=2;
    while(count<=20){
        if (checkN(i)){
            console.log(i)+'<br>';
            count++;
        }
        i++;
    }






    // if (flag == true){}
    //     document.write(n + " là số nguyên tố <br/>");
    // }
    // else{
    //     document.write(n + " không phải là số nguyên tố <br/>");
    }
