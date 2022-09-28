function steps(n, i = 1) {
    if (i > n) return;
    console.log('#'.repeat(i) + ' '.repeat(n - i));
    steps(n, i + 1);
  }

  steps(4)