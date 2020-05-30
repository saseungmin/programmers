
const result = solution("xababcdcdababcdcd");
console.log(result);

function solution(s) {

    let array = [];
    let answer = 0;

    for(let i = 0; i<s.length; i++){
        let con = i + 1;
        let count = 1;
        let resultStr = "";
        for(let j = 0; j <s.length; j=j+con){
            let str = s.substring(j, j+con);
            let nextStr = s.substring(j+con, j+con+con);
            if(str === nextStr){
                count++;
            }else{
                if(count === 1){
                    resultStr += str;
                }else{
                    resultStr += count+str;
                }
                count = 1;
            }
        }
        array.push(resultStr);
    }
    answer = array.reduce ((previous,current) => {
        return previous > current.length ? current.length : previous;
    },s.length);

    return answer;
}

