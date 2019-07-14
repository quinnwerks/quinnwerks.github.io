
/*
    these functions generate the animation on start
*/
function isWs(c){
    var is_whitespace = /\s/;
    return is_whitespace.test(c);
}

function jumbleArray(bin_arr, final_arr, final_threshold){
    var ignore = false;
    for(var i = 0; i < bin_arr.length; i++)
    {               
        if(bin_arr[i] == '<'){
            ignore = true;
        }
        else if(bin_arr[i] == '>'){
            ignore = false;
        }
        else if(!ignore && !isWs(bin_arr[i])){
            var final_rand = Math.random();
            var bin_rand = Math.round(Math.random());
            if(final_rand > final_threshold)
            {
                if(bin_rand == 0){
                    bin_arr[i] = '0';
                }
                else{
                    bin_arr[i] = '1';
                }
            }
            else
            {
                bin_arr[i] = final_arr[i];
            }
        }
    }

    return bin_arr;
}

function binaryFlipAnimation(id)
{
    var elem = document.getElementById(id);
    var final_str = elem.innerHTML;
    var final_arr = final_str.split("");
    var binary_str = final_str;
    var binary_arr = binary_str.split("");
    
    var num_times = 0;
    var final_threshold = 0;
    var animate = setInterval(animateBinary, 150);
    function animateBinary(){
        if(num_times == 20){
            elem.innerHTML = final_str;
        }
        else{
            num_times = num_times + 1;
            final_threshold = final_threshold + 0.065;
            elem.innerHTML = jumbleArray(
                                binary_arr,
                                final_arr,
                                final_threshold).join("");                               
        }
    }
   
}
