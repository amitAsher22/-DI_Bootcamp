 
    let str1=['t', 'e', 'a', 't' ];
    let str2=['t', 't', 'e', 'w' ];

    function areAnagram(str1,str2) {
        let n1 = str1.length; // 4
        let n2 = str2.length; // 4

        if (n1 != n2)
            return false;
        str1.sort();
        str2.sort()
   
        for (let i = 0; i < n1; i++)
            if (str1[i] != str2[i])
        
                return false;
   
        return true;
    }
     

        if (areAnagram(str1, str2))
           console.log("The two strings are"+ " anagram of each other")
                               
        else
            console.log("The two strings are not"  + " anagram of each other");
                             
 
 
 
                             