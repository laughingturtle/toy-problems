/**
 * Leetcode 824
 *
 * @param {string} S
 * @return {string}

A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.

If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".

Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.


Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


Notes:

S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.

 */



var toGoatLatin = function(S) {
   var arr = S.split(' ');
    var goatized = '';

    for(var i = 0; i < arr.length; i++){

        var x = arr[i].charAt(0);
        if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U'){
             var str = arr[i];
             arr.splice(i,1, str.concat('ma'));
        } else {
             var str = arr[i].substring(1);
             var ltr = arr[i].substring(0,1);
             str = str.concat(ltr);
             arr.splice(i,1, str.concat('ma'));
        }

        var post = arr[i];
        for(var j = 0; j <= i; j++){
            post = post.concat('a');
        }

        arr.splice(i,1, post);
        goatized += arr[i] + ' '
    }

    return goatized.trim();
};