interface TimelineSidebarProps {
  lyricCells: { id: number; type: string; content: string; timeStart?: string; timeEnd?: string }[];
}

const TimelineSidebar: React.FC<TimelineSidebarProps> = ({ lyricCells }) => {
  return (
    <div className="w-24 h-full flex-shrink-0 border-r border-[#1e3a5f] bg-[#0a192f]">
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium">Timeline</h3>
      </div>
      <div className="space-y-1 px-2 text-xs text-gray-400">
        {lyricCells.map((cell) => (
          <div className="flex justify-between" key={cell.id}>
            <span>{cell.timeStart}</span> {/* timeStart */}
            <span>-</span>
            <span>{cell.timeEnd}</span> {/* timeEnd */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSidebar;
