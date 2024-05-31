//codegolf.stackexchange.com/a/79490/69502
// https://codegolf.stackexchange.com/users/17602/neil
continued_fraction = 
f = (n,d) => n%d ? [r=(n/d)|0,...f(d,n-r*d)] : [n/d]

Phi = .5+Math.sqrt(5)/2


// String repeat object o, n times
fill = (o,n) => Array(n).fill(o).join('')
// print n bars to console
bars = n => console.debug(fill('|', Math.abs(n)), n, fill(' ', Math.pow(Math.random(),-2)|0))

/*
if (0)
    interval = 
    setInterval(() => 
        requestAnimationFrame(() => {
            now = new Date
            a = ~now
            b = ~~now
            indices = continuous_fraction(now, b)
    //         console.log(+now, b, a, b+a, indices)
            indices.slice(1).forEach(bars)
        })
    , 10)
    
if (0)
    max = 10,
    cheapo_limiter =
    setInterval(() => !--max ? 
        [interval, cheapo_limiter]
            .map(clearInterval) : 0, 1e3)
*/

;[
    [1/Phi, Phi], // 0.618 / 1.618 ~= 0.381
    [Phi, 1/Phi], // 1.618 / 0.618 ~= 2.618
    [Phi, 1], // 1.618 / 1 == 1.618
    [1, Phi] // 1 / 1.618 == 0.618
].map.apply()

continued_fraction(1/Phi, Phi)
