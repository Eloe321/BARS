"use client"
import { useState, useEffect, useRef } from "react"
import {
	BinisayaFoundCard,
	BinisayaSuggestions,
} from "@workspace/ui/components/editor/thesaurus-card"
import { searchBinisaya } from "@workspace/ui/components/utils/api.js"
import { Search } from "lucide-react"

interface ThesaurusSidebarProps {
	word: string | null
}

export default function ThesaurusSidebar({ word }: ThesaurusSidebarProps) {
	const [thesaurusEntry, setThesaurusEntry] = useState<any>(null)
	const [isGettingEntry, setIsGettingEntry] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [currentWord, setCurrentWord] = useState<string | null>(word)

	const [width, setWidth] = useState<number>(320) // Default width (e.g. 20rem)
	const isResizing = useRef(false)

	const fetchThesaurusEntry = async (wordToSearch: string) => {
		if (wordToSearch.trim()) {
			try {
				setIsGettingEntry(true)
				setThesaurusEntry(null)
				const result = await searchBinisaya(wordToSearch.trim())
				console.log("API result:", result)
				setThesaurusEntry(result)
				setCurrentWord(wordToSearch.trim())
			} catch (error) {
				console.log("Error getting entry: ", error)
			}
			setIsGettingEntry(false)
		}
	}

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		if (searchTerm.trim()) {
			fetchThesaurusEntry(searchTerm)
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch(e)
		}
	}

	useEffect(() => {
		if (word) {
			setCurrentWord(word)
			fetchThesaurusEntry(word)
		}
	}, [word])

	// Handlers for drag-to-resize
	const startResize = () => {
		isResizing.current = true
		document.body.style.cursor = "ew-resize"
	}

	const stopResize = () => {
		isResizing.current = false
		document.body.style.cursor = "default"
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (isResizing.current) {
			const newWidth = window.innerWidth - e.clientX
			setWidth(Math.max(200, Math.min(600, newWidth))) // min 200px, max 600px
		}
	}

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove)
		window.addEventListener("mouseup", stopResize)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("mouseup", stopResize)
		}
	}, [])

	return (
		<div
			className="flex-shrink-0 h-full overflow-y-auto border-l border-[#1e3a5f] bg-[#0a192f] relative"
			style={{ width }}>
			{/* Drag Handle */}
			<div
				className="absolute top-0 left-0 h-full w-2 cursor-ew-resize z-50"
				onMouseDown={startResize}></div>

			{/* Sidebar Content */}
			<div className="border-b border-[#1e3a5f] p-4">
				<h2 className="text-2xl font-bold">Thesaurus</h2>
				<p className="text-xs text-gray-400 mb-4">
					select a word then ctrl + enter to search
				</p>

				{/* Search Bar */}
				<form
					onSubmit={handleSearch}
					className="relative">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyPress={handleKeyPress}
							placeholder="Search Binisaya word..."
							className="w-full pl-10 pr-4 py-2 bg-[#334155] text-white border border-[#1e3a5f] rounded-md focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] text-sm"
						/>
					</div>
				</form>
			</div>

			<div className="p-4">
				{/* Loading Animation */}
				{isGettingEntry && (
					<div className="flex flex-col items-center justify-center py-8">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#64ffda] mb-4"></div>
						<p className="text-gray-400 text-sm">Searching...</p>
					</div>
				)}

				{/* Results */}
				{/* Results */}
				{!isGettingEntry && thesaurusEntry !== null && (
					<>
						{thesaurusEntry.status === "found" && (
							<BinisayaFoundCard
								entry={thesaurusEntry.result} // Pass the full array instead of result[0]
								morphology={thesaurusEntry.morphology}
								rhymes={thesaurusEntry.rhymes}
								isGettingEntry={isGettingEntry}
							/>
						)}
						{thesaurusEntry.status === "suggestions" && (
							<BinisayaSuggestions suggestions={thesaurusEntry.result} />
						)}
					</>
				)}
			</div>
		</div>
	)
}
