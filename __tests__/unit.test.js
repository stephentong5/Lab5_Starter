// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('tests if (949) 257-5300 is a valid phone number', () => {
  expect(isPhoneNumber("(949) 257-5300")).toBe(true);
})

test('tests if 000-000-0000 is a valid phone number', () => {
  expect(isPhoneNumber("000-000-0000")).toBe(true);
})

test('tests if 9492575300 is a valid phone number', () => {
  expect(isPhoneNumber("9492575300")).toBe(false);
})

test('tests if 000-000-000 is a valid phone number', () => {
  expect(isPhoneNumber("000-000-000")).toBe(false);
})

test('tests if srtong@gmail.com is a valid email', () => {
  expect(isEmail("srtong@gmail.com")).toBe(true);
})

test('tests if sup@y.co is a valid email', () => {
  expect(isEmail("sup@y.co")).toBe(true);
})

test('tests if srtong@gmail-com is a valid email', () => {
  expect(isEmail("srtong@gmail-com")).toBe(false);
})

test('tests if @gmail.com is a valid email', () => {
  expect(isEmail("@gmail.com")).toBe(false);
})

test('tests if S123 is a strong password', () => {
  expect(isStrongPassword("S123")).toBe(true);
})

test('tests if s456_789 is a strong password', () => {
  expect(isStrongPassword("s456_789")).toBe(true);
})

test('tests if 456_789 is a strong password', () => {
  expect(isStrongPassword("456_789")).toBe(false);
})

test('tests if 456*789 is a strong password', () => {
  expect(isStrongPassword("456*789")).toBe(false);
})

test('tests if 05/07/2024 is a date', () => {
  expect(isDate("05/07/2024")).toBe(true);
})

test('tests if 5/7/2024 is a date', () => {
  expect(isDate("5/7/2024")).toBe(true);
})

test('tests if 5/7/24 is a date', () => {
  expect(isDate("5/7/24")).toBe(false);
})

test('tests if 255/7/2024 is a date', () => {
  expect(isDate("255/7/2024")).toBe(false);
})

test('tests if #FFFFFF is a hex color', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
})

test('tests if #f23 is a hex color', () => {
  expect(isHexColor("#f23")).toBe(true);
})

test('tests if #1234 is a hex color', () => {
  expect(isHexColor("#1234")).toBe(false);
})

test('tests if #FFF0FFF is a hex color', () => {
  expect(isHexColor("#FFF0FFF")).toBe(false);
})