"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

interface SongNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
  defaultName?: string;
  title?: string;
  description?: string;
}

export default function SongNameModal({
  isOpen,
  onClose,
  onConfirm,
  defaultName = "",
  title = "Save Song",
  description = "Enter a name for your song",
}: SongNameModalProps) {
  const [songName, setSongName] = useState(defaultName);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!songName.trim()) {
      setError("Song name is required");
      return;
    }

    if (songName.trim().length < 2) {
      setError("Song name must be at least 2 characters long");
      return;
    }

    if (songName.trim().length > 100) {
      setError("Song name must be less than 100 characters");
      return;
    }

    onConfirm(songName.trim());
    handleClose();
  };

  const handleClose = () => {
    setSongName(defaultName);
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="song-name">Song Name</Label>
              <Input
                id="song-name"
                value={songName}
                onChange={(e) => {
                  setSongName(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter song name..."
                className={error ? "border-red-500" : ""}
                autoFocus
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
