/**
 * This Node program reads text from standard input, computes the frequency
 * of each letter in that text, and displays a histogram of the most
 * frequently used characters.
 * 
 * Usage:
 *   node charfreq.js < text.txt
 */

class DefaultMap extends Map {
    constructor(defaultValue) {
        super()
        this.defaultValue = defaultValue
    }

    // override the get method
    get(key) {
        if (this.has(key)) {
            return super.get(key)
        }
        return this.defaultValue
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0)
        this.totalLetters = 0
    }

    add(text) {
        text = text.replace(/\s/g, "").toUpperCase()
        for (let char of text) {
            let count = this.letterCounts.get(char)
            this.letterCounts.set(char, count + 1)
            this.totalLetters++
        }
    }

    toString() {
        let entries = [...this.letterCounts]
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1
            }
            return b[1] - a[1]
        })
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100
        }
        entries = entries.filter(entry => entry[1] >= 1)
        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        )
        return lines.join('\n')
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding('utf-8')
    let histogram = new Histogram()
    for await (let chunk of process.stdin) {
        histogram.add(chunk)
    }
    return histogram
}

histogramFromStdin().then(histogram => console.log(histogram.toString()))