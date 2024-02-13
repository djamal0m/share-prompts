"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DialogDemo() {
  const [isOpen, setIsOpen] = useState(true);
  const openDialog = () => {};
  return (
    <div>
      {isOpen && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">test</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
