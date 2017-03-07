function one() {
    document.calculator.ans.value+='1';   
}
function two() {
    document.calculator.ans.value+='2';  
}
function three() {
    document.calculator.ans.value+='3';   
}
function four() {
    document.calculator.ans.value+='4';  
}function five() {
    document.calculator.ans.value+='5';   
}
function six() {
    document.calculator.ans.value+='6';  
}function seven() {
    document.calculator.ans.value+='7';   
}
function eight() {
    document.calculator.ans.value+='8';  
}
function nine() {
    document.calculator.ans.value+='9';   
}
function zero() {
    document.calculator.ans.value+='0';  
}
function plus() {
    document.calculator.ans.value+='+';  
}
function minus() {
    document.calculator.ans.value+='-';  
}
function muti() {
    document.calculator.ans.value+='*';  
}
function divide() {
    document.calculator.ans.value+='/';  
}
function c() {
    document.calculator.ans.value="";  
}
function op() {
    document.calculator.ans.value+="(";  
}
function cl() {
    document.calculator.ans.value+=")";  
}
function mod() {
    document.calculator.ans.value+="%";  
}
function STI(s) {
    var calculation = [],current = '';
    for (var i=0,ch;ch=s.charAt(i);i++) {
        if ('^%*/-+()'.indexOf(ch)>-1) {
            if (current == '' && ch == '-') {
                current = '-';
             //   console.log(current);
            }
            else {
                    if (ch=='(' ) {
                        calculation.push(ch);
                    }
                   else if (ch==')' ) {
                        var x;
                        var stack='';
                        if (current!='') {
                            calculation.push(parseFloat(current),ch);
                        }
                        else{
                            calculation.push(ch);
                        }
                            while (true) {
                                x=calculation.pop();
                                console.log(x);
                                if (x=='(') {
                                    var inv=invert(STI(stack));
                                    ch=cal(InToPost(inv));
                                    calculation.push(parseFloat(ch));
                                    if (s.charAt(i+1)=='-') {
                                        calculation.push(s.charAt(i+1));
                                        i=i+1;
                                    }
                                    else{
                                       current='';
                                    }
                                    break;
                                }
                                else if(x!=')'){
                                    stack+=x;
                                }
                            }
                }
                 else{
                    if (current=='') {
                       calculation.push(ch);
                    }
                    else{
                        calculation.push(parseFloat(current),ch);
                        current = '';
                    }
                 }
            }
        }
        else {
            current += s.charAt(i);
            console.log(i+":"+current);
        }  
    }
    if (current != '') {
            calculation.push(parseFloat(current));
        }
     console.log( calculation);
    return calculation;
}
function InToPost(s) {
    var infix=s;
    var inv=invert(infix),
    postfix=[],
    ops=['-','/','*','+','^','%'];
    var get='';
    for (var i=inv.length;i>0;i--) {
        var token=inv.pop();
        for (var j=0;j<ops.length;j++) {
            if (token==ops[j]) {
                get=ops[j];
                token='';
                break;
            }
            else{
                
            }
        }
        if (token!="") {
            postfix.push(token);
            if (get!="") {
                postfix.push(get);
                get='';
            }
        }
       
    }
    console.log(postfix);
    return postfix;
}
function cal(s) {
    var stack = new Stack();
    var item=s;
    var a, b, result;
    for (var i in item ) {
        token = item[i];
        console.log( 'token: ' + token );
        if ( token == '+' ) {
            b = stack.pop();
            console.log( 'pop: ' + b );
            a = stack.pop();
            console.log( 'pop: ' + a );
            result = a+b;
            console.log( 'push: ' + result );
            stack.push( result );
        }
        else if ( token == '-' ) {
            b = stack.pop();
            console.log( 'pop: ' + b );
            a = stack.pop();
            console.log( 'pop: ' + a );
            result = a-b;
            console.log( 'push: ' + result );
            stack.push( result );
        }
        else if ( token == '*' ) {
            b = stack.pop();
            console.log( 'pop: ' + b );
            a = stack.pop();
            console.log( 'pop: ' + a );
            result = a*b;
            console.log( 'push: ' + result );
            stack.push( result );
        }
        else if ( token == '/' ) {
            b = stack.pop();
            console.log( 'pop: ' + b );
            a = stack.pop();
            console.log( 'pop: ' + a );
            result = a/b;
            console.log( 'push: ' + result );
            stack.push( result );
        }
         else if ( token == '%' ) {
            b = stack.pop();
            console.log( 'pop: ' + b );
            a = stack.pop();
            console.log( 'pop: ' + a );
            result = a%b;
            console.log( 'push: ' + result );
            stack.push( result );
        }
        else {
            stack.push( token );
            console.log( 'push: ' + token );
        }
    }
    var ans=stack.pop();
    console.log( "result = " + ans );
    return ans;
    //document.calculator.ans.value=ans;
}
function show(s) {
    document.calculator.ans.value=s;
}
function invert(s){
    var inv=[];
    for (var i=s.length;i>0;i--) {
        inv.push(s.pop());
    }
    return inv;
}

// stack class implementation implementation
var Stack = function() {

this.list = new Array(); // create an Array object (empty)

return this;

}

Stack.prototype = { // define methods for the Stack class

push: function( obj ) { this.list.push(obj); },

pop: function() { return this.list.pop(); },

clear: function() { this.list = new Array(); },

size: function() { return this.list.length; },

isEmpty: function() { return (this.list.length==0); }

};


