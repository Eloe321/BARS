import { RefreshCw } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function ThesaurusSidebar() {
  return (
    <div className="w-72 flex-shrink-0 overflow-y-auto border-l border-[#1e3a5f] bg-[#0a192f]">
      <div className="border-b border-[#1e3a5f] p-4">
        <h2 className="text-2xl font-bold">Thesaurus</h2>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-[#64ffda]">paningkamotan</h3>
        <p className="text-sm text-gray-400">verb</p>

        <p className="mt-4 text-sm text-gray-300">
          to exert effort in order to do, make, or perform something.
        </p>

        <div className="mt-6">
          <h4 className="mb-2 text-lg font-medium">synonyms:</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>singkamot</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>proseso</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>pagtrabaho</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>pagtrabaho sa</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>pagbag-o</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>pagtrabaho usab</span>
            </li>
          </ul>

          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>pag-usab</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>porma</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>agup-op</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>panday</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>trabaho</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>sobra nga trabaho</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="mb-2 text-lg font-medium">suggested metaphors:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>Paningkamotan nako nga musaka</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>Paningkamotan tika hangtod sa kahangturan</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ffda]">•</span>
              <span>Paningkamotan nga di mapukan</span>
            </li>
          </ul>

          <Button
            className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]"
            size="sm"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate metaphors
          </Button>
        </div>
      </div>
    </div>
  );
}
