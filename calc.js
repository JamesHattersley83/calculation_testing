const calc = (x1, y1, x2, y2) => {
  const A = [x1, y1];
  const B = [x2, y2];

  if (
    [x1, y1, x2, y2].includes(undefined) ||
    [x1, y1, x2, y2].some((v) => v < 0)
  ) {
    return null;
  }
  function slope(a, b) {
    if (a[0] == b[0]) {
      return null;
    }

    return (b[1] - a[1]) / (b[0] - a[0]);
  }

  function intercept(point, slope) {
    if (slope === null) {
      // vertical line
      return point[0];
    }

    return point[1] - slope * point[0];
  }

  const m = slope(A, B);
  const b = intercept(A, m);

  let coordinates = [];

  if (A[0] == B[0] && A[1] > B[1]) {
    for (let y = A[0]; y > 0; y--) {
      let x = m * y + b;
      coordinates.push({ x: x, y: y });
    }
  } else if (A[0] == B[0] && A[1] < B[1]) {
    for (let y = A[1]; y <= B[0]; y++) {
      let x = m * y + b;
      coordinates.push({ x: x, y: y });
    }
  } else if (A[0] > B[0]) {
    for (let x = A[0]; x > 0; x--) {
      let y = m * x + b;
      coordinates.push({ x: x, y: y });
    }
  } else if (A[0] < B[0]) {
    for (let x = A[0]; x <= B[0]; x++) {
      let y = m * x + b;
      coordinates.push({ x: x, y: y });
    }
  }

  // console.log('coordinates', coordinates);
  return coordinates;
};

module.exports = calc;
