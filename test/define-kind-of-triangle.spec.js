const defineKindOfTriangle = require('../src/define-kind-of-triangle');

describe('defineKindOfTriangle function', () => {
  it('should return "not exist" if sideC the same or bigger than sum of others', () => {
    const result = defineKindOfTriangle(4, 5, 9);

    expect(result).to.equal('not exist');
  });

  it('should return "not exist" if sideA the same or bigger than sum of others', () => {
    const result = defineKindOfTriangle(10, 5, 4);

    expect(result).to.equal('not exist');
  });

  it('should return "not exist" if sideB the same or bigger than sum of others', () => {
    const result = defineKindOfTriangle(4, 10, 4);

    expect(result).to.equal('not exist');
  });

  it('should return "acute-angled" if a square of sideC less than a square"s sum of sideA and sideB', () => {
    const result = defineKindOfTriangle(2, 3, 3);

    expect(result).to.equal('acute-angled');
  });

  it('should return "rectangular" if a square of sideC the same as a square"s sum of sideA and sideB', () => {
    const result = defineKindOfTriangle(8, 6, 10);

    expect(result).to.equal('rectangular');
  });

  it('should return "obtuse" if a square of sideC more than a square"s sum of sideA and sideB', () => {
    const result = defineKindOfTriangle(3, 4, 6);

    expect(result).to.equal('obtuse');
  });
});
