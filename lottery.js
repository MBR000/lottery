function myFunc() {
    var p = document.getElementsByTagName('span');

    var arr = [ ];
    for(let i = 1; i <= p.length; i++){
        arr.push(i);
    }
    var result = [ ];

    var ranNum = p.length;
    for (let i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (arr.length - i));
        result.push(arr[ran]);
        arr[ran] = arr[arr.length - i - 1];
    };
    
    for(let i = 0; i < ranNum; i++) {
        p[i].innerHTML = result[i];
    }
    
    myFunc= function(){};
}