"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect } from "react";

export default function Modal({ confirmDelete, isOpen, setConfirmDelete }) {
  useEffect(() => {
    console.log(confirmDelete);
  }, [confirmDelete]);
  return (
    <div>
      {isOpen && (
        <Dialog open={isOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Delete prompt</DialogTitle>
              <DialogDescription>
                {"Are you sure you want to delete?"}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => {
                    setConfirmDelete(true);
                  }}
                >
                  Yes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
