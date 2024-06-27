# Math Programming Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024-06-27

- [Math Programming Cheatsheet](#math-programming-cheatsheet)
  - [About](#about)
  - [Arithmetic Sequences](#arithmetic-sequences)
  - [Geometric Sequences](#geometric-sequences)
  - [Summation of Arithmetic Sequence](#summation-of-arithmetic-sequence)
  - [Summation of Geometric Sequence](#summation-of-geometric-sequence)
  - [Factorial Calculation](#factorial-calculation)
  - [Fibonacci Sequence](#fibonacci-sequence)
  - [Greatest Common Divisor (GCD)](#greatest-common-divisor-gcd)
    - [Euclidean Algorithm](#euclidean-algorithm)
  - [Least Common Multiple (LCM)](#least-common-multiple-lcm)
  - [Prime Numbers](#prime-numbers)
    - [Sieve of Eratosthenes](#sieve-of-eratosthenes)
  - [Modular Arithmetic](#modular-arithmetic)
  - [Exponentiation by Squaring](#exponentiation-by-squaring)
  - [Trigonometric Functions](#trigonometric-functions)
    - [Sine \& Cosine](#sine--cosine)
  - [Logarithms](#logarithms)

<hr>

## About

This is a reference document for some commonly used math concepts in programming, along with simple C++ examples for each.

<br />

## Arithmetic Sequences

An arithmetic sequence is a sequence of numbers in which the difference between consecutive terms is constant.
General Formula

a<sub>n</sub> = a<sub>1</sub> + (n−1) ⋅ d

-   a<sub>n</sub>​ = nth term
-   a<sub>1</sub>​ = first term
-   d = common difference

```cpp
#include <iostream>
using namespace std;

int main() {
    int a1 = 2; // first term
    int d = 3;  // common difference
    int n = 5;  // term to find

    int an = a1 + (n - 1) * d;
    cout << "The " << n << "th term of the arithmetic sequence is: " << an << endl;

    return 0;
}
```

<br />

## Geometric Sequences

A geometric sequence is a sequence of numbers where each term after the first is found by multiplying the previous term by a fixed, non-zero number called the common ratio.

a<sub>n</sub> = a<sub>1</sub> ⋅ r<sup>(n−1)</sup>

-   a<sub>n</sub>​ = nth term
-   a<sub>1</sub>​ = first term
-   r = common ratio

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a1 = 3; // first term
    double r = 2;  // common ratio
    int n = 4;     // term to find

    double an = a1 * pow(r, n - 1);
    cout << "The " << n << "th term of the geometric sequence is: " << an << endl;

    return 0;
}
```

<br />

## Summation of Arithmetic Sequence

S<sub>n</sub> = (n/2)⋅[2a<sub>1</sub> + (n−1) ⋅ d]

-   S<sub>n</sub>​ = sum of the first `n` terms
-   n = number of terms
-   a<sub>1</sub> = first term
-   d = common difference

```cpp
#include <iostream>
using namespace std;

int main() {
    int a1 = 1; // first term
    int d = 1;  // common difference
    int n = 10; // number of terms

    int Sn = (n / 2.0) * (2 * a1 + (n - 1) * d);
    cout << "The sum of the first " << n << " terms of the arithmetic sequence is: " << Sn << endl;

    return 0;
}
```

<br>/

## Summation of Geometric Sequence

S<sub>n</sub> = a<sub>1</sub> ⋅ [(1 - r<sup>n</sup>) / (1 - r)]​

-   S<sub>n</sub>​ = sum of the first `n` terms
-   a<sub>1</sub> = first term
-   r = common ratio
-   n = number of terms

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a1 = 2; // first term
    double r = 0.5; // common ratio
    int n = 5; // number of terms

    double Sn = a1 * (1 - pow(r, n)) / (1 - r);
    cout << "The sum of the first " << n << " terms of the geometric sequence is: " << Sn << endl;

    return 0;
}
```

<br />

## Factorial Calculation

The factorial of a non-negative integer n is the product of all positive integers less than or equal to `n`.

n! = n⋅(n−1)⋅(n−2)⋯3⋅2⋅1

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    int factorial = 1;

    for(int i = 1; i <= n; ++i) {
        factorial *= i;
    }

    cout << "Factorial of " << n << " = " << factorial << endl;

    return 0;
}
```

<br />

## Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

F(n) = F(n−1) + F(n−2)

-   F(0) = 0
-   F(1) = 1

```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n = 10; // nth Fibonacci number to find
    cout << "The " << n << "th Fibonacci number is: " << fibonacci(n) << endl;

    return 0;
}
```

<br />

## Greatest Common Divisor (GCD)

The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder.

### Euclidean Algorithm

```cpp
#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0)
    return a;
    return gcd(b, a % b);
}

int main() {
    int a = 56, b = 98;
    cout << "GCD is: " << gcd(a, b) << endl;
    return 0;
}
```

<br />

## Least Common Multiple (LCM)

The LCM of two integers is the smallest positive integer that is divisible by both numbers.

```cpp
#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0)
    return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int a = 15, b = 20;
    cout << "LCM is: " << lcm(a, b) << endl;
    return 0;
}
```

<br />

## Prime Numbers

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

### Sieve of Eratosthenes

A popular algorithm to find all primes less than or equal to a given integer `n`.

```cpp
#include <iostream>
#include <vector>
using namespace std;

void sieveOfEratosthenes(int n) {
    vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;

    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p)
            prime[i] = false;
        }
    }

    for (int p = 2; p <= n; p++) {
        if (prime[p])
        cout << p << " ";
    }

    cout << endl;
}

int main() {
    int n = 50;
    cout << "Prime numbers up to " << n << " are: ";
    sieveOfEratosthenes(n);
    return 0;
}
```

<br />

## Modular Arithmetic

Modular arithmetic involves numbers wrapping around upon reaching a certain value, the modulus.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 25, n = 7;
    int result = (a + b) % n;
    cout << "(" << a << " + " << b << ") % " << n << " = " << result << endl;
    return 0;
}
```

<br />

## Exponentiation by Squaring

Exponentiation by squaring is a fast method for exponentiation that reduces the number of multiplications.

```cpp
#include <iostream>
using namespace std;

long long power(long long x, int n) {
    if (n == 0)
    return 1;
    long long half = power(x, n / 2);
    if (n % 2 == 0)
    return half * half;
    else
    return half * half * x;
}

int main() {
    long long x = 2;
    int n = 10;
    cout << x << " raised to the power " << n << " is: " << power(x, n) << endl;
    return 0;
}
```

<br />

## Trigonometric Functions

### Sine & Cosine

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double angle = 45; // in degrees
    double radians = angle * M_PI / 180.0; // convert to radians
    cout << "Sine of " << angle << " degrees is: " << sin(radians) << endl;
    cout << "Cosine of " << angle << " degrees is: " << cos(radians) << endl;
    return 0;
}
```

<br />

## Logarithms

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double number = 10.0;
    cout << "Natural logarithm of " << number << " is: " << log(number) << endl;
    cout << "Logarithm base 10 of " << number << " is: " << log10(number) << endl;
    return 0;
}
```
