// value Type
   The following are called value types because their variables will always be passed by value, i.e. they are always copied when they are used as function arguments or in assignments.

1. Boolean
2. Integer
3. Address
4. Contract
5. Fixed-size byte arrays
6. Dynamic-size byte arrays
7. Address Literals
8. Rational and Integer Literals
9. String Literals and Types
10. Unicode Literals
11. Hexadecimal Literals
12. Enums
13. Function Types
14. user-defined types

// 1. Boolean
        bool: The possible values are constants true and false.

// 2. Integer
        int: The possible values are -2**255 to 2**255-1.
        uint: The possible values are 0 to 2**256-1.
        int8, int16, int24, ..., int256: The possible values are -2**(8*n-1) to 2**(8*n-1)-1.
        uint8, uint16, uint24, ..., uint256: The possible values are 0 to 2**(8*n)-1.
        int, uint: The same as int256 and uint256, respectively.
        int128, uint128, int256, uint256: The possible values are 0 to 2**(n)-1.
        int, uint: The same as int256 and uint256, respectively.

        // Fixed point numbers
            fixed: The possible values are -2**127 to 2**127-1, with at most 10 decimal places.
            ufixed: The possible values are 0 to 2**128-1, with at most 10 decimal places.
            fixedMxN, ufixedMxN: The possible values are 0 to 2**M-1, with at most N decimal places.

// 3. Address
        address: Holds a 20 byte value (size of an Ethereum address).
        address payable: Same as address, but with the additional members transfer and send.
        address payable[]: An array of payable addresses.

// 4. Contract
        contract: Holds a 20 byte value (size of an Ethereum address).
        contract C { ... }: A contract type C with members and functions as specified in { ... }.

// 5. Fixed-size byte arrays
        bytes1, bytes2, bytes3, ..., bytes32: Holds a byte array of the given size.
        bytes: Holds a dynamic byte array, i.e. a byte array of any size.
        bytes[]: An array of dynamic byte arrays.

// 6. Dynamic-size byte arrays
        string: Holds a dynamic UTF-8 string.
        string[]: An array of dynamic UTF-8 strings.

        bytes:
        Dynamically-sized byte array, see Arrays. Not a value-type!
        string:
        Dynamically-sized UTF-8-encoded string, see Arrays. Not a value-type!

// 7. Address Literals
        address(0xdeadbeef...): The address type has an explicit conversion to address payable. This conversion can be used to convert a literal address to the payable address type.

// 8. Rational and Integer Literals
        0x123...: Hexadecimal literals. The type of the literal is the first type from int8, uint8, int16, uint16, ..., uint256 in which the literal's value fits.
        123: Decimal literals. The type of the literal is the first type from int8, uint8, int16, uint16, ..., uint256 in which the literal's value fits.
        1e10: Scientific notation. The type of the literal is the first type from fixedMxN, ufixedMxN in which the literal's value fits.
        1.5e3: Scientific notation. The type of the literal is the first type from fixedMxN, ufixedMxN in which the literal's value fits.
        1.5: Decimal literals. The type of the literal is the first type from fixedMxN, ufixedMxN in which the literal's value fits.

// 9. String Literals and Types
        "foo": UTF-8-encoded string literal. The type of the literal is string.
        "": Empty string literal. The type of the literal is string.
        "foo" "bar": Concatenation of string literals. The type of the literal is string.
        string: Dynamically-sized UTF-8-encoded string, see Arrays. Not a value-type!

// 10. Unicode Literals
        \u{...}: Unicode code point escape sequence. The type of the literal is string.
        \x..: Hexadecimal escape sequence. The type of the literal is string.
        \0: Null escape sequence. The type of the literal is string.
        \b: Backspace escape sequence. The type of the literal is string.
        \f: Form feed escape sequence. The type of the literal is string.
        \n: Newline escape sequence. The type of the literal is string.
        \r: Carriage return escape sequence. The type of the literal is string.
        \t: Horizontal tab escape sequence. The type of the literal is string.
        \v: Vertical tab escape sequence. The type of the literal is string.
        \': Single quote escape sequence. The type of the literal is string.
        \": Double quote escape sequence. The type of the literal is string.
        \\: Backslash escape sequence. The type of the literal is string.

// 11. Hexadecimal Literals
        hex"123...": Hexadecimal byte array literal. The type of the literal is bytes.
        hex"": Empty hexadecimal byte array literal. The type of the literal is bytes.
        hex"123..." hex"456...": Concatenation of hexadecimal byte array literals. The type of the literal is bytes.

// 12. Enums
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }
        enum E { A, B, C }
        enum E { A, B = 5, C }

// 13. Function Types
        function (int) pure returns (bool)
        function (int) view returns (bool)
        function (int) returns (bool)
        function (int) external returns (bool)
        function (int) public returns (bool)
        function (int) internal returns (bool)
        function (int) private returns (bool)
        function (int) external payable returns (bool)
        function (int) public payable returns (bool)
        function (int) internal payable returns (bool)
        function (int) private payable returns (bool)
        function (int) external pure returns (bool)
        function (int) public pure returns (bool)
        function (int) internal pure returns (bool)
        function (int) private pure returns (bool)
        function (int) external view returns (bool)
        function (int) public view returns (bool)
        function (int) internal view returns (bool)
        function (int) private view returns (bool)
        function (int) external pure payable returns (bool)
        function (int) public pure payable returns (bool)
        function (int) internal pure payable returns (bool)
        function (int) private pure payable returns (bool)
        function (int) external view payable returns (bool)
        function (int) public view payable returns (bool)
        function (int) internal view payable returns (bool)
        function (int) private view payable returns (bool)

// 14. user-defined types
        struct S
        struct S { uint a; bool b; }
        

 