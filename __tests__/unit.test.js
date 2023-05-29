// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhone Number Valid Phone number', () => {
    expect(functions.isPhoneNumber("(408)-122-2345)")).toBe(true);
});

test('isPhone Number Valid Phone number 2', () => {
    expect(functions.isPhoneNumber("(408)122-2345")).toBe(true);
});

test('Not Phone numbers 1', () => {
    expect(functions.isPhoneNumber("4")).toBe(false);
});   

test('Not Phone numbers 2', () => {
    expect(functions.isPhoneNumber("408122234545")).toBe(false);
});

test('isEmail true 1', () => {
    expect(functions.isEmail("vsreedhar@ucsd.edu")).toBe(true);
});

test('isEmail true 2', () => {
    expect(functions.isEmail("barn@farm.co")).toBe(true);
});

test('isEmail false 1', () => {
    expect(functions.isEmail("jimothy")).toBe(false);
});

test('isEmail false 1', () => {
    expect(functions.isEmail("sheeeesh@what.whatthe")).toBe(false);
});

test('isStrongPassword true 1', () => {
    expect(functions.isStrongPassword("ThisIsAStrong1")).toBe(true);
});

test('isStrongPassword true 2', () => {
    expect(functions.isStrongPassword("What14Ninjas")).toBe(true);
});

test('isStrongPassword false 1', () => {
    expect(functions.isStrongPassword("1passwords")).toBe(false);
});

test('isStrongPassword false 1', () => {
    expect(functions.isStrongPassword("sad")).toBe(false);
});

test('isDate true 1', () => {
    expect(functions.isDate("12/31/2023")).toBe(true);
});

test('isDate true 2', () => {
    expect(functions.isDate("12/2/2025")).toBe(true);
});

test('isDate false 1', () => {
    expect(functions.isDate("145621")).toBe(false);
});

test('isDate false 1', () => {
    expect(functions.isDate("noooooo")).toBe(false);
});

test('isHexColor true 1', () => {
    expect(functions.isHexColor("#3c3c3c")).toBe(true);
});

test('isHexColor true 2', () => {
    expect(functions.isHexColor("#f0f")).toBe(true);
});

test('isHexColor false 1', () => {
    expect(functions.isHexColor("3c3c33c")).toBe(false);
});

test('isHexColor false 1', () => {
    expect(functions.isHexColor("f0f2")).toBe(false);
});