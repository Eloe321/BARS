"use client"

import type React from "react"

import {
	Play,
	Pause,
	SkipBack,
	SkipForward,
	Upload,
	Loader2,
	AlertCircle,
	RefreshCw,
	CheckCircle,
} from "lucide-react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@workspace/ui/components/select"
import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"
import { analyzeLyrics } from "@workspace/ui/components/utils/api.js"

import { Progress } from "@workspace/ui/components/progress"
import { toast } from "sonner"
import { useState, useEffect, useRef, use } from "react"
import { useAuth } from "@workspace/ui/components/context/authContext"
import { formatTime } from "./utils/utils.js"
import { mediaApi, type BlobMP3File } from "./mediaApi/mediaAccess.js"
import { urlToFile } from "../utils/helper.js"
interface MediaControlsProps {
	isPlaying: boolean
	togglePlay: () => void
	currentTime: number
	duration: number
	progress: number
	handleSliderChange: (value: number[]) => void
	onAnalyzedVersesUpdate: (analyzedVerses: any) => void
	onSetIsAligning: (isAligning: boolean) => void
	onTrackChange: (
		trackUrl: string,
		trackName: string,
		fullTrackName: string
	) => void
	onResetPlayer: () => void
	audioLoading: boolean
	currentTrackName?: string | null
	currentFullTrackName?: string | null
	lyricsText: string
	onSetKaraoke: (isKaraoke: boolean) => void
}
export default function MediaControls({
	isPlaying,
	togglePlay,
	currentTime,
	duration,
	progress,
	handleSliderChange,
	onAnalyzedVersesUpdate,
	onSetIsAligning,
	onTrackChange,
	onResetPlayer,
	audioLoading,
	currentTrackName,
	currentFullTrackName,
	lyricsText,
	onSetKaraoke,
}: MediaControlsProps) {
	const [fullTrackName, setFullTrackName] = useState<string | null>(null) // Your new state
	const [uploadProgress, setUploadProgress] = useState(0)
	const [uploading, setUploading] = useState(false)
	const [trackName, setTrackName] = useState("Upload a mp3 file!")
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [premadeTracks, setPremadeTracks] = useState<BlobMP3File[]>([])
	const [uploadedTracks, setUploadedTracks] = useState<BlobMP3File[]>([])
	const [loadingFiles, setLoadingFiles] = useState(false)
	const [uploadSuccess, setUploadSuccess] = useState(false)
	const [loadingTrack, setLoadingTrack] = useState(false)
	const [selectedPremadeValue, setSelectedPremadeValue] = useState<string>("")
	const [selectedUploadedValue, setSelectedUploadedValue] = useState<string>("")
	const { token, user } = useAuth()
	const trackLoadingRef = useRef<AbortController | null>(null)
	const currentTrackRef = useRef<string>("")
	const [toggleKaraoke, setToggleKaraoke] = useState<boolean>(false)

	const [analyzedLyrics, setAnalyzedLyrics] = useState<any>(null)
	const [analyzedVerses, setAnalyzedVerses] = useState<any>(null)
	const [tempo, setTempo] = useState<number>(0.0)
	const [rapStyle, setRapStyle] = useState<{
		name: string
		description: string
		time_style: string
	}>()
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const [isAligning, setIsAligning] = useState<boolean>(false)

	useEffect(() => {
		fetchTracks()
	}, [])

	useEffect(() => {
		if (currentTrackName) {
			setTrackName(currentTrackName)
			setFullTrackName(currentFullTrackName || currentTrackName)
		}
	}, [currentTrackName, currentFullTrackName])

	const fetchTracks = async () => {
		setLoadingFiles(true)
		try {
			if (!user) {
				throw new Error("User not authenticated")
			}
			const data = await mediaApi.fetchTracks({ token, user })
			setPremadeTracks(data.premade)
			setUploadedTracks(data.uploaded)
		} catch (error) {
			console.error("Error fetching tracks:", error)
			toast.error("Failed to load tracks", {
				description: "Could not fetch tracks from server",
				icon: <AlertCircle className="h-4 w-4" />,
			})
		} finally {
			setLoadingFiles(false)
		}
	}

	const resetPlayerAndLoadTrack = async (
		trackUrl: string,
		trackName: string,
		fullTrackName?: string
	) => {
		if (trackLoadingRef.current) {
			trackLoadingRef.current.abort()
		}

		const abortController = mediaApi.createAbortController()
		trackLoadingRef.current = abortController

		setLoadingTrack(true)
		setErrorMessage(null)

		try {
			onResetPlayer()

			setTrackName(`Loading: ${trackName}`)

			if (abortController.signal.aborted) {
				return
			}

			currentTrackRef.current = trackUrl
			const finalFullTrackName = fullTrackName || trackName
			setFullTrackName(finalFullTrackName)

			onTrackChange(trackUrl, trackName, fullTrackName as string)
			setTrackName(trackName)
		} catch (error) {
			if (error instanceof Error && !mediaApi.isAbortError(error)) {
				console.error("Error loading track:", error)
				setErrorMessage("Failed to load track")
				toast.error("Failed to load track", {
					description: "Could not load the selected track",
					icon: <AlertCircle className="h-4 w-4" />,
				})
			}
		} finally {
			if (!abortController.signal.aborted) {
				setLoadingTrack(false)
				trackLoadingRef.current = null
			}
		}
	}

	const handleTrackSelect = async (
		trackUrl: string,
		trackName: string,
		selectType: "premade" | "uploaded",
		originalFilename?: string
	) => {
		if (selectType === "premade") {
			setSelectedUploadedValue("")
		} else {
			setSelectedPremadeValue("")
		}

		await resetPlayerAndLoadTrack(trackUrl, trackName, originalFilename)
	}

	const handleFileUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0]
		if (!file) return

		setUploading(true)
		setErrorMessage(null)
		setUploadProgress(0)
		setUploadSuccess(false)

		try {
			mediaApi.validateFile(file)
			if (!user) {
				throw new Error("User not authenticated")
			}
			const data = await mediaApi.uploadFile(
				{ token, user },
				file,
				(progress) => {
					setUploadProgress(progress)
				}
			)

			// Success - automatically load the uploaded track
			setUploadSuccess(true)

			toast.success("Upload Successful!", {
				description: `${file.name} has been uploaded successfully`,
				icon: <CheckCircle className="h-4 w-4" />,
			})

			setSelectedPremadeValue("")
			setSelectedUploadedValue("")
			await resetPlayerAndLoadTrack(data.url, file.name, data.filename)

			fetchTracks()

			event.target.value = ""

			setTimeout(() => {
				setUploadSuccess(false)
				setUploadProgress(0)
			}, 3000)
		} catch (err) {
			console.error("Upload error:", err)
			const errorMsg =
				err instanceof Error
					? err.message
					: "Failed to upload file. Please try again."
			setErrorMessage(errorMsg)
			setUploadProgress(0)

			toast.error("Upload Failed", {
				description: errorMsg,
				icon: <AlertCircle className="h-4 w-4" />,
			})
		} finally {
			setUploading(false)
		}
	}

	const handleResetPlayer = () => {
		setFullTrackName(null)
		setTrackName("Upload a mp3 file!")
		onResetPlayer()
	}

	const renderTrackItems = (tracks: BlobMP3File[]) => {
		if (loadingFiles) {
			return (
				<SelectItem
					value="loading"
					disabled>
					<span className="flex items-center">
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Loading tracks...
					</span>
				</SelectItem>
			)
		}

		if (tracks.length === 0) {
			return (
				<SelectItem
					value="empty"
					disabled>
					No tracks found
				</SelectItem>
			)
		}

		return tracks.map((track) => (
			<SelectItem
				key={track.url}
				value={track.url}>
				<div className="flex flex-col">
					<span className="font-medium">{track.displayName}</span>
					<span className="text-xs text-gray-500">
						{mediaApi.formatFileSize(track.size)}
					</span>
				</div>
			</SelectItem>
		))
	}

	const controlsDisabled =
		uploading || loadingTrack || loadingFiles || audioLoading

	const onAnalyzedLyrics = (result: any) => {
		setAnalyzedLyrics(result)
		setTempo(Number(result.rhythm_info.tempo.toFixed(2)))
		setRapStyle(result.rhythm_info.rap_style)

		const verses = result.aligned_lyrics
		setAnalyzedVerses(verses)

		onAnalyzedVersesUpdate(verses)
	}

	useEffect(() => {
		if (!currentTrackRef.current || !lyricsText) setIsDisabled(true)
		else setIsDisabled(false)

		if (isAligning) {
			setIsDisabled(true)
		}

		onSetIsAligning(isAligning)
	}, [currentTrackRef.current, lyricsText, isAligning])

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	const handleAnalyze = async () => {
		await sleep(50)
		try {
			if (!currentTrackRef.current) {
				// console.log("audio or lyrics doesn't exist");
				toast.error("Audio doesn't exist or is not selected on uploads.")
				return
			}

			if (!lyricsText || lyricsText.trim().length === 0) {
				toast.error("No lyrics found.")
				return
			}

			// Convert the local URL to a File object
			const audioFile = await urlToFile(
				currentTrackRef.current,
				trackName,
				"audio/mpeg"
			)

			// Now call the API with the lyrics and File
			setIsAligning(true)
			const result = await analyzeLyrics(lyricsText, audioFile)

			console.log("Analysis result:", result)
			onAnalyzedLyrics(result)
		} catch (err) {
			console.error("Error analyzing lyrics:", err)
		}
		setIsAligning(false)
	}

	return (
		<div className="border-b border-[#1e3a5f] bg-[#112240] px-4 py-3">
			<div className="mb-4 flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<div className="text-sm text-gray-300">
						{uploading ? (
							<div className="flex items-center">
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								<span>Uploading... {Math.round(uploadProgress)}%</span>
							</div>
						) : loadingTrack || audioLoading ? (
							<div className="flex items-center">
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								<span>
									{audioLoading ? "Loading audio..." : "Loading track..."}
								</span>
							</div>
						) : uploadSuccess ? (
							<div className="flex items-center text-[#64ffda]">
								<CheckCircle className="mr-2 h-4 w-4" />
								<span>Upload successful!</span>
							</div>
						) : errorMessage ? (
							<div className="flex items-center text-red-400">
								<AlertCircle className="mr-2 h-4 w-4" />
								<span>{errorMessage}</span>
							</div>
						) : (
							trackName
						)}
					</div>

					<div className="relative">
						<input
							type="file"
							accept=".mp3,audio/mpeg"
							onChange={handleFileUpload}
							className="absolute inset-0 cursor-pointer opacity-0"
							disabled={controlsDisabled}
						/>
						<button
							className={`rounded-full p-1 ${
								controlsDisabled
									? "text-gray-500"
									: uploadSuccess
										? "text-[#64ffda]"
										: "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"
							}`}
							disabled={controlsDisabled}>
							{uploading ? (
								<Loader2 className="h-5 w-5 animate-spin" />
							) : uploadSuccess ? (
								<CheckCircle className="h-5 w-5" />
							) : (
								<Upload className="h-5 w-5" />
							)}
						</button>
					</div>

					<div className="rounded bg-[#1e3a5f] px-2 py-1 text-xs">
						{tempo.toFixed(0)} BPM
					</div>
					<div className="relative group">
						<Button
							variant="ghost"
							size="sm"
							className="rounded bg-[#1e3a5f] text-xs text-gray-200"
							tabIndex={0}>
							Song Details
						</Button>
						<div
							className="pointer-events-none absolute left-0 top-full z-10 mt-2 w-max rounded bg-[#0a192f] px-3 py-2 text-xs text-gray-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
							style={{ transitionDelay: "700ms" }}>
							{rapStyle ? (
								<p>Recommended Rap Style: {rapStyle.name}</p>
							) : (
								<p>Recommended Rap Style: Analyze Song to find out...</p>
							)}
							<p>Description: {rapStyle?.description}</p>
							<p>Time Style: {rapStyle?.time_style}</p>
						</div>
					</div>
				</div>

				<div className="flex items-center space-x-3">
					{/* Premade Tracks */}
					<Select
						value={selectedPremadeValue}
						onValueChange={(value) => {
							setSelectedPremadeValue(value)
							const track = premadeTracks.find((track) => track.url === value)
							if (track) {
								handleTrackSelect(
									track.url,
									track.displayName,
									"premade",
									track.originalFilename
								)
							}
						}}
						disabled={controlsDisabled}>
						<SelectTrigger
							className={`w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300 ${controlsDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
							<SelectValue placeholder="Premade Tracks" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Premade Music</SelectLabel>
								{renderTrackItems(premadeTracks)}
							</SelectGroup>
						</SelectContent>
					</Select>

					{/* Uploaded Tracks */}
					<Select
						value={selectedUploadedValue}
						onValueChange={(value) => {
							setSelectedUploadedValue(value)
							const track = uploadedTracks.find((track) => track.url === value)
							if (track) {
								handleTrackSelect(
									track.url,
									track.displayName,
									"uploaded",
									track.originalFilename
								)
							}
						}}
						disabled={controlsDisabled}>
						<SelectTrigger
							className={`w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300 ${controlsDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
							<SelectValue placeholder="Your Uploads" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel className="flex items-center justify-between">
									Your Uploaded Music
									<Button
										variant="ghost"
										size="sm"
										onClick={fetchTracks}
										disabled={controlsDisabled}
										className="h-4 w-4 p-0">
										{loadingFiles ? (
											<Loader2 className="h-3 w-3 animate-spin" />
										) : (
											<RefreshCw className="h-3 w-3" />
										)}
									</Button>
								</SelectLabel>
								{renderTrackItems(uploadedTracks)}
							</SelectGroup>
						</SelectContent>
					</Select>

					{isDisabled ? (
						<Button
							variant="outline"
							size="sm"
							className="mx-4 border-[#64ffda] text-[#64ffda] cursor-not-allowed"
							onClick={handleAnalyze}
							disabled={controlsDisabled}>
							{isAligning ? <p>Analyzing...</p> : <p>Analyze Song</p>}
						</Button>
					) : (
						<Button
							variant="outline"
							size="sm"
							className="mx-4 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
							onClick={handleAnalyze}
							disabled={controlsDisabled}>
							Analyze Song
						</Button>
					)}
				</div>
			</div>

			{/* Upload Progress Bar */}
			{uploading && (
				<div className="mb-4">
					<div className="mb-1 flex justify-between text-xs text-gray-400">
						<span>Uploading to Cloud Storage...</span>
						<span>{Math.round(uploadProgress)}%</span>
					</div>
					<Progress
						value={uploadProgress}
						className="h-2 w-full bg-[#1e3a5f]"
					/>
				</div>
			)}

			{/* Track Loading Progress */}
			{loadingTrack && (
				<div className="mb-4">
					<div className="mb-1 flex justify-between text-xs text-gray-400">
						<span>Loading track...</span>
					</div>
					<Progress
						value={100}
						className="h-2 w-full bg-[#1e3a5f] animate-pulse"
					/>
				</div>
			)}

			<div className="flex items-center">
				<div className="flex items-center space-x-2">
					{/* <button
            className={`rounded-full p-1 ${controlsDisabled ? "text-gray-500 cursor-not-allowed" : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"}`}
            disabled={controlsDisabled}
          >
            <SkipBack className="h-5 w-5" />
          </button> */}
					<button
						className={`rounded-full p-2 ${controlsDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-[#64ffda] hover:bg-[#5ae6c4]"} text-[#0a192f]`}
						onClick={togglePlay}
						disabled={controlsDisabled}>
						{loadingTrack ? (
							<Loader2 className="h-5 w-5 animate-spin" />
						) : isPlaying ? (
							<Pause className="h-5 w-5" />
						) : (
							<Play className="h-5 w-5" />
						)}
					</button>
					{/* <button
            className={`rounded-full p-1 ${controlsDisabled ? "text-gray-500 cursor-not-allowed" : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"}`}
            disabled={controlsDisabled}
          >
            <SkipForward className="h-5 w-5" />
          </button> */}
				</div>

				<div className="mx-auto flex w-3/4 items-center space-x-4">
					<span className="text-xl">{formatTime(currentTime)}</span>
					<Slider
						value={[progress]}
						min={0}
						max={100}
						step={0.1}
						className={`w-full ${controlsDisabled ? "opacity-50 pointer-events-none" : ""}`}
						onValueChange={handleSliderChange}
						disabled={controlsDisabled}
					/>
					<span className="text-xl">{formatTime(duration)}</span>
				</div>

				<div className="relative group ml-4">
					<Button
						variant={toggleKaraoke ? "default" : "outline"}
						size="sm"
						className={`${toggleKaraoke ? "bg-[#64ffda] text-[#0a192f]" : "border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"}`}
						onClick={() => {
							const newValue = !toggleKaraoke
							setToggleKaraoke(newValue)
							onSetKaraoke(newValue)
						}}
						disabled={controlsDisabled || !analyzedLyrics}>
						{toggleKaraoke ? "Karaoke On" : "Karaoke Off"}
					</Button>
					{!analyzedLyrics && (
						<div className="pointer-events-none absolute top-full z-10 mt-2 rounded bg-[#0a192f] px-3 py-2 text-xs text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
							You need to analyze the song first before enabling Karaoke.
						</div>
					)}
				</div>

				<div className="w-20"></div>
			</div>
		</div>
	)
}
