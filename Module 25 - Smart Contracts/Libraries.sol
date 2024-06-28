// Solidity program to demonstrate 
// how to deploy library 
// without using for keyword
pragma solidity ^0.5.0;

// Defining library
library libraryExample {

         // Defining structure
         struct strings {

              // Declaring variables
               string str1 ;
               string str2 ;
               string str3 ;
      }
       
     // function to concatenate 
    // 2 strings 
      function concatenate(
       string memory _In1, string memory _In2) 
        public view returns(string memory){
           return string(
           abi.encodePacked(_In1, _In2));
           }
 }

// Defining calling contract
contract libExample{

         // Deploying the library 
         // without using "for" keyword
        libraryExample.strings data 
          = libraryExample.strings("Geeks", "For", "Geeks");

        // Function to calculate and display 
        // the result of string concatenation
          function getResult() 
          public view returns(string memory){
          string memory result 
           = libraryExample.concatenate(data.str1, data.str2);
          result = libraryExample.concatenate(result, data.str3);
          return result;
     }
}
