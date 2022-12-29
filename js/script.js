function reverseName() {
        var name = document.getElementById("name").value;
        var reversed = name.split('').reverse().join('');
        document.getElementById("result").innerHTML = reversed;
      }

function countVowels() {
        var name = document.getElementById("name").value;
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var count = 0;
        for (var i = 0; i < name.length; i++) {
          if (vowels.indexOf(name[i]) !== -1) {
            count++;
          }
        }
        document.getElementById("result").innerHTML = "Vowel count: " + count;
      }

function findThirdCharacter() {
        var name = document.getElementById("name").value;
        if (name.length >= 3) {
          var third = name[2];
          document.getElementById("result").innerHTML = "Third character: " + third;
        }
        else {
          document.getElementById("result").innerHTML = "The name must have at least three characters.";
        }
      }

function replaceSpaces() {
        var name = document.getElementById("name").value;
        var hyphenated = name.split(' ').join('-');
        document.getElementById("result").innerHTML = hyphenated;
      }

function sortCharacters() {
        var name = document.getElementById("name").value;
        var chars = name.split('');
        for (var i = 0; i < chars.length; i++) {
          for (var j = 0; j < chars.length - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
              var temp = chars[j];
              chars[j] = chars[j + 1];
              chars[j + 1] = temp;
            }
          }
        }
        var sorted = chars.join('');
        document.getElementById("result").innerHTML = sorted;
      }
 

 