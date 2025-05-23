import lyrics from '@workspace/ui/dataset/lyrics.json' with { type: "json" }

type BigramEntry = {
	previous: string
	next: string
	probability: number
}

export class BigramModel {
	private static SEPARATORS = [".", ",", "!", "?", "", "\n"]
	private static DECIMALS = 2
	private input: string[] = []
	private wordCountMap: Map<string, number[]> = new Map()
	private bigrams: BigramEntry[] = []
	private data = lyrics.map(entry => entry.verse).join("\n\n");

	constructor() {
		this.train(this.data)
	}

	public train(text: string): void {
		this.formatInput(text)
		this.countWords()
		this.generateBigrams()
	}

	public getSuggestions(word: string): string[] {
		const threshold = 0.1 // TODO: return threshold to 0.3 once dataset is improved
		return this.bigrams
			.filter(
				(bg) =>
					bg.previous === word.toLowerCase() && bg.probability >= threshold
			)
			.sort((a, b) => b.probability - a.probability)
			.map((bg) => bg.next)
	}

	private formatInput(input: string): void {
		this.input = input
			.replaceAll("^", "$")
			.replaceAll('"', "")
			.replaceAll("-", "")
			.replaceAll(";", "")
			.replaceAll(", ", ",")
			.replaceAll(". ", ".")
			.replaceAll("! ", "!")
			.replaceAll("? ", "?")
			.replaceAll(",", "^,^")
			.replaceAll(".", "^.^")
			.replaceAll("!", "^!^")
			.replaceAll("?", "^?^")
			.replaceAll("\n ", "\n")
			.replaceAll("\n", "^\n^")
			.replaceAll(" ", "^")
			.split("^")
			.map((entry) => entry.toLowerCase())
			.filter((entry) => entry !== "")
	}

	private isSeparator(character: string): boolean {
		return BigramModel.SEPARATORS.includes(character)
	}

	private countWords(): void {
		this.wordCountMap.clear()
		this.input.forEach((word, i) => {
			if (!this.wordCountMap.has(word)) {
				this.wordCountMap.set(word, [i])
			} else {
				this.wordCountMap.get(word)!.push(i)
			}
		})
	}

	private generateBigrams(): void {
		this.bigrams = []
		const existingBigramHashes = new Set<string>()
		for (let i = 0; i < this.input.length - 1; i++) {
			const prev = this.input[i]
			const next = this.input[i + 1]
			if (
				typeof prev === "string" &&
				typeof next === "string" &&
				!this.isSeparator(prev) &&
				!this.isSeparator(next)
			) {
				const hash = `${prev}|${next}`
				if (!existingBigramHashes.has(hash)) {
					const probability = this.calculateProbability(prev, next)
					this.bigrams.push({ previous: prev, next: next, probability })
					existingBigramHashes.add(hash)
				}
			}
		}
	}

	private calculateProbability(previous: string, next: string): number {
		const prevIndexes = this.wordCountMap.get(previous) || []
		const nextIndexes = this.wordCountMap.get(next) || []
		let count = 0
		prevIndexes.forEach((idx) => {
			if (nextIndexes.includes(idx + 1)) count++
		})
		return prevIndexes.length > 0
			? this.round(count / prevIndexes.length, BigramModel.DECIMALS)
			: 0
	}

	private round(number: number, decimals: number): number {
		return Math.round(number * 10 ** decimals) / 10 ** decimals
	}
}

// const model = new BigramModel()
// model.train("your training text here")
// const suggestions = model.getSuggestions("the")
