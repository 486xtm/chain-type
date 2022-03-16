// SPDX-License-Identifier: MIT
pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

contract DataTypesInput {
  function input_uint8(uint8 input1) public pure returns (uint8) {
    return input1;
  }
  function input_uint256(uint256 input1) public pure returns (uint256) {
    return input1;
  }
  function input_int8(int8 input1) public pure returns (int8) {
    return input1;
  }
  function input_int256(int256 input1) public pure returns (int256) {
    return input1;
  }
  function input_bool(bool input1) public pure returns (bool) {
    return input1;
  }
  function input_address(address input1) public pure returns (address) {
    return input1;
  }
  function input_bytes1(bytes1 input1) public pure returns (bytes1) {
    return input1;
  }
  function input_bytes(bytes memory input1) public pure returns (bytes memory) {
    return input1;
  }
  function input_string(string memory input1) public pure returns (string memory) {
    return input1;
  }
  function input_stat_array(uint8[3] memory input1) public pure returns (uint8[3] memory) {
    return input1;
  }
  function input_fixedarray_array_fixedarray(uint8[3][][4] memory input1) public pure returns (uint8[3][][4] memory) {
    return input1;
  }
  function input_tuple(uint256 input1, uint256 input2) public pure returns (uint256, uint256) {
    return (input1, input2);
  }
  // input_named test case doesnt make sense in this context
  struct Struct1 {
      uint256 uint256_0;
      uint256 uint256_1;
  }
  function input_struct(Struct1 memory input1) public pure returns (Struct1 memory) {
    return input1;
  }
  function input_struct_array(Struct1[] memory input1) public pure returns (Struct1[] memory) {
    return input1;
  }
  function input_struct_array_array(Struct1[][] memory input1) public pure returns (Struct1[][] memory) {
    return input1;
  }
  function input_struct_fixedarray_array(Struct1[2][] memory input1) public pure returns (Struct1[2][] memory) {
    return input1;
  }
  function input_struct_array_fixedarray(Struct1[][2] memory input1) public pure returns (Struct1[][2] memory) {
    return input1;
  }
  function input_struct_fixedarray_fixedarray(Struct1[2][3] memory input1) public pure returns (Struct1[2][3] memory) {
    return input1;
  }
  function input_struct_array_array_array(Struct1[][][] memory input1) public pure returns (Struct1[][][] memory) {
    return input1;
  }
  function input_struct_fixedarray_array_fixedarray(Struct1[2][][3] memory input1) public pure returns (Struct1[2][][3] memory) {
    return input1;
  }
  function input_struct_fixedarray_array_fixedarray_array_fixedarray(Struct1[2][][3][][4] memory input1) public pure returns (Struct1[2][][3][][4] memory) {
    return input1;
  }
  enum Enum1 { On, Off, Undefined }
  function input_enum(Enum1 input1) public pure returns (Enum1) {
    return input1;
  }
  struct Struct2 {
    uint input1;
    Struct1 input2;
  }
  function input_struct2(Struct2 memory input1) public pure returns (Struct2 memory) {
    return input1;
  }
  function input_struct2_array(Struct2[] memory input1) public pure returns (Struct2[] memory) {
    return input1;
  }
  struct Struct3 {
    uint[] input1;
  }
  function input_struct3_array(Struct3[] memory input1) public pure returns (Struct3[] memory) {
    return input1;
  }
  function input_uint_array(uint[] memory input1) public pure returns (uint[] memory) {
    return input1;
  }
  function input_struct2_tuple(Struct2[3] memory input) public pure returns (Struct2[3] memory) {
    return input;
  }
  function input_multiple_structs_with_same_name(StructsLib1.Info memory info1) public pure returns (StructsLib2.Info memory info2) {
    info2.a = address(info1.a);
    info2.b = address(info1.b);
  }
}

library StructsLib1 {
  struct Info {
    uint160 a;
    uint160 b;
  }
}

library StructsLib2 {
  struct Info {
    address a;
    address b;
  }
}