const chai = require('chai');
const expect = chai.expect;
const task = require('./task'); 

describe('secondsToDate', () => {
    it('should return the correct date for 31536000 seconds', () => {
        const result = task.secondsToDate(31536000);
        expect(result.toISOString()).to.equal('2021-06-01T00:00:00.202Z');
    });

    it('should return the correct date for 0 seconds', () => {
        const result = task.secondsToDate(0);
        expect(result.toISOString()).to.equal('2020-06-01T00:00:00.202Z');
    });

    it('should return the correct date for 86400 seconds', () => {
        const result = task.secondsToDate(86400);
        expect(result.toISOString()).to.equal('2020-06-02T00:00:00.202Z');
    });
});

describe('toBase2Converter', function () {
    it('should convert decimal numbers to binary strings', function () {
        expect(task.toBase2Converter(5)).to.equal('101');
        expect(task.toBase2Converter(10)).to.equal('1010');
        expect(task.toBase2Converter(0)).to.equal('0');
        expect(task.toBase2Converter(15)).to.equal('1111');
        expect(task.toBase2Converter(255)).to.equal('11111111');
    });
});

describe('substringOccurrencesCounter', function () {
    it('should count occurrences of a substring in a text', function () {
        expect(task.substringOccurrencesCounter('a', 'test it')).to.equal(0);
        expect(task.substringOccurrencesCounter('t', 'test it')).to.equal(2);
        expect(task.substringOccurrencesCounter('T', 'test it')).to.equal(2);
    });
});

describe('repeatingLitters', function () {
    it('should repeat each character once', function () {
        expect(task.repeatingLitters('Hello')).to.equal('HHeelloo');
        expect(task.repeatingLitters('Hello world')).to.equal('HHeello  wworrldd');
    });
});

describe('repeatingLitters', function () {
    it('should repeat each character once', function () {
        const f1 = task.redundant("apple");
        expect(f1()).to.equal('apple');

        const f2 = task.redundant("pear");
        expect(f2()).to.equal('pear');

        const f3 = task.redundant("");
        expect(f3()).to.equal('');
    });
});

describe('towerHanoi', function () {
    it('should calculate the number of moves for Tower of Hanoi', function () {
        expect(task.towerHanoi(4)).to.equal(15);

        expect(task.towerHanoi(3)).to.equal(8);
    });
});

describe('matrixMultiplication', function () {
    it('should multiply two matrices', function () {
        const matrix1 = [
            [1, 2],
            [3, 4]
        ];

        const matrix2 = [
            [5, 6],
            [7, 8]
        ];

        const result = task.matrixMultiplication(matrix1, matrix2);
        const expected = [
            [19, 22],
            [43, 50]
        ];

        expect(result).to.deep.equal(expected);
    });
});

describe('gather', function () {
    it('should gather and order strings correctly', function () {
        expect(task.gather("a")("b")("c").order(0)(1)(2).get()).to.equal('abc');
        expect(task.gather("a")("b")("c").order(2)(1)(0).get()).to.equal('cba');
        expect(task.gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()).to.equal('hello');
    });
});