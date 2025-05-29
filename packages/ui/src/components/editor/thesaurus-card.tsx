import { RefreshCw } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { useEffect, useState } from "react"
import { generateLyrics } from "@workspace/ui/components/utils/api.js"

type EnglishWord = {
	word: string
	definitions: string[]
}

type BinisayaFoundResult = {
	word: string
	pos: string
	syllables: string[]
	ipa: string
	pronunciation: string
	english_words: EnglishWord[]
	synonyms: string[]
}

type RhymeInfo = {
	word: string
	pos: string
	syllables: string[]
	last_syllable: string
	last_syllable_ipa: string
	ipa: string
	rhyme_info: {
		rhyme_type: string
		sylls: [string, string]
		vowels: [string, string]
	}
}

type Morphology = {
	html?: string
	text?: string
	root_word?: string
	derivatives?: BinisayaFoundResult[]
}

function BinisayaFoundCard({
	entry,
	morphology,
	rhymes,
	isGettingEntry,
}: {
	entry: BinisayaFoundResult[] // Changed to array
	morphology: Morphology
	rhymes: RhymeInfo[]
	isGettingEntry: boolean
}) {
	const [figurative, setFigurative] = useState<string>("metaphor")
	const [generatedVerse, setGeneratedVerse] = useState<string | null>(null)
	const [isGenerating, setIsGenerating] = useState<boolean>(false)
	const [activeTab, setActiveTab] = useState<string>("definition")
	const [selectedEntryIndex, setSelectedEntryIndex] = useState<number>(0)

	useEffect(() => {
		setGeneratedVerse(null)
		setSelectedEntryIndex(0) // Reset to first entry when new word is searched
	}, [entry?.[0]?.word])

	console.log("BinisayaFoundCard entry:", entry)
	console.log("Morphology:", morphology)
	console.log("Rhymes:", rhymes)

	if (!entry || entry.length === 0) {
		return (
			<div className="relative text-white rounded-md shadow-md p-4">
				{isGettingEntry ? (
					<div className="text-center text-gray-300">Loading...</div>
				) : (
					<div className="text-center text-gray-300">No entry found</div>
				)}
			</div>
		)
	}

	const currentEntry = entry[selectedEntryIndex]

	// Add null check for currentEntry
	if (!currentEntry) {
		return (
			<div className="relative text-white rounded-md shadow-md p-4">
				<div className="text-center text-gray-300">Entry not available</div>
			</div>
		)
	}

	interface GenerateVerseFn {
		(): Promise<void>
	}

	const generateVerse: GenerateVerseFn = async () => {
		// Get English translations
		const englishMeanings =
			currentEntry.english_words && currentEntry.english_words.length > 0
				? ` which means ${currentEntry.english_words.map((ew) => ew.word).join(", ")} in English`
				: ""

		// Get synonyms if available
		const synonymsText =
			currentEntry.synonyms && currentEntry.synonyms.length > 0
				? ` Synonyms include: ${currentEntry.synonyms.join(", ")}.`
				: ""

		// Get rhyming words if available
		const rhymingText =
			rhymes && rhymes.length > 0
				? ` Words that rhyme with it include: ${rhymes.map((r) => r.word).join(", ")}.`
				: ""

		const prompt = `Generate a 2-bar or 4-bar rap verse in Cebuano about the word "${currentEntry.word}"${englishMeanings}. The verse must include the word "${currentEntry.word}," follow a consistent rhyme scheme, and adhere to a rhythmic structure of 8-16 syllables per line, syllable count must be consisten throughout the verse. Feel free to use the following ${synonymsText}${rhymingText}. Use ${figurative} as the figurative language. Ensure the language and tone align with a creative and engaging rap style.`

		try {
			setIsGenerating(true)
			const generated = await generateLyrics(prompt)
			setGeneratedVerse(generated.generated_text)
			console.log(generated.generated_text)
		} catch (error) {
			console.error("Failed to generate lyrics:", error)
		}
		setIsGenerating(false)
	}

	return (
		<div className="relative text-white rounded-md shadow-md">
			{/* Tab Navigation - moved to top */}
			<div className="flex space-x-2 mb-4 border-b border-gray-600">
				<button
					className={`px-3 py-2 text-sm ${
						activeTab === "definition"
							? "border-b-2 border-[#64ffda] text-[#64ffda]"
							: "text-gray-300 hover:text-white"
					}`}
					onClick={() => setActiveTab("definition")}>
					Definition {entry.length > 1 && `(${entry.length})`}
				</button>
				<button
					className={`px-3 py-2 text-sm ${
						activeTab === "rhymes"
							? "border-b-2 border-[#64ffda] text-[#64ffda]"
							: "text-gray-300 hover:text-white"
					}`}
					onClick={() => setActiveTab("rhymes")}>
					Rhymes ({rhymes?.length || 0})
				</button>
				{morphology && (morphology.derivatives || morphology.text) && (
					<button
						className={`px-3 py-2 text-sm ${
							activeTab === "morphology"
								? "border-b-2 border-[#64ffda] text-[#64ffda]"
								: "text-gray-300 hover:text-white"
						}`}
						onClick={() => setActiveTab("morphology")}>
						Morphology
					</button>
				)}
				<button
					className={`px-3 py-2 text-sm ${
						activeTab === "generate"
							? "border-b-2 border-[#64ffda] text-[#64ffda]"
							: "text-gray-300 hover:text-white"
					}`}
					onClick={() => setActiveTab("generate")}>
					Generate
				</button>
			</div>

			{/* Tab Content */}
			{activeTab === "definition" && (
				<div>
					{/* Word Info - moved inside definition tab */}
					<div className="mb-4 p-3 bg-[#1a2332] rounded border border-gray-600">
						<p className="mb-2">
							<strong>Pronunciation:</strong>{" "}
							{currentEntry.pronunciation || "N/A"} ({currentEntry.ipa || "N/A"}
							)
						</p>
						<p className="mb-2">
							<strong>Part of Speech:</strong> {currentEntry.pos || "N/A"}
						</p>
						<p>
							<strong>Syllables:</strong>{" "}
							{currentEntry.syllables && currentEntry.syllables.length > 0
								? currentEntry.syllables.join("-")
								: "N/A"}
						</p>
					</div>

					{/* Multiple entries selector */}
					{entry.length > 1 && (
						<div className="mb-4 border-b border-gray-600 pb-4">
							<p className="text-sm text-gray-300 mb-2">
								Multiple definitions found:
							</p>
							<div className="space-y-2">
								{entry.map((entryItem, index) => (
									<button
										key={index}
										className={`w-full text-left p-2 rounded text-sm ${
											selectedEntryIndex === index
												? "bg-[#1e3a5f] border border-[#64ffda] text-[#64ffda]"
												: "bg-[#334155] hover:bg-[#475569] text-gray-300"
										}`}
										onClick={() => setSelectedEntryIndex(index)}>
										<div className="font-semibold">
											{entryItem.word} ({entryItem.pos})
										</div>
										<div className="text-xs opacity-75">
											{entryItem.english_words.map((ew) => ew.word).join(", ")}
										</div>
									</button>
								))}
							</div>
						</div>
					)}

					<div className="mt-4">
						<strong>English Words & Definitions:</strong>
						{currentEntry.english_words &&
						currentEntry.english_words.length > 0 ? (
							currentEntry.english_words.map((englishWord, i) => (
								<div
									key={i}
									className="ml-4 mt-2 border-l-2 border-gray-600 pl-3">
									<p className="font-semibold text-[#64ffda]">
										{englishWord.word}
									</p>
									<ul className="list-disc pl-5 mb-2">
										{englishWord.definitions &&
											englishWord.definitions.map((def, j) => (
												<li
													key={j}
													className="text-sm text-gray-300">
													{def}
												</li>
											))}
									</ul>
								</div>
							))
						) : (
							<p className="text-sm text-gray-400 ml-4">
								No English translations found
							</p>
						)}
					</div>

					<div className="mt-4">
						<strong>Synonyms:</strong>
						{currentEntry.synonyms && currentEntry.synonyms.length > 0 ? (
							<ul className="grid grid-cols-2 gap-x-4 list-disc pl-5 mb-2">
								{currentEntry.synonyms.map((synonym, i) => (
									<li key={i}>
										<p className="text-sm">{synonym}</p>
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm text-gray-400 ml-4">No synonyms found</p>
						)}
					</div>
				</div>
			)}

			{activeTab === "rhymes" && (
				<div className="space-y-3">
					{rhymes && rhymes.length > 0 ? (
						rhymes.map((rhyme, i) => (
							<div
								key={i}
								className="border-l-2 border-[#64ffda] pl-3">
								<p className="font-semibold text-[#64ffda]">{rhyme.word}</p>
								<p className="text-sm text-gray-300">
									<strong>POS:</strong> {rhyme.pos} |{" "}
									<strong>Syllables:</strong>{" "}
									{rhyme.syllables && rhyme.syllables.join("-")}
								</p>
								<p className="text-sm text-gray-300">
									<strong>IPA:</strong> {rhyme.ipa}
								</p>
							</div>
						))
					) : (
						<p className="text-gray-400 text-sm">No rhymes found</p>
					)}
				</div>
			)}

			{activeTab === "morphology" && morphology && (
				<div className="space-y-4">
					{morphology.root_word && (
						<div>
							<strong>Root Word:</strong>{" "}
							<span className="text-[#64ffda]">{morphology.root_word}</span>
						</div>
					)}

					{morphology.text && (
						<div>
							<strong>Morphology:</strong>
							<p className="text-sm text-gray-300 mt-2">{morphology.text}</p>
						</div>
					)}

					{morphology.derivatives && morphology.derivatives.length > 0 ? (
						<div>
							<strong>Derivatives:</strong>
							<div className="mt-2 space-y-2">
								{morphology.derivatives.map((derivative, i) => (
									<div
										key={i}
										className="border-l-2 border-gray-600 pl-3">
										<p className="font-semibold text-[#64ffda]">
											{derivative.word}
										</p>
										{derivative.english_words &&
											derivative.english_words.length > 0 && (
												<p className="text-sm text-gray-400">
													{derivative.english_words
														.map((ew) => ew.word)
														.join(", ")}
												</p>
											)}
									</div>
								))}
							</div>
						</div>
					) : (
						<p className="text-sm text-gray-400">No derivatives found</p>
					)}
				</div>
			)}

			{activeTab === "generate" && (
				<div>
					<label className="text-xs text-gray-300">Figurative Language</label>
					<select
						className="w-full rounded-md bg-[#334155] text-sm px-2 py-1 text-white border border-blue-700 focus:outline-none"
						value={figurative}
						onChange={(e) => setFigurative(e.target.value)}>
						<option value="metaphor">Metaphor</option>
						<option value="simile">Simile</option>
						<option value="personification">Personification</option>
						<option value="hyperbole">Hyperbole</option>
						<option value="alliteration">Alliteration</option>
					</select>

					{isGenerating ? (
						<Button
							className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4] cursor-not-allowed"
							size="sm"
							disabled
							onClick={generateVerse}>
							<RefreshCw className="mr-2 h-4 w-4" />
							Waiting...
						</Button>
					) : (
						<Button
							className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]"
							size="sm"
							onClick={generateVerse}>
							<RefreshCw className="mr-2 h-4 w-4" />
							Generate {figurative}
						</Button>
					)}

					<div className="mt-4 text-sm text-gray-200 font-mono">
						{generatedVerse && (
							<>
								<div className="flex items-center justify-between mb-2">
									<span className="font-semibold">Generated Verse</span>
									<Button
										className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]"
										size="sm"
										onClick={() => {
											if (generatedVerse) {
												navigator.clipboard.writeText(generatedVerse)
											}
										}}>
										Copy Verse
									</Button>
								</div>
								{generatedVerse.split("\n").map((line, idx) => (
									<div key={idx}>{line}</div>
								))}
							</>
						)}
					</div>
				</div>
			)}

			{isGenerating ||
				(isGettingEntry && (
					<div
						className="absolute inset-0 bg-gray-900 mix-blend-multiply pointer-events-none z-10"
						style={{ opacity: 0.5 }}
					/>
				))}
		</div>
	)
}

function BinisayaSuggestions({ suggestions }: { suggestions: string[] }) {
	return (
		<div className="bg-slate-800 text-white p-4 rounded-md shadow-md">
			<p className="mb-2">Did you mean:</p>
			<ul className="list-disc pl-5">
				{suggestions.map((word, i) => (
					<li key={i}>{word}</li>
				))}
			</ul>
		</div>
	)
}

export { BinisayaFoundCard, BinisayaSuggestions }
