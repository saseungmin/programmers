
        var result = solution(5);
        console.log(result);

        function solution(n) {
            var answer = '';
            var remain =  0;
            var to_number = n;
            while(to_number !=0){
                remain = to_number % 3;
                to_number = parseInt(to_number/3);

                if(remain == 0){
                    answer = "4"+answer; 
                    to_number--;
                }else if(remain ==1){
                    answer ="1"+answer;
                }else if(remain == 2){
                    answer ="2"+answer;
                }
            }
            return answer;
        }
